import React, { useState, useEffect } from 'react';

const Card = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        if (!response.ok) {
          throw new Error('Failed to fetch characters');
        }
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  const getCharacterImage = (id) => {
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {characters.map((character, index) => (
          <div key={index} className="col-md-4 mt-5">
            <div className="card mb-3" style={{ width: '100%', height: '100%' }}>
              <img
                src={getCharacterImage(index + 1)}
                className="card-img-top"
                alt={`Character ${index + 1}`}
                style={{ width: '100%', height: '100%' }}
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">Height: {character.height}</p>
                <p className="card-text">Gender: {character.gender}</p>
                {/* Add more details if necessary */}
                  {/* <Link to="/character">
					<button className="btn btn-primary">Ficha personaje</button>
				</Link>  */}
                <a href="#" className="btn btn-success">
			    Agregar a favoritos
		        </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

