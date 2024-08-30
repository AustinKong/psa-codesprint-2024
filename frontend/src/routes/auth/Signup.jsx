import { useState } from 'react';
import authService from '../../services/auth';

const Signup = () => {
  // TODO: Convert to one object
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    await authService.signup(username, email, password);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <label>
          Username:
          <input type="text" name="username" value={username} onChange={({ target }) => setUsername(target.value)}/>
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={({ target }) => setEmail(target.value)}/>
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={({ target }) => setPassword(target.value)}/>
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;