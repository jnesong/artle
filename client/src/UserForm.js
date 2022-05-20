//components
import ArtistGuess from './ArtistGuess';
import TitleGuess from './TitleGuess';

const UserForm = ( {tries, makeArtistGuessArray, artistCorrect, guessResponse} ) => {

    return (
        <div id="guess-columns">
            <ArtistGuess
            tries={tries}
            makeArtistGuessArray={makeArtistGuessArray}
            artistCorrect={artistCorrect}
            guessResponse={guessResponse}
            />
            <TitleGuess />
        </div>
    )

};

export default UserForm;