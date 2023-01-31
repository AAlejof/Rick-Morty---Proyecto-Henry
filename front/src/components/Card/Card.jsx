import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFavorites, deleteFavorites } from '../../redux/actions';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Card({ name, gender, onClose, species, image, id }) {
   const dispatch = useDispatch();
   const {myFavorites} = useSelector(state => state);
   const [isFav, setIsFav] = useState(false);



   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         dispatch(deleteFavorites(id))
      }
      else {
         setIsFav(true);
         dispatch(addFavorites({ name, gender, onClose, species, image, id }));
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.card}>
         {isFav ? (<button className={styles.btnCard} onClick={handleFavorite}>❤️</button>) 
         : (<button className={styles.btnCard} onClick={handleFavorite}>🤍</button>)}
         
         <h2 className={styles.h2Name}>{name}</h2>
         <h2 className={styles.h2}> {species} </h2>
         <h2 className={styles.h2}> {gender} </h2>
         <Link to={`/detail/${id}`}>
            <img className={styles.Img} src={image} alt={name} />
         </Link>
         <button className={styles.btnCard} onClick={onClose}>X</button>
         
      </div>
   );
}

export default Card;

