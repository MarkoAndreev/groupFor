import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

import { QUERY_SINGLE_POST } from "../utils/queries";

const SinglePost = () => {
    const { postId } = useParams();

    const {loading, data} = useQuery(QUERY_SINGLE_POST, {
        variables: {
            postId
        }
    });

    const post = data?.post || {};

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="post-container">
            <div className="card mb-3">
                <p className="card-header">
                    <span style={{fontStyle: "italic", fontWeight: "bold"}}>
                        Posted by {post.postAuthor}
                    </span>{" "}
                    on {post.createdAt}
                </p>
                <div className="card-body">
                    <p>{post.postDesc}</p>
                </div>
            </div>
            <CommentList comments={post.comments} />
            <CommentForm postId={post._id} />
        </div>
    )
}

export default SinglePost;
