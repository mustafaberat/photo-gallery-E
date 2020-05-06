import React from "react"

import Image from "../components/image.js"

import './main.css'

const IndexPage = () => {
  return (
    <div>
      <div className="titleContainer">
        <h1 className="titleContainer-title">Sizden Gelen Güzellikler</h1>
        <p className="titleContainer-description">Fotoğrafını bu sitede paylaşabilirsin</p>
      </div>
      <Image />
    </div>
  )
}

export default IndexPage
