import { useState } from 'react';
import authService from '../../services/auth';

const Login = () => {
  // TODO: Convert to one object
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    await authService.login(email, password);
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={({ target }) => setEmail(target.value)}/>
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={({ target }) => setPassword(target.value)}/>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;