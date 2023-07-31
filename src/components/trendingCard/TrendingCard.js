import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "@/styles/trendingCard/TrendingCard.module.css"
import Image from 'next/image'
export default function TrendingCard(proops) {
    return (
        <div className={`col-md-4 col-sm-12 ${styles.maindiv}`} >
            <div className={styles.card}>
                <Image
                    className={styles.trendingimg}
                    src={proops.largeimg}
                    alt="Picture of the author"
                />
            </div>
            <div className={styles.smalimgdiv}>
                <Image
                    className={styles.Smalimg}
                    src={proops.smalimg1}
                    alt="Picture of the author"
                />
                <Image
                    className={styles.Smalimg}
                    src={proops.smalimg2}
                    alt="Picture of the author"
                />
                <h6 className={styles.smalbox}>1025+</h6>
            </div>
            <h6>{proops.subheading}</h6>
            <div>
                <Image
                    className={styles.tiny}
                    src={proops.tinyimg}
                    alt="Picture of the author"
                />
                {proops.littleheading}

            </div>


        </div>
    )
}
