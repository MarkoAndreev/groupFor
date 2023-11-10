import { useQuery } from '@apollo/client';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import { QUERY_POSTS } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];

    return (
        <div className="container">
        <div
          className="post-form"
        >
          {<PostForm />}
        </div>
        <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList
              posts={posts}
              title="Some Feed for Posts..."
            />
          )}
        </div>
      </div>
    )
}

export default Home;