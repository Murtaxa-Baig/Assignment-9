import React from 'react'
import styles from "@/styles/howSection/HowSection.module.css"
import HowCard from '../howCard/HowCard'
import cardimg1 from "@/public/assets/image/howCardimg1.png"
import cardimg2 from "@/public/assets/image/howCardimg2.png"
import cardimg3 from "@/public/assets/image/howCardimg3.png"

export default function HowSection() {
    return (
        <>
            <div className='container'>
                <div className={styles.howSectionHeading}>
                    <h1>How it works</h1>
                    <p>Find out how to get started</p>
                </div>
                <div className='row'>
                    <HowCard cardimg={cardimg1} cardheading="Setup Your wallet" cardtext="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."/>
                    <HowCard cardimg={cardimg2} cardheading="Create Collection" cardtext="Upload your work and setup your collection. Add a description, social links and floor price."/>
                    <HowCard cardimg={cardimg3} cardheading="Start Earning" cardtext="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."/>
                </div>

            </div>

        </>

    )
}
