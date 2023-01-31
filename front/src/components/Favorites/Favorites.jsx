import { useSelector, useDispatch } from 'react-redux';
import styles from './Favorites.module.css';
import { filterCards, orderCards, reset } from '../../redux/actions';
import Card from '../Card/Card';

function Favorites(props) {
    const dispatch = useDispatch();
    const { myFavorites } = useSelector((state) => state);

    const char =props.characters.filter((event) =>{
        return myFavorites.includes(event.id)
    })

    const handleClick = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        if (name === 'filter') {
            return dispatch(filterCards(value));
        }
        if (name === 'order') {
            return dispatch(orderCards(value));
        }
    };

    return (
        <>
            <h1 class = {styles.h1}>Favorites</h1>

            <div className={styles.divSelectReset}>
                <select className = {styles.select1}
                    name='order'
                    defaultValue={'DEFAULT'}
                    onChange={handleClick}
                >
                    <option value='DEFAULT' disabled>
                        Select Order
                    </option>
                    <option value='Ascendente'>Ascending</option>
                    <option value='Descendente'>Descending</option>
                </select>
                <select className= {styles.select2}
                    name='filter'
                    defaultValue={'DEFAULT'}
                    onChange={handleClick}
                >
                    <option value='DEFAULT' disabled>
                        Select Gender
                    </option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknow'>unknow</option>
                </select>
                
                <button className={styles.resetButton} onClick={() => dispatch(reset())}>Reset </button>

            </div>
            <div className= {styles.divCards}>

                {
                    myFavorites?.map(({id, name, species, gender, image}) => {
                    return (
                        <Card
                            key={id}
                            name={name}
                            species={species}
                            gender={gender}
                            image={image}
                            id={id}
                            onClose={() => props.onClose({id})}
                        />
                    );
                })}
           
            </div>

        </>
    );
}

export default Favorites;

// function Favorites(props) {
//     const dispatch = useDispatch();

//     const myFavorites = useSelector((state) => state.myFavorites);
//     const char =props.characters.filter((event) =>{
//         return myFavorites.includes(event.id)
//     })

//     const handleClick = (event) => {
//         event.preventDefault();
//         const { name, value } = event.target;
//         if (name === 'filter') {
//             return dispatch(filterCards(value));
//         }
//         if (name === 'order') {
//             return dispatch(orderCards(value));
//         }
//     };

//     return (
//         <>
//             <h1 class = {styles.h1}>Favorites</h1>

//             <div className={styles.divSelectReset}>
//                 <select className = {styles.select1}
//                     name='order'
//                     defaultValue={'DEFAULT'}
//                     onChange={handleClick}
//                 >
//                     <option value='DEFAULT' disabled>
//                         Select Order
//                     </option>
//                     <option value='Ascendente'>Ascending</option>
//                     <option value='Descendente'>Descending</option>
//                 </select>
//                 <select className= {styles.select2}
//                     name='filter'
//                     defaultValue={'DEFAULT'}
//                     onChange={handleClick}
//                 >
//                     <option value='DEFAULT' disabled>
//                         Select Gender
//                     </option>
//                     <option value='Male'>Male</option>
//                     <option value='Female'>Female</option>
//                     <option value='Genderless'>Genderless</option>
//                     <option value='unknow'>unknow</option>
//                 </select>
                
//                 <button className={styles.resetButton} onClick={() => dispatch(reset())}>Reset </button>

//             </div>
//             <div className= {styles.divCards}>

//                 {
//                     myFavorites?.map(({id, name, species, gender, image}) => {
//                     return (
//                         <Card
//                             key={id}
//                             name={name}
//                             species={species}
//                             gender={gender}
//                             image={image}
//                             id={id}
//                             onClose={() => props.onClose({id})}
//                         />
//                     );
//                 })}
           
//             </div>

//         </>
//     );
// }

// export default Favorites;