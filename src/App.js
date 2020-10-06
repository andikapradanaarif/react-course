import React from 'react';
import './App.css';
import Header from './header';

const App = () => {
  const listName = ['arif', 'bagus', 'budi'];
  const headerMapped = listName.map((name) => {
    return <Header key={name} headerName={name} />;
  });
  return (
    <div className="App">
      <p>My first paragraph.</p>
      {headerMapped}
    </div>
  );
};

export default App;
