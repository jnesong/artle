const UserPreviousGuess = () => {

    let previousArtists = 
    <ol>
        <li> Vincent Van Gogh </li>
    </ol>

    let previousTitles = 
    <ol className="previous-guess-list-b">
        <li> What Field with Cypresses </li>
    </ol>

    return (
        <div id="prev-guess-columns">
            {previousArtists}
            {previousTitles}
        </div>
    )

};

export default UserPreviousGuess;