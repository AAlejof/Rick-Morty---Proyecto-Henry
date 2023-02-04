import React from 'react';
import styles from './About.module.css'
import pic from "../../assets/imgAbout.png"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"

const About = () => {
    return (
        <div>
            <h1 className={styles.h1}>
                About this page
            </h1>
            <p className={styles.pAbout}>
                Hi, I'm Alejo Fariña. This little project is a SPA fully made in React, Redux, Express and styled with CSS modules and is part of my
                path  of becoming a Full Stack Developer thanks to Henry.
                <br />
                <br />
                I really hope you enjoy it!
                <br />
                <br />
                P.S If you have a little time, check out my links!
                <div className={styles.divLogos}>
                    <a href='https://www.soyhenry.com/'><img src='https://assets.soyhenry.com/logos/LOGO-HENRY-04.png' alt="Logo henry" width="200px" /></a>
                    <a href='https://www.linkedin.com/in/aalejof/'><img src={linkedin} alt="Logo linkedin" width="80px" /></a>
                    <a href='https://github.com/AAlejof'><img src={github} alt="Logo github" width="60px" /></a>
                </div>
            </p>

            <h2 className={styles.h2}>About me</h2>


            <section className={styles.section}>
                <div className={styles.divAbout}>
                    <h2 className={styles.h2}>Alejo Fariña</h2>
                    <p className={styles.pAboutMe}>Status: Alive </p>
                    <p className={styles.pAboutMe}>Species: Human </p>
                    <p className={styles.pAboutMe}>Gender: Male</p>
                    <p className={styles.pAboutMe}>Origin: Bs.As., Argentina<br />Earth (C-137)</p>
                </div>
                <img className={styles.imgAbout} src={pic} alt="Alejo Fariña" />
            </section>

        </div>
    )
}

export default About;