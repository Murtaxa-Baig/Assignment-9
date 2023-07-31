import React from 'react'
import  styles from "@/styles/trendionSection/TrendionSection.module.css"
import TrendingCard from '../trendingCard/TrendingCard'
import Largeimg1 from "@/public/assets/image/trending1.png"
import Largeimg2 from "@/public/assets/image/trending2.png"
import Largeimg3 from "@/public/assets/image/trending3.png"

import Smalimg1 from "@/public/assets/image/trending1.1.png"
import Smalimg2 from "@/public/assets/image/trending1.2.png"
import Smalimg3 from "@/public/assets/image/trending2.1.png"
import Smalimg4 from "@/public/assets/image/trending3.1.png"

import Tinyimg1 from "@/public/assets/image/trendingpro1.png"
import Tinyimg2 from "@/public/assets/image/trendingpro2.png"
import Tinyimg3 from "@/public/assets/image/trendingpro3.png"
export default function TrendingSection() {
    return (
        <>
            <div className='container'>
                <h3>Trending Collection</h3>
                <p>Checkout our weekly updated trending collection.</p>
                <div className={`row ${styles.trendingSectionRow}`}>
                    <TrendingCard largeimg={Largeimg1} smalimg1={Smalimg1} smalimg2={Smalimg2} tinyimg={Tinyimg1} subheading="DSGN Animals" littleheading="MrFox" />
                    <TrendingCard largeimg={Largeimg2} smalimg1={Smalimg3} smalimg2={Smalimg3} tinyimg={Tinyimg2} subheading="Magic Mushrooms" littleheading="Shroomie" />
                    <TrendingCard largeimg={Largeimg3} smalimg1={Smalimg4} smalimg2={Smalimg4} tinyimg={Tinyimg3} subheading="Disco Machines" littleheading="BeKind2Robots" />
                </div>

            </div>
        </>
    )
}
