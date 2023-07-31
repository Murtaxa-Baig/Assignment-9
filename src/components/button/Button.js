import React from 'react'
import styles from "@/styles/button/Button.module.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Button(proops) {
  return (
    <>
    <button className={`px-1  color  ${styles.btns} ${proops.btnStyle}`}>{proops.text}</button>

    </>
  )
}
