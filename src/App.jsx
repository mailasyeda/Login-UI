import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="login-container">
        <div className="login-card">

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          <button className="login-btn">
            Sign In
          </button>

          <p className="signup-text">
            Don't have an account?
            <a href="#"> Sign up</a>
          </p>

        </div>
      </div>
    </>
  );
}

export default App;