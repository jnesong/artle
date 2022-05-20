//libraries
import { useState, useEffect } from 'react';
//gallery
import a0 from './gallery/a0.jpg';
//css
import './artpiece.css'


const ArtPiece = () => {

    const [pieceHeight, setPieceHeight] = useState(0)

    // const tryOne =
    // <>
    //     <div className="box1"></div>
    //     <div className="box1"></div>
    //     <div className="box2"></div>
    //     <div className="box3"></div>
    //     <div className="box4"></div>
    //     <div className="box5"></div>
    // </>

    const onPieceLoad = ({ target: img }) => {
        const { height } = img;
        console.log(height);
        setPieceHeight(height)
    };

    let tryOneStyle = {
        height: pieceHeight
    }

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
            <div className="try-one" style={tryOneStyle}></div>
            <img onLoad={onPieceLoad} className="art-piece" src={a0} alt="artwork" />
        </div>
    );

}

export default ArtPiece;