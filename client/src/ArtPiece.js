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
    let tryOneStyle = {
        height: pieceHeight
    }

    //7 lines - updates height of div try-one if the image height/art piece is changed
    useEffect(() => {
        if (pieceHeight) {
            tryOneStyle = {
                height: "pieceHeight px"
            }
        }
    }, [pieceHeight])

    console.log(tryOneStyle)

    return (
        <div className="art-div">
            <div className="try-one" style={tryOneStyle}>
                <div className="item-a"/>
            </div>
            <img onLoad={onPieceLoad} className="art-piece" src={a1} alt="artwork" />
        </div>
    );

}

export default ArtPiece;