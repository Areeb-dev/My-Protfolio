import React from "react"
import './about.css'
import myPic from "../../../asserts/myPic.jpeg"
import Cv from "../../../asserts/Cv.pdf"
import Button from '@mui/material/Button';

function About() {
  return (
    <>
      <h3 id="contabout">About Us</h3>
      <div className='main'>
        <div>
          <img alt='About Image' style={{ border: '10px solid #21B5E5' }} width={300} height={350} src={myPic} />
        </div>

        <div style={{ marginLeft: '80px', marginTop: '30px' }}>

          <h1>Frontend Developer</h1>
          <p style={{ fontSize: '24px' }}>
            I am Areeb. I am a simple , creative, enthusiastic and fun-loving person.


            I always like to create something on my own which is helpful for others.

            I have vast experience in HTML5, CSS3,SCSS, Javascript, React js , Node js, MongoDb</p>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            <a className="btn" href={Cv} download>
              Download Resume
            </a>
          </Button>

        </div>

      </div>
    </>

  )
}
export default About