//libraries
import { useEffect } from 'react';

const UserPreviousGuess = ( {artistGuesses} ) => {

    let artistGuessList = <li> previous artist guess </li>

    useEffect ( () => {

        artistGuessList = artistGuesses.map(artist => (
            <li> artist </li>
        ))

    }, [artistGuesses])


    let previousTitles = 
    <ol className="previous-guess-list-b">
        <li> What Field with Cypresses </li>
    </ol>;

    return (
        <div id="prev-guess-columns">
            <ol>
            {artistGuessList}
            </ol>
            {previousTitles}
        </div>
    )

};

export default UserPreviousGuess;