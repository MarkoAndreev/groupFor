// import { useQuery } from '@apollo/client';

import Login from '../components/LoginForm';
import Signup from '../components/SignupForm';

const LoginSignup = () => {

  return (
    <main>
      <div className="flexBox">
        <div
          className=""
          // style={{ border: '1px dotted #1a1a1a' }}
        >
          <Login />
        </div>
        <div className='center smallDiv'>
          <p>OR</p>
        </div>
        <div
          className=""
          // style={{ border: '1px dotted #1a1a1a' }}
        >
          <Signup />
        </div>
      </div>
    </main>
  );
};

export default LoginSignup;
