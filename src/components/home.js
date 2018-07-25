import React from 'react';
import { Button } from 'vanilla-framework-react';

const Home = () => {
  return (
    <div>
      <h1>Vanilla Template Builder</h1>
      <Button positive>Click me!</Button>
    </div>
  );
};

Home.displayName = 'Home';

export default Home;
