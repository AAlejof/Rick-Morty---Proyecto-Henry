import { useState } from "react"
import logo from "../../assets/logoRM.png"
import styles from './Form.module.css';
import validation from "./validation";


const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }



    return (
        <main className={styles.main}>

            <div className={styles.div}>
                <img className={styles.loginLogo} src={logo} alt="Rick&Morty logo" />
                <form className={styles.loginForm} onSubmit={(event) => { handleSubmit(event) }} >

                    <label htmlFor="username">Username:</label>
                    <input
                        className={styles.loginInput}
                        type="text" name="username"
                        value={userData.username} autoComplete="off"
                        onChange={handleInputChange}
                    />
                    {errors.username && <p style={{ color: 'red' }} >{errors.username}</p>}

                    <label htmlFor="password">Password:</label>
                    <input
                        className={styles.loginInput}
                        type="password" name="password"
                        value={userData.password} autoComplete="off"
                        onChange={handleInputChange}
                    />
                    {errors.password && <p style={{ color: 'red' }} >{errors.password}</p>}

                    <button className={styles.loginButton} type="submit">Login</button>
                </form>
            </div>
        </main>

    )
}

export default Form;