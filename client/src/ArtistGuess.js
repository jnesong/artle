//libraries
import { useState, useEffect } from 'react';

const ArtistGuess = ( {tries, makeArtistGuessArray} ) => {

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


    return (
        <>
            <form >
                <input
                    type="text"
                    placeholder="guess artist"
                    name="userArtistGuess"
                    value={userArtistGuess}
                    onChange={handleChange}
                />
                
            </form>
        </>
    )
};

export default ArtistGuess;