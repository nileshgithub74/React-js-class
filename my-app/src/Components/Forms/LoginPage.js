import React, { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [submitted, setSubmitted] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newSubmission = {
      userName: formData.userName,
      email: formData.email,
    };

    setSubmitted([newSubmission]);

    setFormData({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f2f2f2",
      fontFamily: "Arial, sans-serif",
    },
    form: {
      backgroundColor: "#ffffff",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      maxWidth: "400px",
      width: "100%",
      textAlign: "center",
    },
    heading: {
      color: "#333",
    },
    label: {
      display: "block",
      fontWeight: "bold",
      margin: "0.5rem 0 0.3rem",
      color: "#555",
      textAlign: "left",
    },
    input: {
      width: "100%",
      padding: "0.8rem",
      margin: "0.2rem 0 1rem",
      border: "1px solid #ddd",
      borderRadius: "5px",
      outline: "none",
      boxSizing: "border-box",
      fontSize: "1rem",
    },
    button: {
      width: "100%",
      padding: "0.8rem",
      marginTop: "1rem",
      backgroundColor: "#4caf50",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#45a049",
    },
    list: {
      marginTop: "1rem",
      padding: 0,
      listStyleType: "none",
    },
    listItem: {
      backgroundColor: "#e8f5e9",
      border: "1px solid #4caf50",
      borderRadius: "5px",
      padding: "0.5rem",
      marginTop: "0.5rem",
      color: "#333",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h3 style={styles.heading}>Registration Form</h3>
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>UserName:</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            placeholder="Enter your username"
            onChange={handleInputChange}
            required
            style={styles.input}
          />
          <br />

          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleInputChange}
            required
            style={styles.input}
          />
          <br />

          <label style={styles.label}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter your password"
            onChange={handleInputChange}
            required
            style={styles.input}
          />
          <br />

          <label style={styles.label}>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Confirm your password"
            onChange={handleInputChange}
            required
            style={styles.input}
          />
          <br />

          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Register
          </button>
        </form>

        {submitted.length > 0 && (
          <ul style={styles.list}>
            {submitted.map((submission, index) => (
              <li key={index} style={styles.listItem}>
                <strong>UserName:</strong> {submission.userName} <br />
                <strong>Email:</strong> {submission.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
