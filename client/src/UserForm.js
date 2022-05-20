//components
import ArtistGuess from './ArtistGuess';
import TitleGuess from './TitleGuess';

const UserForm = ( {tries, makeArtistGuessArray, artistCorrect} ) => {

    return (
        <div id="guess-columns">
            <ArtistGuess
            tries={tries}
            makeArtistGuessArray={makeArtistGuessArray}
            artistCorrect={artistCorrect}
            />
            <TitleGuess />
        </div>
    )

};

export default UserForm;