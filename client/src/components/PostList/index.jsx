import { Link } from "react-router-dom";
import React from "react";
import { UPDATE_POST, REMOVE_POST } from "../../utils/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const PostList = ({ posts, title, showTitle = true, showUsername = true }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div className="">
      <div className="center">
        {showTitle && <h3 className="">{title}</h3>}
      </div>
      <div className="home-container">
        {posts &&
          posts.map((Post) => (
            <div key={Post._id} className="card">
              <h3 className="">
                {showUsername ? (
                  <Link className="" to={`/profiles/${Post.postAuthor}`}>
                    {Post.postAuthor} <br />
                  </Link>
                ) : (
                  <>
                    {/* <span style={{ fontSize: "1rem" }}>
                    You made this Post on {Post.createdAt}
                  </span> */}
                  </>
                )}
              </h3>
              
              <div className="description">
                <p>{Post.postDesc}</p>
              </div>
              {/* <CommentList comments={Post.comments} /> */}
              {/* <div>
                <ul>
                  {Post.comments.map((comment) => (
                    <li key={comment._id}>
                      <h4>{comment.commentAuthor}</h4>
                      <p>{comment.commentText}</p>
                    </li>
                  ))}
                </ul>
              </div> */}
              
              <small>{Post.createdAt}</small>
             
              <hr />
              <Link to={`/Posts/${Post._id}`} ><FontAwesomeIcon icon={ faUser } style={{color : "var(--brown"}}/>
              </Link>
              
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostList;

