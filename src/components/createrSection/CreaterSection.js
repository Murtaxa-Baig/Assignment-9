import React from 'react'
import styles from "@/styles/createrSection/CreaterSection.module.css"
import CreaterCard from '../createrCard/CreaterCard'
import cardimg1 from "@/public/assets/image/creatercard1.png"
import cardimg2 from "@/public/assets/image/creatercard2.png"
import cardimg3 from "@/public/assets/image/creatercard3.png"
import cardimg4 from "@/public/assets/image/creatercard4.png"
import cardimg5 from "@/public/assets/image/creatercard5.png"
import cardimg6 from "@/public/assets/image/creatercard6.png"
import cardimg7 from "@/public/assets/image/creatercard7.png"
import cardimg8 from "@/public/assets/image/creatercard8.png"
import cardimg9 from "@/public/assets/image/creatercard9.png"
import cardimg10 from "@/public/assets/image/creatercard10.png"
import cardimg11 from "@/public/assets/image/creatercard11.png"
import cardimg12 from "@/public/assets/image/creatercard12.png"


export default function CreaterSection() {
    return (
        <>
            <div className='container '>
                <div className='row'>
                    <div className='col-md-9 col-sm-12'>
                        <h1>Top creators</h1>
                        <p>Checkout Top Rated Creators on the NFT Marketplace</p>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <button className={styles.ViewRankingBtn}>View Rankings</button>
                    </div>
                </div>
                <div className='row'>
                    <CreaterCard createrimg={cardimg1} cardtitle="Keepitreal" num="1"/>
                    <CreaterCard createrimg={cardimg2} cardtitle="DigiLab" num="2"/>
                    <CreaterCard createrimg={cardimg3} cardtitle="GravityOne" num="3"/>
                    <CreaterCard createrimg={cardimg4} cardtitle="Juanie" num="4"/>
                </div>
                <div className='row'>
                    <CreaterCard createrimg={cardimg5} cardtitle="BlueWhale" num="5"/>
                    <CreaterCard createrimg={cardimg6} cardtitle="Mr Fox" num="6"/>
                    <CreaterCard createrimg={cardimg7} cardtitle="Shroomie" num="7"/>
                    <CreaterCard createrimg={cardimg8} cardtitle="Robotica" num="8"/>
                </div>
                <div className='row'>
                    <CreaterCard createrimg={cardimg9} cardtitle="RustyRobot" num="9"/>
                    <CreaterCard createrimg={cardimg10} cardtitle="Animakid" num="10"/>
                    <CreaterCard createrimg={cardimg11} cardtitle="Dotgu" num="11"/>
                    <CreaterCard createrimg={cardimg12} cardtitle="Ghillier" num="12"/>
                </div>

            </div>
            <div className='container'>
                <div className='row'>
                <div className='col-sm-12'>
                        <button className={styles.ViewRankingBtn1}>View Rankings</button>
                    </div>
                </div>
            </div>
        </>
    )
}
