import React, { useState } from "react";

const LoginPage= () => {
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

    setSubmitted([ newSubmission]);

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

  return (
    <>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>UserName: </label>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          placeholder="Enter your username"
          onChange={handleInputChange}
          required
        />
        <br />

        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleInputChange}
          required
        />
        <br />

        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleInputChange}
          required
        />
        <br />

        <label>Confirm Password: </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm your password"
          onChange={handleInputChange}
          required
        />
        <br />

        <button type="submit">Register</button>
      </form>

      {submitted.length > 0 && (
        <ul>
          {submitted.map((submission, index) => (
            <li key={index}>
              <strong>UserName:</strong> {submission.userName} <br />
              <strong>Email:</strong> {submission.email}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default  LoginPage;
