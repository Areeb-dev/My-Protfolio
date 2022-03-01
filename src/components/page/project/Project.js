import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./project.css"

//mui functions
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
function Project() {
  let githubProjects = [
    {
      Reponame: "Team Repoter",
      RepoLink: "https://github.com/Areeb-dev/teamReporter",
      description: "This is My Team Reporter Project"
    },
    {
      Reponame: "Pop Up balloon",
      RepoLink: "https://github.com/Areeb-dev/pop-up-baloon",
      description: "This is my Pop Up balloon game"
    },
    {
      Reponame: "Reporting system React",
      RepoLink: "https://github.com/Areeb-dev/teamReportingSystemReact",
      description: "This is my Team reporter using React.js"
    },
    {
      Reponame: "Stop Watch",
      RepoLink: "https://github.com/Areeb-dev/StopWatch.github.io",
      description: "This is my Stop Watch Project"
    }, {
      Reponame: "Calculator",
      RepoLink: "https://github.com/Areeb-dev/Calculator.github.io",
      description: "This is my Calculator Project"
    }, {
      Reponame: "Quiz App",
      RepoLink: "https://github.com/Areeb-dev/Quiz-Application",
      description: "This is my Quiz App Project"
    }, {
      Reponame: "Quiz App",
      RepoLink: "https://github.com/Areeb-dev/Quiz-Application",
      description: "This is my Quiz App Project"
    }, {
      Reponame: "Quiz App",
      RepoLink: "https://github.com/Areeb-dev/Quiz-Application",
      description: "This is my Quiz App Project"
    }, {
      Reponame: "Quiz App",
      RepoLink: "https://github.com/Areeb-dev/Quiz-Application",
      description: "This is my Quiz App Project"
    }
  ]
  return (

    <Box sx={{ flexGrow: 1 }}>
      <h3 className="cardhead" >My Projects</h3>
      <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {githubProjects.map((proj, index) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item><Card variant="outlined">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {proj.Reponame}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {proj.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button href={proj.RepoLink}
                    target="_blank"
                    variant="primary">View Source</Button>
                </CardActions>
              </Card>
              </Item>
            </Grid>

          )
        })}
      </Grid>
    </Box>
  )

}
export default Project
