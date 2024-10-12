import { useState } from 'react';
import authService from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { FormControl, TextField, Button } from '@mui/material';

const Signup = () => {
  // TODO: Convert to one object
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    const response = await authService.signup(username, email, password);
    setUsername('');
    setEmail('');
    setPassword('');
    if (response.success) navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <FormControl>
          <TextField 
            label="Username" 
            variant="outlined" 
            required
            fullWidth
            onChange={({ target }) => setUsername(target.value)}
          />
          <TextField 
            label="Email" 
            variant="outlined" 
            type="email"
            required
            fullWidth
            onChange={({ target }) => setEmail(target.value)}
          />
          <TextField 
            label="Password" 
            variant="outlined" 
            required
            type="password"
            fullWidth
            onChange={({ target }) => setPassword(target.value)}
          />
          <Button variant="contained" color="primary" type="submit">Login</Button>
        </FormControl>
      </form>
    </div>
  );
};

export default Signup;