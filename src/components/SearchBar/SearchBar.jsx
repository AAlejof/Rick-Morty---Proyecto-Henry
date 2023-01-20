import { useState } from 'react';
import styles from './SearchBar.module.css';



function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }


   
   return (
      <div>
         <input className={styles.SearchBarInput} 
         type='search' 
         value={character} onChange={handleChange} />
      <button className={styles.SearchBarButton} onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}

export default SearchBar;
