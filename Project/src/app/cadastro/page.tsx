import "./style.css";

export default function Login() {
    return (
      
      <div>
        <header className="banner">
          <h1> </h1>
          <h1>EV&C</h1>
                      
        </header>
  
        <div className="login-container">
          <h1>Sign in to ev&c</h1>
          <form>
            <label htmlFor="username">Username or email address</label>
            <input type="text" id="username" required />
    
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
  
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
  
            <button type="submit">Sign in</button>
          </form>
          <p className="register">
            New to EV&C? <a href="cadastro">Create an account</a>.
          </p>
        </div>
      </div>
    );
  }
  