import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  return (
    <>
      <Helmet>
        <title>Page Title</title>
      </Helmet>
      <div className="App">
        <h1>My First Heading</h1>
        <p>My first paragraph.</p>
      </div>
    </>
  );
}

export default App;
