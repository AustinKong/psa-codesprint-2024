import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Home = () => {
  const user = useSelector((state) => state.user);

  if (user.token == null) {
    return (
      <div>
        User is not logged in:
        <Button 
          component={Link} 
          variant="contained" 
          to={`auth/login`}
        >
          Redirect to login page
        </Button>
        <Button 
          component={Link} 
          variant="contained" 
          to={`auth/signup`}
        >
          Redirect to signup page
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        User is logged in:
        <div>
          Login status:
          {user.token != null ? `Logged in as user ${user.username} with authToken ${user.token}` : `Not logged in`}
        </div>
        <p>
          Hello world!
        </p>
      </div>
    );
  }
}

export default Home;