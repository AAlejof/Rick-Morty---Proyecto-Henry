import './App.css';
import Cards from './components/Card/Cards.jsx';
import Navbar from './components/Nav/Nav.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Form from './components/Form/Form';


function App() {
  const location = useLocation()
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = 'example@gmail.com';
  const password = '1password';

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/home');
    } else {
      alert("Username and/or password are incorrect...")
    }
  }

  useEffect(() => {
    !access && navigate('/')
    // eslint-disable-next-line
  }, [access]);



  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          let exist = characters.find((e) => e.id === data.id);
          if (exist) {
            alert('This character is already on display...');
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          alert('No character with that Id...');
        }
      })
      .catch(err => console.log(err))
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === "/" ? <Form login={login} /> : <Navbar onSearch={onSearch} />}
      <Routes>
        <Route path='home' element={<Cards onClose={onClose} characters={characters} onSearch={onSearch}/>} />
        <Route path='about' element={<About />} />
        <Route path='detail/:detailId' element={<Detail />} />
        <Route path='/favorites' element={<Favorites characters={characters} onClose={onClose} />}
        />
      </Routes>

    </div>
  )
}

export default App;
