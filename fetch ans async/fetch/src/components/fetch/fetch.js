import { useState, useEffect } from 'react';
import './fetch.css';

export default function Fetch() {
  const [image, setImage] = useState('');

  async function getDog() {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setImage(data.message);
    }
     catch (error) {
      console.log('Error:', error);
    }
  }

  useEffect(() => {
    getDog();
  }, []);

  return (
    <div className="App">
      {image ? (
        <img
          src={image}
          height={'200px'}
          width={'200px'}
          alt='dog image'
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


