import React from "react"
import bgHome from "../../../asserts/bgHome.jpg"
import Typewriter from "typewriter-effect"
import "./home.css"
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import Tooltip from '@mui/material/Tooltip';

function Home() {
  return (
    <div className="homeDiv" >
      {/* <div className="typewriter"> */}
      <h1 className="myname">I am Areeb</h1>
      {/* <h1>I am Fronted Developer</h1> */}

      {/* </div> */}
      <div id="typingeffect">
        <Typewriter
          options={{
            strings: ['Frontend Devoloper', 'JavaScript Devoloper', 'React Devoloper'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div>
        <div id="socialIcon">
          <Stack direction="row" spacing={1}>
          <Tooltip title="Facebook">
            <IconButton aria-label="facebook" sx={{ color: 'white' }}>
              <a href="https://www.facebook.com/muhammad.areebbali" target="_blank"><FacebookIcon /></a>
            </IconButton>
            </Tooltip >

            <Tooltip title="Linkedin">
            <IconButton aria-label="linkedin" sx={{ color: 'white' }}>
              <a href="https://www.linkedin.com/login" target="_blank"> <LinkedInIcon /></a>
            </IconButton>
            </Tooltip >
            <Tooltip title="Github">
            <IconButton aria-label="github" sx={{ color: 'white' }}>
              <a href="https://github.com/Areeb-dev" target="_blank"><GitHubIcon /></a>

            </IconButton>
            </Tooltip>
            <Tooltip title="Email">
            <IconButton aria-label="Email" sx={{ color: 'white' }}>
              <a href="mailto:m.areebkhan125@example.com" target="_blank"><EmailIcon /></a>
            </IconButton>
            </Tooltip>
          </Stack>
        </div>

      </div>
    </div>
  )
}
export default Home