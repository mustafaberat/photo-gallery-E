import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import '../main.css'

const Image = () => {
  const data = useStaticQuery(graphql`
     query ImageQuery{
      allFile(filter:{absolutePath:{regex: "//photos//"}},
      sort: {
        fields: [atime]
        order: DESC
      }
      ) {
        edges{
          node{
            id
            atime
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
      {/* {console.log("All image data: ", data)} */}
      {data.allFile.edges.map((edge) => {
        return <Img key={edge.node.id} fluid={edge.node.childImageSharp.fluid} />
      })}
    </section>
  )
}

export default Image
