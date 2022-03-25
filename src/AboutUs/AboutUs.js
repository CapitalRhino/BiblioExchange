import React from 'react'
import styles from '../Privacy/Privacy.module.scss'
function AboutUs() {
    return (
        <section className={styles.privacy}>
            <h1>About us</h1>
            <p>BiblioExchange is a platform which enables users to exchange information about books and physical editions of books between themselves.
                BiblioExchange has features which helps users publish information about books they posess. By using this information users can categorise their
                books and make the process of buying books much easier.</p>
            <p>BiblioExchange was established as a project for the Bulgarian National Olympiad in Information Technology in 2022. Authors of the project
                are Deyan Delchev and Dimitar Byalkov. Together they have built this secure book platform because current solutions are either too complicated
                or lack enough features to facilitate the exchange of information about books and the place for selling and buying these books.</p>
            <br />
            <p>BiblioExchange - Copyright 2022, GPLv3 License</p>
        </section>
    )
}

export default AboutUs