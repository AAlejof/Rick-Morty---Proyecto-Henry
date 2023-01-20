import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Card.module.css'
import { addFavorites, deleteFavorites } from '../../redux/actions';

function Card({ name, gender, onClose, species, image, id }) {
   const [isFav, setIsFav] = useState(false)
   const dispatch = useDispatch()

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         dispatch(deleteFavorites(id))
      } else {
         setIsFav(true)
         dispatch(addFavorites(id))
      }
   }

   return (
      <div className={styles.card}>
         <button className={styles.btnCard} onClick={onClose}>X</button>
         <h2 className={styles.h2Name}>{name}</h2>
         <h2 className={styles.h2}> {species} </h2>
         <h2 className={styles.h2}> {gender} </h2>
         <Link to={`/detail/${id}`}>
            <img className={styles.Img} src={image} alt={name} />
         </Link>
      </div>
   );
}

export default Card;
