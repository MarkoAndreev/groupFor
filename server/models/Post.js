const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const postSchema = new Schema({
//   postImage: {
//     type: String,
//     required: true
//   },
  postDesc: {
    type: String,
    required: "Leave a description!",
    minlength: 10,
    maxlength: 300,
    trim: true,
  },
  postAuthor: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        minlength: 1,
        maxlength: 250
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
  likes: {
    type: Number,
    default: 0,
  }
});

const Post = model("Post", postSchema);

module.exports = Post;
