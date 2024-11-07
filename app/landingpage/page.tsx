// Import libraries and styles
import Image from 'next/image';
import landingBg from '../path/to/landingpage.png';
import styles from './LandingPage.module.css';
import { useState } from 'react';

export default function LandingPage() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle Signup
  const handleSignup = () => {
    setEmail(inputEmail);
    setPassword(inputPassword);
    setIsSignedUp(true);
    alert('Signup successful! You can now log in.');
  };

  // Handle Login
  const handleLogin = () => {
    if (isSignedUp && inputEmail === email && inputPassword === password) {
      setIsLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid login. Please check your email and password.');
    }
  };

  return (
    <div className={styles.landingPage}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          {/* Logo Section */}
          <div className={styles.logo}>
            <h1>Your Blog Logo</h1>
          </div>

          {/* Authentication Section */}
          <div className={styles.authSection}>
            <h2>{isSignedUp ? 'Welcome Back' : 'Create Your Account'}</h2>
            <p>{isSignedUp ? 'Log in to your account' : 'Sign up to get started'}</p>

            {/* Form Fields */}
            <input
              type="email"
              placeholder="Email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />

            {/* Signup or Login Button */}
            {!isSignedUp ? (
              <button className={styles.loginButton} onClick={handleSignup}>
                SIGN UP
              </button>
            ) : (
              <button className={styles.loginButton} onClick={handleLogin}>
                LOG IN
              </button>
            )}

            {isSignedUp && !isLoggedIn && (
              <p className={styles.signupText}>
                Forgot your password? <a href="#">Reset</a>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Background Image */}
      <Image
        src={landingBg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className={styles.backgroundImage}
      />
    </div>
  );
}
