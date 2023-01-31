import { useState } from 'react';
import styles from './SearchBar.module.css';



function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
         onSearch(character);
      }
   }

   return (
      <div>
         <input className={styles.SearchBarInput}
            type='search'
            placeholder='Enter N° 1-826'
            value={character} onChange={handleChange} onKeyDown={handleKeyDown}/>
         <button className={styles.SearchBarButton} onClick={() => onSearch(character)}>Add</button>
      </div>
   );
}

export default SearchBar;
