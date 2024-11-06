import React from 'react';

const Home = () => {
  const queryParams = new URLSearchParams(window.location.search);

  
  const name = queryParams.get('name') || 'Guest';

  return (
    <>
      <h1>Welcome, {name}!</h1>
      <h1>This is the home page</h1>
    </>
  );
};

export default Home;
