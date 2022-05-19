//css
import './artpiece.css'
//gallery
import a0 from './gallery/a0.jpg';


const ArtPiece = () => {

    const pieceStyle = {

        width: '500px',
        height: '300px',
        backgroundImage: `url(${a0})`,

    }


    return (
        <>
        <div
        style={pieceStyle}
        
        />

        </>
    );

}

export default ArtPiece;