//libraries
import { useEffect, useState } from 'react';
//gallery
import a0 from './gallery/a0.jpg';

function App() {
  const [chicago, setChicago] = useState();

  useEffect(() => {

    fetch("https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id")
      .then(r => r.json())
      .then(data => setChicago(data))

  }, []);

  console.log(chicago)


  return (
    <div>
      <img src={a0} alt="artwork" />
    </div >
  );
}

export default App;
