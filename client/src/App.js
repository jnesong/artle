//libraries
import { useState, useEffect } from 'react';
//components
import ArtPiece from './ArtPiece';
import artBank from './ArtBank';
//styling
import './artle.css'
import UserForm from './UserForm';
import UserPreviousGuess from './UserPreviousGuess';
//gallery
import a0 from './gallery/a0.jpg';
import a1 from './gallery/a1.jpg';
import a2 from './gallery/a2.jpg';
import a3 from './gallery/a3.jpg';
import a4 from './gallery/a4.jpg';
import a5 from './gallery/a5.jpg';

function App() {

  let currentArtPiece = a3
  let artBankMatch = artBank.a3

  const [tries, setTries] = useState(0);
  const [artistGuesses, setArtistGuesses] = useState([]);
  const [artistCorrect, setArtistCorrect] = useState(false);


  //refactor this too
  //4 lines - increases variable tries with each click, tries is passed down to all child components
  const addTries = () => {
    setTries(tries => tries + 1);
    console.log("clicked");
  };

  const makeArtistGuessArray = (newGuess) => {
    if (newGuess === artBankMatch.artist) {setArtistCorrect(true)}
    if (artistGuesses[0]==="") {setArtistGuesses([newGuess])}
    else {setArtistGuesses([...artistGuesses, newGuess])}
  }


  return (
    <div className="center-piece">
      <p id="artle-title"> Artle </p>
      <ArtPiece tries={tries} currentArtPiece={currentArtPiece} />
      <UserForm
        tries={tries}
        makeArtistGuessArray={makeArtistGuessArray}
        artistCorrect={artistCorrect}
      />
      <button id="click" onClick={addTries}> submit </button>
      <UserPreviousGuess
        artistGuesses={artistGuesses}
      />
    </div>
  );
}

export default App;
