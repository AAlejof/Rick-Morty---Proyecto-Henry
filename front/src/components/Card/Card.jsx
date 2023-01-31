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









// function Card(props) {
//    const [isFav, setIsFav] = useState(false);
//    const dispatch = useDispatch();
//    const myFavorites = useSelector((s) => s.myFavorites);



//    const handleFavorite = (char) => {
//       if (isFav) {
//          setIsFav(false)
//          dispatch(deleteFavorites(char.id))
//       } else {
//          setIsFav(true)
//          dispatch(addFavorites(char))
//       }
//    };

//    useEffect(() => {
//       myFavorites.forEach((char) => {
//          if (char.id===props.id) {
//             setIsFav(true);
//          }
//       });
//    }, [myFavorites]);

//    return (
//       <div className={styles.card}>
//          {isFav ? (<button className={styles.btnCard} onClick={()=>handleFavorite(props)}>❤️</button>) 
//          : (<button className={styles.btnCard} onClick={()=>handleFavorite(props)}>🤍</button>)}
         
//          <h2 className={styles.h2Name}>{props.name}</h2>
//          <h2 className={styles.h2}> {props.species} </h2>
//          <h2 className={styles.h2}> {props.gender} </h2>
//          <Link to={`/detail/${props.id}`}>
//             <img className={styles.Img} src={props.image} alt={props.name} />
//          </Link>
//          <button className={styles.btnCard} onClick={props.onClose}>X</button>
         
//       </div>
//    );
// }

// export default Card;
