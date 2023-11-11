import { useQuery } from '@apollo/client';
import PostList from '../components/PostList';
import { QUERY_POSTS } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];

    return (
      <div className="main-div">
        <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList
              posts={posts}
              title="Newest Posts"
            />
          )}
        </div>
      </div>
    )
}

export default Home;