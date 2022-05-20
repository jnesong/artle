//libraries
import { useState, useEffect } from 'react';

const ArtistGuess = ( {tries, makeArtistGuessArray, artistCorrect, guessResponse} ) => {

    const [userArtistGuess, setUserArtistGuess] = useState("");

    const handleChange = (e) => {
        setUserArtistGuess(e.target.value);
    };


    // console.log(userArtistGuess);
    // with every try submission, send the App component the new user guess 
    //through the makeArtistGuessArray function, which was passed down via props
    useEffect ( () => {

        makeArtistGuessArray(userArtistGuess)

    }, [tries]);

    console.log(artistCorrect)

    return (
        <>
            <form >
                <input
                    type="text"
                    placeholder="guess artist"
                    name="userArtistGuess"
                    value={userArtistGuess}
                    onChange={handleChange}
                    disabled= {artistCorrect}
                />
                
            </form>
            <p> {guessResponse} </p>
        </>
    )
};

export default ArtistGuess;