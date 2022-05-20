//libraries
import { useEffect } from 'react';

const UserPreviousGuess = ({ artistGuesses }) => {

    return (
        <div id="prev-guess-columns">
            <ol className="previous-guess-list-a">
                {artistGuesses.map(artist => (
                    <li className="prev-guess-item" key={artist.id}> {artist} </li>
                ))}
            </ol>
            <ol className="previous-guess-list-b">
                <li> Wheat Field with Cypresses </li>
            </ol>
        </div>
    )

};

export default UserPreviousGuess;