import React from 'react'
import styles from "@/styles/discoverSection/DiscoverSection.module.css"
import DiscoverCard from '../discoverCard/DiscoverCard'
import mainimg1 from "@/public/assets/image/discoverimg1.png"
import mainimg2 from "@/public/assets/image/discoverimg2.png"
import mainimg3 from "@/public/assets/image/discoverimg3.png"

import profileimg1 from "@/public/assets/image/discoverpro1.png"
import profileimg2 from "@/public/assets/image/discoverpro2.png"
import profileimg3 from "@/public/assets/image/discoverpro3.png"

export default function DiscoverSection() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9 col-sm-12'>
            <h1>Discover More NFTs</h1>
            <p>Explore new trending NFTs</p>
          </div>
          <div className='col-md-3 col-sm-12'>
            <button className={styles.seeAllBtn}>See All</button>
          </div>

        </div>
        <div className='row'>
          <DiscoverCard mainimg={mainimg1} mainheading="Distant Galaxy" profileimg={profileimg1} profiletext="MoonDancer" />
          <DiscoverCard mainimg={mainimg2} mainheading="Life On Edena" profileimg={profileimg2} profiletext="NebulaKid" />
          <DiscoverCard mainimg={mainimg3} mainheading="AstroFiction" profileimg={profileimg3} profiletext="Spaceone" />
        </div>
        <div className='row'>
          <div className={`col-sm-12 ${styles.MobileViewBtn}`}>
            <button className={styles.seeAllBtn1}>See All</button>
          </div>
        </div>

      </div>

    </>
  )
}
