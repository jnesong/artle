//libraries
import { useState, useEffect } from 'react';
//gallery
import a0 from './gallery/a0.jpg';
import a1 from './gallery/a1.jpg';
//css
import './artpiece.css'


const ArtPiece = () => {

    const [pieceHeight, setPieceHeight] = useState(0)

    //5 lines - get the current images height in px on image load and sets it to the pieceHeight state
    const onPieceLoad = ({ target: img }) => {
        const { height } = img;
        console.log(height);
        setPieceHeight(height)
    };

    //3 lines - the style height of the div try-one to the current art piece's height
    let gridContainerStyle = {
        height: pieceHeight
    }

    //7 lines - updates height of div try-one if the image height/art piece is changed
    useEffect(() => {
        if (pieceHeight) {
            gridContainerStyle = {
                height: "pieceHeight px"
            }
        }
    }, [pieceHeight])

    const tryOne = {
        opacity: "0%"
    }


    return (
        <div className="art-div">
            <div className="grid-container" style={gridContainerStyle}>
                <div className="item-a" />
                <div className="item-b" />
                <div className="item-c" />
                <div className="item-d" />
                <div className="item-e" />
                <div className="item-f" />
                <div className="item-g" style={tryOne}/>
                <div className="item-h" />
                <div className="item-i" />
                <div className="item-j" />
                <div className="item-k" />
                <div className="item-l" />
                <div className="item-m" />
                <div className="item-n" />
                <div className="item-o" />
                <div className="item-p" />
            </div>
            <img onLoad={onPieceLoad} className="art-piece" src={a1} alt="artwork" />
        </div>
    );

}

export default ArtPiece;