import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import './contact.css'
import Button from "@mui/material/Button";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function RedBar() {
  return (
    <Box
      sx={{
        height: 20,
        backgroundColor: "white",
      }}
    />
  );
}
export default function Contact() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <h3 id="conthead">Contact Us</h3>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.1089177549507!2d67.15412091461339!3d24.825948584070105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33a587ca9c39f%3A0xdbe7f2866b0a97f4!2sKorangi%204%20Sector%2035%20C%20Korangi%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1646157023684!5m2!1sen!2s" width="600" height="300" loading="lazy"></iframe>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item> <TextField id="outlined-search" label="Name" type="search" />
            <RedBar />
            <TextField id="outlined-search" label="Email" type="search" />
            <RedBar />
            <TextField id="outlined-search" label="Phone Number" type="search" />
            <RedBar />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
