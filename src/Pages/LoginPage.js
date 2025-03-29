import { useContext, useState } from "react";
import { Navigate ,Link} from "react-router-dom";
import { UserContext } from "../UserContext";



export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();

    try {
      const response = await fetch("https://blogbackend-1-h4wy.onrender.com/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        
      });

      if (response.ok) {
        const userInfo = await response.json();
        setUserInfo(userInfo); 
        alert("Login SucessFull");
        setRedirect(true);
        
      } else {
        alert("Invalid username or password");
      }
    } catch (err) {
      console.error("Error during login:", err);
      alert("Login failed. Please try again.");
    }
  }

  if (redirect) {
    return <Navigate to="/index" />;
  }

  return (
    <form className="login" onSubmit={login}>
      <h1>Login to your account</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button type="submit">Login</button>

      <p>Don't have an account? Register here</p>


<Link to='/register'>
      <button>create a new account</button>
      </Link>
    </form>
  );
}