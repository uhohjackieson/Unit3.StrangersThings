import { useState } from "react";
import Authenticate from "./Authenticate";
const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function SignUpForm({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();


    try {
      // if else statement
      if ({ username }.username.length > 8) {
        const response = await fetch(`${BASE_URL}/users/register`, {
          method: "POST",
          body: JSON.stringify({ user: { username, password } }),
          headers: {
            "Content-type": "application/json",
          },
        });
        const result = await response.json();
        setToken(result);
        console.log(result);
        return result;
      } else {
        alert("username too short");
        setUsername("");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username: {""}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />

        <label htmlFor="">
          Password: {""}
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />

        <button className="button">Submit</button>
      </form>
      <div>
        <Authenticate token={token} setToken={setToken} />
      </div>
    </div>
  );
}
