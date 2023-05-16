import React from 'react'
import styles from '../modules/Reviews.module.css'

const Reviews = () => {
  return (
    <div className={styles.reviews}>
        <div className={styles.heading}>
            <p className={styles.headingMainText}>Client  reviews</p>
            <p className={styles.headingDesc}>Happy clients, happy us. Read our client reviews about the work process and results.</p>
        </div>
        <div className={styles.reviewsRow}>
            <div className={styles.overlay1}></div>
            <div className={styles.itemReviews1}>
                <p className={styles.reviewsMainText}>Solis did a great job. Whether providing direct development support or giving us the opportunity to make our development updates, Solis's web design expertise and support services were top notch! It didn't take long to stand up our website, and we were pleased with the design and layout of the graphics and information. </p>
                <p className={styles.reviewsDesc}>Dr. Jamika Burge</p>
            </div>
            <div className={styles.overlay2}></div>
            <div className={styles.itemReviews2}>
                <p className={styles.reviewsMainText}>Solis is a cutting edge company and knows the importance of excellence. Having been in business for 21 years, I know when I’ve found a competent professional and more importantly a company with integrity. I highly recommend this company and am available for further reference if needed.</p>
                <p className={styles.reviewsDesc}>Evie-Rose Prosse</p>
            </div>
            <div className={styles.overlay3}></div>
            <div className={styles.itemReviews3}>
                <p className={styles.reviewsMainText}>I can’t say enough about how knowledgeable Toinette Rorie is in the area of Web Development. She indeed is a developer and can build a site from scratch. She understands functionality and is great at constructing a site that is robust and fully functioning. </p>
                <p className={styles.reviewsDesc}>Elvis Mooney</p>
            </div>
        </div>
    </div>
  )
}

export default Reviews