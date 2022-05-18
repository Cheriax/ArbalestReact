import React from 'react';
import MenuAppBar from './Components/MenuAppBar';

function App() {
  const value = 'World';
  return (
    <>
      <MenuAppBar />
      <div>Hello {value}</div>
    </>
  );
}

export default App;
