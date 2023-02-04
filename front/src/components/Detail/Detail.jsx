import styles from './Detail.module.css';
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    alert("No character with that ID");
                }
            })
            .catch((err) => {
                alert("No character with that ID");
            });
        return setCharacter({});
    }, [detailId])


    return (
        <div>
            <h2 className={styles.h2}>{character?.name}</h2>
            <section className={styles.section}>
                <img className={styles.imgDetail} src={character?.image} alt={character.name} />
                <div className={styles.divDetail}>
                    <p className={styles.pDetail}>Status: {character?.status}</p>
                    <p className={styles.pDetail}>Species: {character?.species}</p>
                    <p className={styles.pDetail}>Gender: {character?.gender}</p>
                    <p className={styles.pDetail}>Origin: {character?.origin?.name}</p>
                </div>
            </section>
            <Link to="/home"><button className={styles.backButton}>Back</button></Link>
        </div>
    )
}

export default Detail;




// const Detail = () => {
//     const { detailId } = useParams();
//     const [character, setCharacter] = useState({});

//     useEffect(() => {
//         fetch(`https://localhost:3001/rickandmorty/detail/${detailId}`)
//             .then((response) => response.json())
//             .then((char) => {
//                 if (char.name) {
//                     setCharacter(char);
//                 } else {
//                     alert("No hay personajes con ese ID");
//                 }
//             })
//             .catch((err) => {
//                 alert("No hay personajes con ese ID");
//             });
//         return setCharacter({});
//     }, [detailId])

//     return (
//         <div>
//             <h2 className={styles.h2}>{character?.name}</h2>
//             <section className={styles.section}>
//                 <div className={styles.divDetail}>
//                     <p className={styles.pDetail}>Status: {character?.status}</p>
//                     <p className={styles.pDetail}>Species: {character?.species}</p>
//                     <p className={styles.pDetail}>Gender: {character?.gender}</p>
//                     <p className={styles.pDetail}>Origin: {character?.origin?.name}</p>
//                 </div>
//                 <img className={styles.imgDetail} src={character?.image} alt={character.name} />
//             </section>
            
//         </div>
//     )
// }

// export default Detail;