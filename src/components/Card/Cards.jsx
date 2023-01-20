import Card from './Card';
import styles from './Cards.module.css'

function Cards({ characters, onClose }) { //[{...}, {...}, {...}]

   return (
      <div className= {styles.divCards}>
         {
            characters.map(({id, name, species, gender, image}) => {
              return <Card
               key={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               id={id}
               onClose={() => onClose(id)}
              />
            })
         }
      </div>
   );
}

export default Cards;
