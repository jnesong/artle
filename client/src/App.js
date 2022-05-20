//libraries
import { useState, useEffect } from 'react';
//components
import Aioc from './Aioc';
import ArtPiece from './ArtPiece';
//styling
import './artle.css'
import UserForm from './UserForm';
import UserPreviousGuess from './UserPreviousGuess';

function App() {

  const [tries, setTries] = useState(0);

  //refactor this too
  const addTries = () => {
    setTries(tries => tries + 1);
    console.log("clicked");
  };


  return (
    <div className="center-piece">
      <p id="artle-title"> Artle </p>
      <ArtPiece tries={tries} />
      <UserForm />
      <button id="click" onClick={addTries}> submit </button>
      <UserPreviousGuess />
    </div>
  );
}

export default App;
