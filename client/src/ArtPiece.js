//libraries
import { useState, useEffect } from 'react';
//css
import './artpiece.css';


const ArtPiece = ({tries, currentArtPiece}) => {

    const [pieceHeight, setPieceHeight] = useState(0);
    const [opacityOnePercent, setOpacityOnePercent] = useState("100%");
    const [opacityTwoPercent, setOpacityTwoPercent] = useState("100%");
    const [opacityThreePercent, setOpacityThreePercent] = useState("100%");
    const [opacityFourPercent, setOpacityFourPercent] = useState("100%");

    //5 lines - get the current images height in px on image load and sets it to the pieceHeight state
    const onPieceLoad = ({ target: img }) => {
        const { height } = img;
        console.log(height);
        setPieceHeight(height);
    };

    //3 lines - the style height of the div try-one to the current art piece's height
    let gridContainerStyle = {
        height: pieceHeight
    };

    //7 lines - updates height of div try-one if the image height/art piece is changed
    useEffect(() => {
        if (pieceHeight) {
            gridContainerStyle = {
                height: "pieceHeight px"
            };
        };
    }, [pieceHeight]);

    //refactor these tries later
   const tryOne = {
        opacity: opacityOnePercent
    };

   const tryTwo = {
        opacity: opacityTwoPercent
    };

   const tryThree = {
        opacity: opacityThreePercent
    };

   const tryFour = {
        opacity: opacityFourPercent
    };


    useEffect ( () => {

        if (tries===1) setOpacityOnePercent("0%");
        if (tries===2) setOpacityTwoPercent("0%");
        if (tries===3) setOpacityThreePercent("0%");
        if (tries===4) setOpacityFourPercent("0%");
        if (tries > 4) {
            window.location.reload();
        };

    }, [tries]);


    return (
        <div className="art-div">
            <div className="grid-container" style={gridContainerStyle}>
                <div className="item-a" style={tryTwo}/>
                <div className="item-b" style={tryThree}/>
                <div className="item-c" style={tryFour}/>
                <div className="item-d" style={tryOne}/>
                <div className="item-e" style={tryOne}/>
                <div className="item-f" style={tryFour}/>
                <div className="item-g" style={{opacity:"0%"}} />
                <div className="item-h" style={tryFour}/>
                <div className="item-i" style={tryThree}/>
                <div className="item-j" style={tryFour}/>
                <div className="item-k" style={tryThree}/>
                <div className="item-l" style={tryTwo}/>
                <div className="item-m" style={tryThree}/>
                <div className="item-n" style={tryOne}/>
                <div className="item-o" style={tryTwo}/>
                <div className="item-p" style={tryOne}/>
            </div>
            <img onLoad={onPieceLoad} className="art-piece" src={currentArtPiece} alt="artwork" />
        </div>
    );

}

export default ArtPiece;