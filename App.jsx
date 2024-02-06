// Fichero src/components/App.jsx
import { useEffect, useState } from 'react';
import '../scss/App.scss';
import ListCharacter from './ListCharacter';
import local from '../services/localStorage';

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState(local.get('searchCharacter', ''));

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  useEffect(() => {
    fetch(
      'https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=b819d866c81b5bd4e0cc05f9a943dba5&hash=d2920bc5270a5ef5760c5a3b1ce3e506'
    )
      .then((response) => response.json())
      .then((data) => {
        //id, name, description, foto
        const cleanData = data.data.results.map((char) => {
          const newObject = {
            id: char.id,
            name: char.name,
            desc: char.description,
            img: char.thumbnail.path + '.' + char.thumbnail.extension,
          };
          return newObject;
        });
        setCharacters(cleanData);
      });
  }, []);
  // [] -> se ejecuta una sola vez al cargar la página
  // [varEstado, varEstado2] -> se ejecuta cada vez que la var de estado cambie

  useEffect(() => {
    local.set('searchCharacter', search);
  }, [search]);

  const filterCharacter = characters.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Mi web</h1>
      <input type="text" id="search" onChange={handleSearch} value={search} />
      <ListCharacter list={filterCharacter} />
    </div>
  );
}

export default App;
