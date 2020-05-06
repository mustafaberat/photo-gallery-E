import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import '../pages/main.css'

const Image = () => {
  const data = useStaticQuery(graphql`
     query ImageQuery{
      allFile(filter:{absolutePath:{regex: "//photos//"}}) {
        edges{
          node{
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="images">
      {data.allFile.edges.map((edge) => {
        return <Img key={edge.node.id} fluid={edge.node.childImageSharp.fluid} />
      })}
    </section>
  )
}

export default Image
