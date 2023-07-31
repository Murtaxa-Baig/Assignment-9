import React from 'react'
import Image from 'next/image'
import styles from "@/styles/browesCard/BrowesCard.module.css"
export default function BrowesCard(proops) {
    return (
        <>
            <div className='col-md-3 col-sm-6'>
                <div className={styles.browesDiv}>
                    <Image
                    style={{width:"100%"}}
                        src={proops.cardimg}
                        alt="Picture of the author"
                    />
                    <div className={styles.browesCardText}>
                        <h6>{proops.cardtext}</h6>
                    </div>
                </div>
            </div>

        </>
    )
}
