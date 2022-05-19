//libraries
import { useEffect, useState } from 'react';
//gallery
import a0 from './gallery/a0.jpg';

function App() {
  const [chicago, setChicago] = useState();
  const [imageURL, setImageURL] = useState();
  const [artist, setArtist] = useState();

  useEffect(() => {

    fetch("https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id")
      .then(r => r.json())
      .then(chicagoData => setChicago(chicagoData))

  }, []);

  if (chicago) { console.log(chicago.data.id) }
  // if (chicago) {console.log(chicago.config.iiif_url)}
  // if (chicago) {console.log(chicago.data.image_id)}
  // if (chicago) {console.log(chicago.config.iiif_url + "/" + chicago.data.image_id + "/full/843,/0/default.jpg" )}

  useEffect(() => {
    if (chicago) { setImageURL(chicago.config.iiif_url + "/" + chicago.data.image_id + "/full/843,/0/default.jpg") }
  }, [chicago])

  useEffect(() => {
    if (chicago) {
      fetch("https://api.artic.edu/api/v1/artworks/" + chicago.data.id)
        .then(r => r.json())
        .then(chicagoData => setArtist(chicagoData))
    }
  }, [chicago])

  console.log(artist.data.artist_title)

  let thisArtist = ""

  if (artist) {thisArtist = artist.data.artist_title}

  return (
    <div>
      <img src={a0} alt="artwork" />
      <img src={imageURL} alt="artwork" />
      <p> {thisArtist} </p>
    </div >
  );
}

export default App;
