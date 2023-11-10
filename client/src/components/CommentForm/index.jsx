import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_COMMENT } from "../../utils/mutations";

import Auth from "../../utils/auth";

const CommentForm = ({ }) => {
  const { postId } = useParams();
  const [commentText, setCommentText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          postId,
          commentText,
          commentAuthor: Auth.getProfile().authenticatedPerson.username,
        },
      });

      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentText" && value.length <= 250) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className="comment-form-container">
      {Auth.loggedIn() ? (
        <>
          <p
            className={`character-counter ${
              characterCount === 250 || error ? "text-error" : ""
            }`}
          >
            Character Count: {characterCount}/250
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className="comment-form"
            onSubmit={handleFormSubmit}
          >
            <textarea
              name="commentText"
              placeholder="Leave a comment..."
              value={commentText}
              className="form-input"
              onChange={handleChange}
            ></textarea>

            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{" "}
          <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link>
        </p>
      )}
    </div>
  );
};

export default CommentForm;