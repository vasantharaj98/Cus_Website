import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  TextField,
  Card,
  CardMedia,
  Rating,
  Divider,
} from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import QuiltedImageList from "../../components/image/ImageList";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import WifiIcon from '@mui/icons-material/Wifi';

const ViewHotel = () => {
  return (
    <div className="content">
    <div style={{ paddingTop: "90px" }}>
      <div style={{ background: "#fff" }}>
        <Container maxWidth="xl">
          <Box sx={{ paddingTop: 4 }}>
            <Grid
              container
              spacing={2}
              sx={{ paddingBottom: 2, alignItems: "center" }}
            >
              <Grid item xs={8} sx={{ paddingTop: 0 }}>
                <QuiltedImageList/>
                <Typography variant="h6">Amigos Condaliam Beach</Typography>
                <Typography variant="p"><LocationOnIcon color="primary"/> Candolim, 4-5 minutes walk from kovil</Typography>
              </Grid>
              <Grid item xs={4} sx={{ paddingTop: 0 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <Card sx={{ boxShadow:'none', border:'1px solid #cacaca', borderRadius: 3}}>
                    <Grid container spacing={2} sx={{p: 3}}>
                        <Grid item xs={6}>
                        <Typography variant="h6" sx={{mb: 1}}>Deluxe Room</Typography>

                            <Box component='div' sx={{display:'flex', alignItems:'center', mb: 1}}>
                            <PeopleIcon sx={{marginRight: 1}}/> 
                            <Typography variant="p">For 2 Adults</Typography>
                            </Box>
                            <Box component='div' sx={{display:'flex', alignItems:'center', mb: 1}}>
                            <CloseIcon color="danger" sx={{marginRight: 1}}/> 
                            <Typography sx={{color:'#b80413'}} variant="p">Non-Refundable</Typography>
                            </Box>
                            <Box component='div' sx={{display:'flex', alignItems:'center'}}>
                            <DoneIcon sx={{marginRight: 1}}/> 
                            <Typography variant="p">Room Only</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sx={{textAlign: 'end'}}>
                        <Typography variant="p">Per Night</Typography>
                        <Typography variant="h6" sx={{textDecoration:'line-through'}}>₹ 3,800</Typography>
                        <Typography variant="h5">₹ 2,455</Typography>
                        <Typography variant="p">+₹ 658 taxes & fees</Typography>
                        <Typography variant="p" sx={{color:'#b80413', mt: 1}}  component='div'>saving ₹ 1,345</Typography>
                        </Grid>
                    </Grid>
                    <Divider light />
                    <Box sx={{textAlign: 'end'}}>
                    <Link to='/reviewbooking'>
                    <Button variant="contained" sx={{py: 2}} >Book this now</Button>
                    </Link>
                    </Box>
                </Card>
                    </Grid>
                    <Grid item xs={6}>
                    <Card sx={{ boxShadow:'none', border:'1px solid #cacaca', borderRadius: 3}}>
                    <Box>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173189161!2d76.88483425790042!3d11.014126294396291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1705726903925!5m2!1sen!2sin" width="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                    <Box sx={{textAlign: 'center'}}>
                        <Button>Get Direction</Button>
                    </Box>
                </Card>
                    </Grid>
                    <Grid item xs={6}>
                    <Card sx={{ boxShadow:'none', border:'1px solid #cacaca', borderRadius: 3}}>
                    <Box sx={{p: 2}}>
                        <Button variant="contained" color="secondary" sx={{py: 2}}>4.0</Button>
                        <Typography variant="h6">Very Good</Typography>
                        <Typography variant="p">Based on 486 Ratings</Typography>
                    </Box>
                    <Box sx={{textAlign: 'center'}}>
                        <Button>Read all reviews</Button>
                    </Box>
                </Card>  
                    </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" sx={{mb: 2}}>Popular Hotel</Typography>
                <Typography variant="p" sx={{ lineHeight: 1.7, fontSize: 18}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" sx={{mb: 2}}>Rooms</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                    <CardMedia
                          component="img"
                          height="300"
                          image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                          alt="Paella dish"
                          sx={{borderRadius: 2}}
                        />
                    </Grid>
                    <Grid item xs={3}>
                    <CardMedia
                          component="img"
                          height="300"
                          image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                          alt="Paella dish"
                          sx={{borderRadius: 2}}
                        />
                    </Grid>
                    <Grid item xs={3}>
                    <CardMedia
                          component="img"
                          height="300"
                          image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                          alt="Paella dish"
                          sx={{borderRadius: 2}}
                        />
                    </Grid>
                    <Grid item xs={3}>
                    <CardMedia
                          component="img"
                          height="300"
                          image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                          alt="Paella dish"
                          sx={{borderRadius: 2}}
                        />
                    </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" sx={{mb: 2}}>Facilities</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                    <WifiIcon sx={{background:'#004db5', p: 3, borderRadius: 4, fontSize: 60 , color:'#fff'}}/>
                    </Grid>
                    <Grid item xs={1}>
                    <WifiIcon sx={{background:'#004db5', p: 3, borderRadius: 4, fontSize: 60 , color:'#fff'}}/>
                    </Grid>
                    <Grid item xs={1}>
                    <WifiIcon sx={{background:'#004db5', p: 3, borderRadius: 4, fontSize: 60 , color:'#fff'}}/>
                    </Grid>
                    <Grid item xs={1}>
                    <WifiIcon sx={{background:'#004db5', p: 3, borderRadius: 4, fontSize: 60 , color:'#fff'}}/>
                    </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  </div>
  )
}

export default ViewHotel