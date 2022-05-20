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
import a6 from './gallery/a6.jpg';
import a7 from './gallery/a7.jpg';
import a8 from './gallery/a8.jpg';
import a9 from './gallery/a9.jpg';
import a10 from './gallery/a10.jpg';
import a11 from './gallery/a11.jpg';
import a12 from './gallery/a12.jpg';
import a13 from './gallery/a13.jpg';
import a14 from './gallery/a14.jpg';
import a15 from './gallery/a15.jpg';
import a16 from './gallery/a16.jpg';
import a17 from './gallery/a17.jpg';
import a18 from './gallery/a18.jpg';
import a19 from './gallery/a19.jpg';
import a20 from './gallery/a20.jpg';


function App() {

  let currentArtPiece = a19
  let artBankMatch = artBank.a19

  const [tries, setTries] = useState(0);
  const [artistGuesses, setArtistGuesses] = useState([]);
  const [artistCorrect, setArtistCorrect] = useState(false);
  const [guessResponse, setGuessResponse] = useState("");


  //refactor this too
  //4 lines - increases variable tries with each click, tries is passed down to all child components
  const addTries = () => {
    setTries(tries => tries + 1);
    console.log("clicked");
  };

  const makeArtistGuessArray = (newGuess) => {
    if (newGuess === artBankMatch.artist) {
      setArtistCorrect(true)
      setGuessResponse("✓")
    }
    if (artistGuesses[0]==="") {
      setArtistGuesses([newGuess])
      setGuessResponse("ⓧ")
    }
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
        guessResponse={guessResponse}
      />
      <button id="click" onClick={addTries}> submit </button>
      <UserPreviousGuess
        artistGuesses={artistGuesses}
      />
    </div>
  );
}

export default App;
