import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ModuleGrid from "../../components/modules/Module";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import bottomimg from '../../assets/Mask Group 206.png';
import aboutbg from '../../assets/about_bg.png'

const Dashboard = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <>
    <div className="content">
      <Container className="afterBG" maxWidth="xl" sx={{ paddingTop: 35 }}>
        <Container maxWidth="lg">
          <ModuleGrid />
        </Container>
      </Container>
    </div>
    <Container maxWidth='xl' sx={{py: 5}}>
    <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h3" color='primary' sx={{fontWeight: 'medium', marginBottom: 2}}>
                TN25 Mart
              </Typography>
              <Typography variant="h3" gutterBottom sx={{fontWeight: 'medium'}}>
                is Best Delivery Service Near you
              </Typography>
              <Typography variant="body1" gutterBottom sx={{lineHeight: 2, fontSize: 20, marginBottom: 3}}>
              6amMart is a one-stop shop for all your daily necessities. You can shop for groceries, and pharmacy items, order food, and send important parcels from one place to another from the comfort of your home.              
              </Typography>
              <Button size="large" variant="contained" sx={{borderRadius: 20, py: 2, px: 4}}>Order Now <ArrowRightAltIcon/></Button>
                      </Grid>
            <Grid item xs={6} sx={{textAlign:'center'}}>
              <img src={aboutbg} alt="about" width={400}></img>
            </Grid>
          </Grid>
        </Box>
    </Container>
    <img src={bottomimg} alt="img" width='100%'></img>
    </>
  );
};

export default Dashboard;
