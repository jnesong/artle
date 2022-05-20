//libraries
import { useState, useEffect } from 'react';

const TitleGuess = () => {

    const [userTitleGuess, setUserTitleGuess] = useState("");

    const handleChange = (e) => {
        setUserTitleGuess(e.target.value);
    };

    console.log(userTitleGuess)


    return (
        <>
            <form >
                <input
                    type="text"
                    placeholder="guess title"
                    name="userTitleGuess"
                    value={userTitleGuess}
                    onChange={handleChange}
                />
                
            </form>
        </>
    )
}

export default TitleGuess;