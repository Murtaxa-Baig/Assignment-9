import React from 'react'
import styles from "@/styles/discoverCard/DiscoverCard.module.css"
import Image from 'next/image'

export default function DiscoverCard(proops) {
    return (
        <>
            <div className='col-md-4 col-sm-12'>
                <div className={styles.maindiv}>
                    <Image
                        style={{ width: "100%" }}
                        src={proops.mainimg}
                        alt="Picture of the author"
                    />
                    <div className={styles.subdiv}>
                        <h6>{proops.mainheading}</h6>
                        <Image
                            className={styles.proimg}
                            src={proops.profileimg}
                            alt="Picture of the author"
                        />{proops.profiletext}
                        <div className={styles.lasttext}>
                            <div>
                                <p className={styles.lighttext}>Price</p>
                                <p>1.63 ETH</p>
                            </div>
                            <div>
                                <p className={styles.lighttext}>Highest Bid</p>
                                <p>0.33 wETH</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}
