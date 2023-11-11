import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';

const PostForm = () => {
  const [postDesc, setPostDesc] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation
  (ADD_POST, {
    refetchQueries: [
      QUERY_POSTS,
      'getPosts',
      QUERY_ME,
      'me'
    ]
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addPost({
        variables: {
          postDesc,
          // Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username 
          postAuthor: Auth.getProfile().authenticatedPerson.username
        },
      });

      setPostDesc('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'postDesc' && value.length <= 280) {
      setPostDesc(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className='post-form-inside'>
      <h3>What's on your techy mind?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`character-count ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className=""
            onSubmit={handleFormSubmit}
          >
            <div className="post-desc-textarea">
              <textarea
                name="postDesc"
                placeholder="New post..."
                value={postDesc}
                className=""
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="submit-button-container">
              <button className="submit-button" type="submit">
                <p>Add Post</p>
              </button>
            </div>
            {error && (
              <div className="">
                Description Needed for Post!
              </div>
            )}
          </form>
        </>
      ) : (
        <p className='log-in-message'>
          You need to be logged in to share your posts. Please{' '}
          <Link to="/login" className='login-link-text'>Login</Link> or <Link to="/signup" className='login-link-text'>Signup</Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;
