import {useState} from "react";
import { Navigate } from "react-router-dom";


export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('https://blogbackend-1-h4wy.onrender.com/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('Registration successful!');
      setRedirect(true);
    } else if(response.status===400){
      setMessage('User already exists')
    }else {
      setMessage('Registration failed!');
    }
  }

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Create Your Account</h1>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
      <input type="password"
             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
      <button type="submit">Register</button>
      {message && (
        <p className={`result ${message === 'Registration failed' ? 'failure' : 'success'}`}>
          {message}
        </p>
      )}
    </form>
  );
}