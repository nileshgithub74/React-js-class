import React from 'react'

export default function LoginForm() {
  const styles = {
    loginContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif',
    },
    loginForm: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '1.5rem',
      color: '#333',
    },
    toggleButtons: {
      display: 'flex',
      marginBottom: '1.5rem',
    },
    toggleButton: {
      flex: 1,
      padding: '0.5rem',
      border: 'none',
      backgroundColor: '#e0e0e0',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    activeButton: {
      backgroundColor: '#1a73e8',
      color: 'white',
    },
    leftButton: {
      borderTopLeftRadius: '5px',
      borderBottomLeftRadius: '5px',
    },
    rightButton: {
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      marginBottom: '1rem',
      padding: '0.5rem',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '1rem',
    },
    forgotPassword: {
      textAlign: 'right',
      display: 'block',
      marginBottom: '1rem',
      color: '#1a73e8',
      textDecoration: 'none',
      fontSize: '0.9rem',
    },
    loginButton: {
      backgroundColor: '#1a73e8',
      color: 'white',
      padding: '0.5rem',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    signupPrompt: {
      textAlign: 'center',
      marginTop: '1rem',
      fontSize: '0.9rem',
      color: '#333',
    },
    signupLink: {
      color: '#1a73e8',
      textDecoration: 'none',
    },
  }

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginForm}>
        <h2 style={styles.heading}>Login Form</h2>
        <div style={styles.toggleButtons}>
          <button style={{...styles.toggleButton, ...styles.activeButton, ...styles.leftButton}}>Login</button>
          <button style={{...styles.toggleButton, ...styles.rightButton}}>Signup</button>
        </div>
        <form style={styles.form}>
          <input
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            aria-label="Password"
            style={styles.input}
          />
          <a href="#" style={styles.forgotPassword}>Forgot password?</a>
          <button type="submit" style={styles.loginButton}>Login</button>
        </form>
        <p style={styles.signupPrompt}>
          Not a member? <a href="#" style={styles.signupLink}>Signup now</a>
        </p>
      </div>
    </div>
  )
}