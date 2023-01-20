import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from './Detail.module.css';

const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId])

    return (
        <div>
            <h2 className={styles.h2}>{character?.name}</h2>
            <section className={styles.section}>
                <div className={styles.divDetail}>
                    <p className={styles.pDetail}>Status: {character?.status}</p>
                    <p className={styles.pDetail}>Species: {character?.species}</p>
                    <p className={styles.pDetail}>Gender: {character?.gender}</p>
                    <p className={styles.pDetail}>Origin: {character?.origin?.name}</p>
                </div>
                <img className={styles.imgDetail} src={character?.image} alt={character.name} />
            </section>
            
        </div>
    )
}

export default Detail;