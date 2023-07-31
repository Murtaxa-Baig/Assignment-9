import React from 'react'
import Image from 'next/image'
import styles from "@/styles/howCard/HowCard.module.css"
export default function HowCard(proops) {
  return (
    <>
      <div className='col-md-4 col-sm-12'>
        <div className={styles.maindiv}>
          <Image
          className={styles.CardMobileView}
            src={proops.cardimg}
            alt="Picture of the author"
          />
          <div>
            <h6>{proops.cardheading}</h6>
            <p>{proops.cardtext}</p>
          </div>
        </div>
      </div>

    </>
  )
}
