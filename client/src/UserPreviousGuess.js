//libraries
import { useEffect } from 'react';

const UserPreviousGuess = ( {artistGuesses} ) => {

    let previousTitles = 
    <ol className="previous-guess-list-b">
        <li> What Field with Cypresses </li>
    </ol>;

    return (
        <div id="prev-guess-columns">
            <ol>
            {artistGuesses.map(artist => (
                    <li className="prev-guess-item" key={artist.id}> {artist} </li>
                ))}
            </ol>
            {previousTitles}
        </div>
    )

};

export default UserPreviousGuess;