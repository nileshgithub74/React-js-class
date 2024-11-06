import React from 'react';

const Home = () => {
  const queryParams = new URLSearchParams(window.location.search);

  
  const name = queryParams.get('name');

  return (
    <>
      <h1>Welcome, {name}!</h1>
    
    </>
  );
};

export default Home;
