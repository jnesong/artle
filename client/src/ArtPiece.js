//css
import './artpiece.css'
//gallery
import a0 from './gallery/a0.jpg';


const ArtPiece = () => {

    const tryOne =
    <>
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
        <div className="box4"></div>
        <div className="box5"></div>
    </>

    const onImageLoad = ({target:img}) => {
        const {height, offsetWidth} = img;
        console.log(height);
    };

    return (
        <div className="art-div">
            {tryOne}
            <img onLoad={onImageLoad} className="art-piece" src={a0} alt="artwork" />
        </div>
    );

}

export default ArtPiece;