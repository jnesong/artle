//libraries
import { useState, useEffect } from 'react';
//components
import Aioc from './Aioc';
import ArtPiece from './ArtPiece';
//styling
import './artle.css'
import ArtistGuess from './ArtistGuess';
import TitleGuess from './TitleGuess';

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
      <ArtistGuess />
      <TitleGuess />
      <button id="click" onClick={addTries}> submit </button>
    </div>
  );
}

export default App;
