import React from 'react'
import "./portfolio.css"
import Work from "./Work"

function Portfolio() {
  return (
   <section className="work section portfolio">
    <h2 className='section_title'>Portfolio</h2>
    <span className="section_subtitle">Most recent works</span>

    <Work/>
   </section>
  )
}

export default Portfolio
