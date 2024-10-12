import { useState } from 'react';
import authService from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { FormControl, TextField, Button } from '@mui/material';

const Login = () => {
  // TODO: Convert to one object
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await authService.login(email, password);
    setEmail('');
    setPassword('');

    if (response.success) navigate('/');
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <FormControl>
          <TextField 
            label="Email" 
            variant="outlined" 
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
  )
}

export default Login;