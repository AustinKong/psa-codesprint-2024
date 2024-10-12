import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Home = () => {
  return (
    <div>
      <h1>PSA COdesprint</h1>
      <h2>Hello world</h2>
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
}

export default Home;