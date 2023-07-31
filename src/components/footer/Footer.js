import React from 'react'
import styles from "@/styles/footer/Footer.module.css"
import Image from 'next/image'
import logo from "@/public/assets/image/logo.svg"
import discord from "@/public/assets/image/DiscordLogo.svg"
import youtube from "@/public/assets/image/YoutubeLogo.svg"
import twitter from "@/public/assets/image/TwitterLogo.svg"
import instagram from "@/public/assets/image/InstagramLogo.svg"
import Button from '../button/Button'

export default function Footer() {
    return (
        <>
            <div className={`container ${styles.footerForMobile}`}>
                <div className={`row ${styles.footerRow}`}>
                    <div className='col-md-4 col-sm-12'>
                        <div className={styles.imageHeading}>
                            <Image
                                src={logo}
                                width={36}
                                height={36}
                                style={{ marginRight: '5px' }}
                                alt="Picture of the author"
                            />
                            <h1>NFT Marketplace</h1>
                        </div>
                        <br />
                        <p className={styles.footerTextColor}>NFT marketplace UI created <br /> with Anima for Figma.</p>
                        <p className={styles.footerTextColor}>Join our community</p>
                        <div>
                            <span>
                                <Image
                                    src={discord}
                                    width={36}
                                    height={36}
                                    style={{ marginRight: '5px' }}
                                    alt="Picture of the author"
                                />
                            </span>
                            <span>
                                <Image
                                    src={youtube}
                                    width={36}
                                    height={36}
                                    style={{ marginRight: '5px' }}
                                    alt="Picture of the author"
                                />
                            </span>
                            <span>
                                <Image
                                    src={twitter}
                                    width={36}
                                    height={36}
                                    style={{ marginRight: '5px' }}
                                    alt="Picture of the author"
                                />
                            </span>
                            <span>
                                <Image
                                    src={instagram}
                                    width={36}
                                    height={36}
                                    style={{ marginRight: '5px' }}
                                    alt="Picture of the author"
                                />
                            </span>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <h1>Explore</h1>
                        <br />
                        <p className={styles.footerTextColor}>Marketplace</p>
                        <p className={styles.footerTextColor}>Rankings</p>
                        <p className={styles.footerTextColor}>Connect a wallet</p>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <h1>Join our weekly digest</h1>
                        <br />
                        <p className={styles.footerTextColor}>Get exclusive promotions & updates <br /> straight to your inbox.</p>
                        <div className={styles.inputBtn}>
                            <span>
                                <input type='text' placeholder='Enter your email here' className={styles.inputfeild} />
                            </span>
                            <span className={styles.subBtn}>
                                <Button text="Subscribe" className={styles.subBtn} />
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
            <div className='container'>
                <div className='row'>
                    <div className={`col-md-12 col-sm-12 ${styles.footerTextColor}`}>
                        <hr />
                        <p>Ⓒ NFT Market. Use this template freely.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
