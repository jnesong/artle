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
  const [artistGuesses, setArtistGuesses] = useState([]);


  //refactor this too
  //4 lines - increases variable tries with each click, tries is passed down to all child components
  const addTries = () => {
    setTries(tries => tries + 1);
    console.log("clicked");
  };

  const makeArtistGuessArray = (newGuess) => {
    if (artistGuesses[0]==="") {setArtistGuesses([newGuess])}
    else {setArtistGuesses([...artistGuesses, newGuess])}
  }


  return (
    <div className="center-piece">
      <p id="artle-title"> Artle </p>
      <ArtPiece tries={tries} />
      <UserForm
        tries={tries}
        makeArtistGuessArray={makeArtistGuessArray}
      />
      <button id="click" onClick={addTries}> submit </button>
      <UserPreviousGuess
        artistGuesses={artistGuesses}
      />
    </div>
  );
}

export default App;
