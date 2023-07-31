import React from 'react'
import styles from "@/styles/browseSection/BrowseSection.module.css"
import BrowesCard from '../browesCard/BrowesCard'
import cardimg1 from "@/public/assets/image/browesimg1.png"
import cardimg2 from "@/public/assets/image/browesimg2.png"
import cardimg3 from "@/public/assets/image/browesimg3.png"
import cardimg4 from "@/public/assets/image/browesimg4.png"
import cardimg5 from "@/public/assets/image/browesimg5.png"
import cardimg6 from "@/public/assets/image/browesimg6.png"
import cardimg7 from "@/public/assets/image/browesimg7.png"
import cardimg8 from "@/public/assets/image/browesimg8.png"

export default function BrowseSection() {
    return (
        <>
            <div className='container'>
                <h1 className={styles.Browseheading}>Browse Categories</h1>

                <div className='row'>
                    <BrowesCard cardimg={cardimg1} cardtext="Art" />
                    <BrowesCard cardimg={cardimg2} cardtext="Collectibles" />
                    <BrowesCard cardimg={cardimg3} cardtext="Music" />
                    <BrowesCard cardimg={cardimg4} cardtext="Photography" />
                </div>

                <div className='row'>
                    <BrowesCard cardimg={cardimg5} cardtext="Video" />
                    <BrowesCard cardimg={cardimg6} cardtext="Utility" />
                    <BrowesCard cardimg={cardimg7} cardtext="Sport" />
                    <BrowesCard cardimg={cardimg8} cardtext="Virtual Worlds" />
                </div>

            </div>
            <div className={`container-fluide ${styles.fulimg} `}>
                <div className={`container-fluide ${styles.magicSection} `}>

                </div>
            </div>



            
        </>


    )
}
