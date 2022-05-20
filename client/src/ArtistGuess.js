//libraries
import { useState, useEffect } from 'react';

const ArtistGuess = () => {

    const [userArtistGuess, setUserArtistGuess] = useState("");

    const handleChange = (e) => {
        setUserArtistGuess(e.target.value);
    };

    console.log(userArtistGuess)


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
}

export default ArtistGuess;