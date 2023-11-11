const { User, Post } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("posts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("posts");
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("posts");
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addPost: async (parent, { postDesc }, context) => {
      if (context.user) {
        const post = await Post.create({
          postDesc,
          postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
        );

        return post;
      }
      throw AuthenticationError;
    },
    addComment: async (parent, { postId, commentText }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $pull: { posts: post._id },
          }
        );
      }
      throw AuthenticationError;
    },
    removeComment: async (parent, { postId, commentId }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          {
            new: true,
          }
        );
      }
      throw AuthenticationError;
    },
    updatePost: async (parent, { postId, postDesc }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId, postAuthor: context.user.username },
          { postDesc },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
    updateComment: async (
      parent,
      { postId, commentId, commentText },
      context
    ) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $set: {
              "comments.$[comment].commentText": commentText,
            },
          },
          {
            arrayFilters: [{ "comment._id": commentId }],
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    updateUser: async (parent, { userId, username, email }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          { username, email },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
    updatePassword: async (parent, { userId, password, email }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId, email: email },
          { password },
          { new: true }
        );
      }
      throw new Error("Oh no something went wrong");
    },
    likePost: async (parent, { postId }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $inc: {
              likes: 1,
            },
          },
          {
            new: true,
          }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
