import React from 'react';

const About = () => {
  const queryParams = new URLSearchParams(window.location.search);

  
  const section = queryParams.get('section') || 'General Information';

  return (
    <> 
      <h1>This is the About Page</h1>
      <h3>Course: {section}</h3>
      <p>Welcome to the About page. Here you can learn more about this section!</p>
    </>
  );
};

export default About;
