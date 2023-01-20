import React from 'react';
import styles from './About.module.css'

const About = () => {
    return (
        <div>
            <h1 className={styles.h1}>
                About this page
            </h1>
            <p className={styles.pAbout}>
                Hi, I'm Alejo Fariña. This little project is a SPA fully made in React and Redux and styled with CSS modules and is part of my
                path  of becoming a Full Stack Developer thanks to Henry.
                <br />
                <br />
                I really hope you enjoy it!

                <a href='https://www.soyhenry.com/'><img src='https://assets.soyhenry.com/logos/LOGO-HENRY-04.png' alt="Logo henry" width="200px" /></a>

            </p>

            <h2 className={styles.h2}>About me</h2>

            <div >
                <section className={styles.section}>
                    <div className={styles.divAbout}>
                        <h2 className={styles.h2}>Alejo Fariña</h2>
                        <p className={styles.pAboutMe}>Status: Alive </p>
                        <p className={styles.pAboutMe}>Species: Human </p>
                        <p className={styles.pAboutMe}>Gender: Male</p>
                        <p className={styles.pAboutMe}>Origin: Bs.As., Argentina<br />Earth (C-137)</p>
                    </div>
                    <img className={styles.imgAbout} src="" alt="Alejo Fariña" />
                </section>

            </div>
        </div>
    )
}

export default About;