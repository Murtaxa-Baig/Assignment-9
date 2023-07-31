import React from 'react'
import styles from '@/styles/navbar/Navbar.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.min.js"
import logo from "@/public/assets/image/logo.svg"
import Image from 'next/image'
import Button from '../button/Button'
export default function Navbar() {
    return (
        <>
            <nav className="container navbar navbar-expand-lg navbar-light bg-light bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand color" href="#">
                        <Image
                            src={logo}
                            width={32}
                            height={32}
                            style={{ marginRight: '5px' }}
                            alt="Picture of the author"

                        />
                        NFT Marketplace</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto justify-content-between ">
                            <li className="nav-item">
                                <a className="nav-link color" href="#">Marketplace</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color" href="#">Rankings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color" href="#">Connect a wallet</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color" href="#"><Button text="Sign Up" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
