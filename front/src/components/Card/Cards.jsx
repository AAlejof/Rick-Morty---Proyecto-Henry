import Card from './Card';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Cards.module.css'

function Cards({ characters, onClose, onSearch }) {
   return (
      <>
      <h1 className={styles.h1} id="h1">Wubba Lubba Dub Dub!</h1>
      <div className={characters.length ? '' : styles.divSearchBar }>
         <SearchBar onSearch={onSearch} />
      </div>
      <div className={styles.divCards}>
         {characters.map(({ id, name, species, gender, image }) => {
            return (
               <Card
                  key={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  id={id}
                  onClose={() => onClose(id)}
               />
            );
         })}
      </div>
      {characters.length > 0 && (<a href="#h1"><button className={styles.upButton}>Up!</button></a>)}
      </>
   );
}

export default Cards;