import React from 'react';

const Contact = () => {
  const queryParams = new URLSearchParams(window.location.search);

  
  const method = queryParams.get('email') || 'other';

  return (
    <>
      <h1>This is the Contact Page</h1>
      <p>Preferred contact method: {method}</p>
      <p>Feel free to reach out to us through your preferred method.</p>
    </>
  );
};

export default Contact;
