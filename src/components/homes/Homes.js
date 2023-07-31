import React from 'react'
import styles from "@/styles/homes/Homes.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.min.js"
import TrendingSection from '../trendingSection/TrendingSection'
import HomeSection from '../homeSection/HomeSection'
import CreaterSection from '../createrSection/CreaterSection'
import DiscoverSection from '../discoverSection/DiscoverSection'
import BrowseSection from '../browseSection/BrowseSection'
import HowSection from '../howSection/HowSection'
import JoinSection from '../joinSection/JoinSection'
import Footer from '../footer/Footer'


export default function Homes() {
    return (
        <>
            <div >
                <HomeSection />
            </div>
            <div className={styles.trendingSectionDiv}>
                <TrendingSection />
            </div>
            <div className={styles.createrSectionDiv} >
                <CreaterSection />
            </div>

            <div className={styles.BrowseSectionDiv}>
                <BrowseSection />
            </div>
            <div className={styles.DiscoverSectionDiv}>
                <DiscoverSection />
            </div>
            
            <div className={styles.HomeSectionDiv}>
                <HowSection />
            </div>
            <div className={styles.joinSectionDiv}>
                <JoinSection />
            </div>
            <div className={styles.FooterDiv}>
                <Footer />
            </div>
        </>
    )
}
