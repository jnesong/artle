//libraries
import { useState, useEffect } from 'react';
//components
import Aioc from './Aioc';
import ArtPiece from './ArtPiece';
//styling
import './artle.css'
import UserForm from './UserForm';

function App() {

  const [tries, setTries] = useState(0);

  //refactor this too
  const addTries = () => {
    setTries(tries => tries + 1);
    console.log("clicked");
  };


  return (
    <div className="center-piece">
      <ArtPiece tries={tries} />
      <UserForm />
      <button id="click" onClick={addTries}> submit </button>
    </div>
  );
}

export default App;
