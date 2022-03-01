import React, { Component } from 'react'
import Home from "./page/home/Home"
import Project from "./page/project/Project.js"
import About from "./page/about/About"
import Contact from "./page/contact/Contact"
import Footer from './Footer'
export default function MiddleSection() {
  return (
    <>
      <div id="home" style={{ height: 400 }}>
        <Home />
       </div>
       <div id="about" style={{ height: 480 }}>
        <About />
       </div>
       <div id="contact" style={{ height: 490 }}>
        <Contact />
        </div>
      <div id="project" style={{ height: 400 }}>
        <Project />
        </div>
      {/* <Footer /> */}
       
    </>
  )
}
