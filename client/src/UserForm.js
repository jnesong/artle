//components
import ArtistGuess from './ArtistGuess';
import TitleGuess from './TitleGuess';

const UserForm = ( {tries, makeArtistGuessArray} ) => {

    return (
        <div id="guess-columns">
            <ArtistGuess
            tries={tries}
            makeArtistGuessArray={makeArtistGuessArray}
            />
            <TitleGuess />
        </div>
    )

};

export default UserForm;