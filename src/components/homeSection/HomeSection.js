import React from 'react'
import styles from "@/styles/homeSection/HomeSection.module.css"
import Image from 'next/image'
import Homeimage from "@/public/assets/image/homeImage.png"
import profileimg from "@/public/assets/image/Asset 12 2.png"

import Button from '../button/Button'

export default function HomeSection() {
    return (
        <>
            <div className={`container ${styles.homecontainer}`}>
                <div className='row'>
                    <div className={`col-md-6 col-sm-12 ${styles.homeSectionRow} `}>
                        <h1
                            style={{ marginTop: "20px" }}
                        >Discover digital art & Collect NFTs</h1>
                        <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>

                        <div className={styles.homeSectionMobileView1}>
                            <div className={styles.homeSectionBtn}>
                                <Button text="Get Started" />
                            </div>
                            <div className={styles.text_div}>
                                <div>
                                    <h3 className={styles.headingof}>240k+</h3>
                                    <p>Total Sale</p>
                                </div>
                                <div>
                                    <h3 className={styles.headingof}>100k+</h3>
                                    <p>Auctions</p>
                                </div>
                                <div>
                                    <h3 className={styles.headingof}>240k+</h3>
                                    <p>Artists</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 col-sm-12 ${styles.homeSectionRow} `}>
                        <div className={styles.divimg}>
                            <Image
                                style={{ width: "100%" }}
                                src={Homeimage}
                                alt="Picture of the author"
                            />
                            <div
                                style={{ margin: "20px" }}
                            >
                                <h5>Space Walking</h5>
                                <div style={{ display: "flex" }}>
                                    <Image
                                        src={profileimg}
                                        alt="Picture of the author"
                                    />
                                    <p style={{ marginLeft: "10px" }} >Animakid</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* for mobile view */}
                    <div className={`container ${styles.homeSectionMobileView}`}>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div className={styles.homeSectionBtn}>
                                    <Button text="Get Started" btnStyle={styles.BtnMobile} />
                                </div>
                                <div className={styles.text_div}>
                                    <div>
                                        <h3 className={styles.headingof}>240k+</h3>
                                        <p>Total Sale</p>
                                    </div>
                                    <div>
                                        <h3 className={styles.headingof}>100k+</h3>
                                        <p>Auctions</p>
                                    </div>
                                    <div>
                                        <h3 className={styles.headingof}>240k+</h3>
                                        <p>Artists</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
