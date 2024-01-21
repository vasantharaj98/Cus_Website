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
  FormGroup,
  FormControlLabel,
  Checkbox,
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
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';
import LuggageIcon from '@mui/icons-material/Luggage';
import SpeedIcon from '@mui/icons-material/Speed';

const ReviewBooking = () => {
  return (
    <div className="content">
    <div style={{ paddingTop: "90px" }}>
      <div style={{ background: "#fff" }}>
        <Container maxWidth="xl">
          <Box sx={{ paddingTop: 4 }}>
          <Typography variant="h4" sx={{mb: 3}}>Review Your Booking</Typography>
            <Grid
              container
              spacing={2}
              sx={{ paddingBottom: 2}}
            >
              <Grid item xs={8} sx={{ paddingTop: 0 }}>
              <Card sx={{ boxShadow:'none', border:'1px solid #cacaca', borderRadius: 3}}>
              <Grid container spacing={5} sx={{p: 2}}>
                      <Grid item xs={5} sx={{position:'relative'}}>
                        <CardMedia
                          component="img"
                          height="300"
                          image="https://img.freepik.com/free-vector/red-sedan-car-isolated-white-vector_53876-64366.jpg"
                          alt="Paella dish"
                          sx={{borderRadius: 2}}
                        />
                        <FavoriteIcon sx={{color: '#fff', position:'absolute', top: '15%', right: '5%',}}/>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography variant="h5" component='p' color='primary' sx={{fontWeight: 'medium', marginBottom: 1}}>
                            Kia Rio  <Rating name="read-only" value='4' readOnly />
                        </Typography>
                        <Typography variant="p" component='p' sx={{fontWeight: 'medium', paddingBottom: 1}}> 
                            <a href="#">Show on map</a> 300m from kovil
                        </Typography>
                        <Grid container spacing={2} sx={{py: 2}}>
                        <Grid item xs={6}>
                            <Box component='div' sx={{display:'flex', alignItems:'center', mb: 1}}>
                            <PeopleIcon sx={{marginRight: 1}}/> 
                            <Typography variant="p">5 Seats</Typography>
                            </Box>
                            <Box component='div' sx={{display:'flex', alignItems:'center', mb: 1}}>
                            <BusinessCenterIcon sx={{marginRight: 1}}/> 
                            <Typography variant="p">1 Large bag</Typography>
                            </Box>
                            <Box component='div' sx={{display:'flex', alignItems:'center', mb: 1}}>
                            <SpeedIcon sx={{marginRight: 1}}/> 
                            <Typography variant="p">750 km per rental</Typography>
                            </Box>
                            <Box component='div' sx={{display:'flex', alignItems:'center', mb: 1}}>
                            <FilterTiltShiftIcon sx={{marginRight: 1}}/> 
                            <Typography variant="p">Manual</Typography>
                            </Box>
                            <Box component='div' sx={{display:'flex', alignItems:'center', mb: 1}}>
                            <LuggageIcon sx={{marginRight: 1}}/> 
                            <Typography variant="p">1 Small bag</Typography>
                            </Box>
                        </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                      <Box component='div' sx={{display:'flex', alignItems:'center', justifyContent:'space-between', p: 2, mb: 2, background: '#eaeaea'}}>
                                <div>
                                <Typography variant="p" component='div'>Pick-up</Typography>
                                <Typography variant="h6" component='div'>Fri 12 Jan 2024</Typography>
                                <Typography variant="p" component='div'>2 PM</Typography>
                                </div>
                                <div>
                                <Typography variant="p" component='div'>Drop-off</Typography>
                                <Typography variant="h6" component='div'>Fri 12 Jan 2024</Typography>
                                <Typography variant="p" component='div'>2 PM</Typography>
                                </div>
                                <div>
                                <Typography variant="p" component='div'>2 Days | 1 Car</Typography>
                                </div>
                            </Box>
                      </Grid>
                    </Grid>
                    <Divider light />
                    <Box sx={{p: 2}}>
                    <Typography variant="h6">Customer Details</Typography>
                    <Box
      component="form"
      sx={{
        '& > :not(style)': { my: 1},
      }}
      noValidate
      autoComplete="off"
    >
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Last Name" variant="outlined"  fullWidth/>
            </Grid>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Email ID" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Mobile Number" variant="outlined"  fullWidth/>
            </Grid>
            <Grid item xs={12}>
            <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Enter GST Details (Optional)" />
      </FormGroup>
            </Grid>
        </Grid>
      
    </Box>
                    </Box>
                    <Divider light />
                    <Box sx={{textAlign: 'end'}}>
                        <Button variant="contained" sx={{py: 2}} >Login</Button>
                    </Box>
                </Card>
              </Grid>
              <Grid item xs={4} sx={{ paddingTop: 0 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <Card sx={{ boxShadow:'none', border:'1px solid #cacaca', borderRadius: 3}}>
                    <Grid container spacing={2} sx={{p: 3}}>
                        <Grid item xs={12}>
                        <Typography variant="h5" sx={{mb: 1}}>Car Price breakdown</Typography>

                            <Box component='div' sx={{display:'flex', alignItems:'center', py: 2, justifyContent:'space-between'}}>
                            <Typography variant="h6">Car hire charge ( 3 Days )</Typography>
                            <Typography variant="h6">₹ 4,800</Typography>
                            </Box>
                            <Divider light/>
                            <Box component='div' sx={{display:'flex', alignItems:'center', py: 2, justifyContent:'space-between'}}>
                            <Typography variant="h6">Total Discount</Typography>
                            <Typography variant="h6">₹ 965</Typography>
                            </Box>
                            <Divider light/>
                            <Box component='div' sx={{display:'flex', alignItems:'center', py: 2, justifyContent:'space-between'}}>
                            <Typography variant="h6">Price after Discount</Typography>
                            <Typography variant="h6">₹ 3,835</Typography>
                            </Box>
                            <Divider light/>
                            <Box component='div' sx={{display:'flex', alignItems:'center', py: 2, justifyContent:'space-between', }}>
                            <Typography variant="h6">Taxes & Service Fees</Typography>
                            <Typography variant="h6">₹ 834</Typography>
                            </Box>
                            <Divider light/>
                            <Box component='div' sx={{display:'flex', alignItems:'center', pt: 2, justifyContent:'space-between'}}>
                            <Typography variant="h6" sx={{color:'#004db5'}}>Total Amount to be paid</Typography>
                            <Typography variant="h6" sx={{color:'#004db5'}}>₹ 4,669</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="secondary" fullWidth sx={{py: 2}}>Book Now</Button>
                        </Grid>
                    </Grid>
                </Card>
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

export default ReviewBooking