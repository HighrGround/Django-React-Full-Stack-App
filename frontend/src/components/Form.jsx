import { useState } from "react";
import api from "../api"; // Assuming this is your API client
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    setLoading(true); // Set loading state to indicate ongoing request

    try {
      const response = await api.post(route, { username, password });

      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, response.data.refresh); // Use correct key name
        localStorage.setItem(REFRESH_TOKEN, response.data.refresh); // Use correct key name
        navigate("/"); // Redirect to home page on successful login
      } else {
        navigate("/login"); // Redirect to login page on successful registration
      }
    } catch (error) {
      alert("Error submitting form:", error.message); // Provide user-friendly error message
    } finally {
      setLoading(false); // Reset loading state regardless of success or failure
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="form-container">
      <h1>{method === "login" ? "Login" : "Register"}</h1>
      <input
        className="form-input"
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username"
      />
      <input
        className="form-input"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <button className="form-button" type="submit" disabled={loading}>
        {method} {loading ? " (Loading...)" : ""}  {/* Show loading state in button */}
      </button>
    </form>
  );
}

export default Form;
