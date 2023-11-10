import { Link } from 'react-router-dom';

const PostList = ({
  posts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div className='post-container'>
      {showTitle && <h3>{title}</h3>}
      {posts &&
        posts.map((Post) => (
          <div key={Post._id} className="">
            <h4 className="">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${Post.postAuthor}`}
                >
                  {Post.postAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this Post on {Post.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this Post on {Post.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="">
              <p>{Post.postDesc}</p>
            </div>
            <Link
              className=""
              to={`/Posts/${Post._id}`}
            >
              Join the discussion on this Post.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PostList; 