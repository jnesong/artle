//css
import './artpiece.css'
//gallery
import a0 from './gallery/a0.jpg';


const ArtPiece = () => {



    return (
        <div className="art-div">
        <div className="boxes"></div>
        <img className="art-piece" src={a0} alt="artwork" />
        </div>
    );

}

export default ArtPiece;