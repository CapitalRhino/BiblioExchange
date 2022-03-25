import React from 'react'
import styles from './Privacy.module.scss'
function Privacy() {
    return (
        <section className={styles.privacy}>
        <h1>Privacy policy</h1>
            <h2>What we collect</h2>
            <p>BiblioExchange respects your privacy and strives to be transparent about its actions with the data you give us.
                Visiting the website only requires one cookie, which doesn't contain personal data but identifies you in our system.
                Registered users provide a username, which can be a nickname, a password, an e-mail address and a phone number. In the
                future we hope to enhance the user experience and limit the possibility of exploitation of our platform by requiring
                profile verification using the provided e-mail address and remove the need for providing a phone number using a chat
                system for the users.</p>
            <br/>
                <p>Responsible person for biblioexchange.xyz: </p>
                <p>Dimitar Byalkov</p>
                <p>Email: admin@biblioexchange.xyz</p>
           
        </section>
     );
}
export default Privacy