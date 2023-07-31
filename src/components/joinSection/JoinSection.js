import React from 'react'
import Image from 'next/image'
import styles from "@/styles/joinSection/JoinSection.module.css"
import joinimg from "@/public/assets/image/joinimg.png"
import Button from '../button/Button'
export default function JoinSection() {
    return (
        <>
            <div className='container'>
                <div className={`row ${styles.joinContainer}`}>
                    <div className='col-md-5 col-sm-12'>
                        <Image
                            className={styles.joinImage}
                            src={joinimg}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <h1 className={styles.joinHeading}>Join our weekly digest</h1>
                        <p>Get exclusive promotions & updates straight to your inbox.</p>
                        <div className={styles.inputBtn}>
                            <span>
                                <input type='text' placeholder='Enter your email here' className={styles.inputfeild} />
                            </span>
                            <span className={styles.subBtn}>
                                <Button text="Subscribe" />

                            </span>
                        </div>



                        {/* for mobile view */}
                        <div className='mobileViewDiv'>
                            <input type='text' placeholder='Enter your email here' className={styles.inputfeildForMobile} />
                            <button className={styles.btnForMobile}>Subscribe</button>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}



