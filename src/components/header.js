import React from "react"

import '../pages/main.css'

const Header = ({ siteTitle, siteDescription }) => (
  <header className="titleContainer">
    <h1 className="titleContainer-title">{siteTitle}</h1>
    <p className="titleContainer-description">{siteDescription}</p>
  </header>
)


export default Header
