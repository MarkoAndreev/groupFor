import { UPDATE_COMMENT, REMOVE_COMMENT } from "../../utils/actions";

const CommentList = ({ comments = [] }) => {
  
  if (!comments.length) {
    return <h3>🦗 *cricket noises*</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: "1px dotted #1a1a1a" }}
      >
        Comments
      </h3>

      <div className="flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="comment-card">
              <div className="inside-comment-card">
                <h5 className="card-header">
                  {comment.commentAuthor} commented {" "}
                  <span style={{ fontSize: "0.825rem" }}>
                    on {comment.createdAt}
                  </span>
                </h5>
                <p className="card-body">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;