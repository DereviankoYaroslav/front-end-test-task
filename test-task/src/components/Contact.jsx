import React from 'react'
import styles from '../modules/Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contacts}>
        <div className={styles.contactsDivider}></div>
        <div className={styles.contactRow}>
            <div className={styles.itemContact1}>
                <p className={styles.contactsMainText}>Contact <span className='different-text'> our sales team</span></p>
                <p className={styles.contactsDesc}>Our team is happy to answer your sales questions.Fill out the form and we’ll be in touch as soon as possible.</p>
            </div>
            <div className={styles.itemContact2}>
                <form action="" method="post">
                    <label className={styles.contactLabel} for="POST-name">Your name</label>
                    <input className={styles.inputContact} id="POST-name" type="text" name="name"></input>
                    <div className={styles.formDivider}></div>
                    <label className={styles.contactLabel} for="POST-email">E-mail</label>
                    <input className={styles.inputContact} id="POST-email" type="email" name="email"></input>
                    <div className={styles.formDivider}></div>
                    <label className={styles.contactLabel} for="POST-more">Tell more</label>
                    <input className={styles.inputContact} id="POST-more" type="text" name="more"></input>
                    <div className={styles.formDivider}></div>
                    <input className={styles.inputButton} type="submit" value="SEND REQUEST"></input>
                    <p className={styles.inputButtonBg}></p>
                </form>
            </div>
        </div>
        <div className={styles.contactsDivider}></div>
    </div>
  )
}

export default Contact