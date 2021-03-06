import React from "react"

import Images from "../components/image.js"
import Header from "../components/header.js"


const IndexPage = () => {
  return (
    <div className="container">
      <Header siteTitle="Sizden Gelen Güzellikler" siteDescription="Fotoğrafını bu sitede paylaşabilirsin" />
      <Images />
    </div>
  )
}

export default IndexPage
