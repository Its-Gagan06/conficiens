import "./AuthForms.css";

// function GoogleIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 48 48">
//       <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z" />
//       <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.9 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z" />
//       <path fill="#4CAF50" d="M24 44c5.4 0 10.3-2.1 14-5.5l-6.5-5.3C29.4 34.9 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.6 5.1C9.6 39.6 16.2 44 24 44z" />
//       <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.3-4.1 5.7l6.5 5.3C39.9 37 44 31 44 24c0-1.3-.1-2.7-.4-3.5z" />
//     </svg>
//   );
// }

export default function Signup() {
 

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Create an account</h1>
        <p className="auth-subtitle">Get started with your free account.</p>

        <form >
          <div className="auth-field">
            <label className="auth-label" htmlFor="fullName">Full name</label>
            <div className="auth-input-wrap">
              <input
                id="fullName"
                name="fullName"
                type="text"
                className="auth-input"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="email">Email address</label>
            <div className="auth-input-wrap">
              <input
                id="email"
                name="email"
                type="email"
                className="auth-input"
                placeholder="Enter your email address"
                
              />
            </div>
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="password">Password</label>
            <div className="auth-input-wrap">
              <input
                id="password"
                name="password"
                type={"password"}
                className="auth-input has-icon"
                placeholder="Enter your password"
                
              />
              <button
                type="button"
                className="auth-eye-btn"
              >
                <i class="fa-solid fa-eye"></i>
              </button>
            </div>
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="confirmPassword">Confirm password</label>
            <div className="auth-input-wrap">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={"password"}
                className="auth-input has-icon"
                placeholder="Confirm your password"
                
              />
              <button
                type="button"
                className="auth-eye-btn"
                
                aria-label="Toggle confirm password visibility"
              >
                <i class="fa-solid fa-eye"></i>
              </button>
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">Sign Up</button>
        </form>

        <div className="auth-divider"><span>OR</span></div>

        <button type="button" className="auth-google-btn">
          <i class="fa-brands fa-google"></i>
          Continue with Google
        </button>

        <p className="auth-footer">
          Already have an account? <a className="auth-link" href="/Login">Log in</a>
        </p>
      </div>
    </div>
  );
}