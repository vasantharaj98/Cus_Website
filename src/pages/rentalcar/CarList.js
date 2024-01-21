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
} from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import LocationOn from "@mui/icons-material/LocationOn";
import { AccessTime, CarRental, Cases, DateRange, Done } from "@mui/icons-material";
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';
import LuggageIcon from '@mui/icons-material/Luggage';
import SpeedIcon from '@mui/icons-material/Speed';
import DoneIcon from '@mui/icons-material/Done';


const CarList = ({ setLoader }) => {
  return (
    <div className="content">
      <div style={{ paddingTop: "150px" }}>
        <div style={{ background: "#fff" }}>
          <Container maxWidth="xl">
            <div className="search_bar">
              <Grid container sx={{ alignItems: "center" }}>
                <Grid item xs={2} sx={{ borderRight: "1px solid #000", px: 2 }}>
                <div style={{display:'flex', alignItems:'center'}}>
                <LocationOn sx={{me: 2}}/>
                  <input
                    className="inputField"
                    placeholder="Pick-up location"
                    style={{ height: "50px", border: "none" }}
                  />
                </div>
                </Grid>
                <Grid item xs={2} sx={{ borderRight: "1px solid #000", px: 2 }}>
                <div style={{display:'flex', alignItems:'center'}}>
                <DateRange sx={{me: 2}}/>
                  <input
                    className="inputField"
                    placeholder="Pick-up Date"
                    style={{ height: "50px", border: "none" }}
                  />
                </div>
                </Grid>
                <Grid item xs={2} sx={{ borderRight: "1px solid #000", px: 2 }}>
                <div style={{display:'flex', alignItems:'center'}}>
                <AccessTime sx={{me: 2}}/>
                  <input
                    className="inputField"
                    placeholder="Time"
                    style={{ height: "50px", border: "none" }}
                  />
                </div>
                </Grid>
                <Grid item xs={2} sx={{ borderRight: "1px solid #000", px: 2 }}>
                <div style={{display:'flex', alignItems:'center'}}>
                <LocationOn sx={{me: 2}}/>
                  <input
                    className="inputField"
                    placeholder="Drop-off Date"
                    style={{ height: "50px", border: "none" }}
                  />
                </div>
                </Grid>
                <Grid item xs={2} sx={{ borderRight: "1px solid #000", px: 2 }}>
                <div style={{display:'flex', alignItems:'center'}}>
                <AccessTime sx={{me: 2}}/>
                  <input
                    className="inputField"
                    placeholder="Time"
                    style={{ height: "50px", border: "none" }}
                  />
                </div>
                </Grid>
                <Grid item xs={2} sx={{ px: 2 }}>
                  <Button
                    size="large"
                    variant="contained"
                    sx={{ width: "100%" }}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </div>
            <Box sx={{ paddingTop: 8 }}>
              <Grid
                container
                spacing={2}
                sx={{ paddingBottom: 2, alignItems: "center" }}
              >
                <Grid item xs={12} sx={{ paddingTop: 0 }}>
                  <Typography variant="h6">
                    Gold coast: 165 cars available
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ my: 2}}>
                 <div style={{display:'flex', justifyContent: 'start', alignItems:'center', gap: 60}}>
                  <div style={{textAlign:'center'}}>
                  <CarRental sx={{me: 2, fontSize: 50}}/>
                  <Typography variant="p" component='div'>Medium Car</Typography>
                  </div>
                  <div style={{textAlign:'center'}}>
                  <CarRental sx={{me: 2, fontSize: 50}}/>
                  <Typography variant="p" component='div'>Small Car</Typography>
                  </div>
                  <div style={{textAlign:'center'}}>
                  <CarRental sx={{me: 2, fontSize: 50}}/>
                  <Typography variant="p" component='div'>Large Car</Typography>
                  </div>
                  <div style={{textAlign:'center'}}>
                  <CarRental sx={{me: 2, fontSize: 50}}/>
                  <Typography variant="p" component='div'>SUVs</Typography>
                  </div>
                  <div style={{textAlign:'center'}}>
                  <CarRental sx={{me: 2, fontSize: 50}}/>
                  <Typography variant="p" component='div'>People Carrier</Typography>
                  </div>
                  <div style={{textAlign:'center'}}>
                  <CarRental sx={{me: 2, fontSize: 50}}/>
                  <Typography variant="p" component='div'>Premium Car</Typography>
                  </div>
                 </div>
                </Grid>
                <Grid item xs={12} sx={{ paddingTop: 0 }}>
                  <Button
                    size="large"
                    variant="outlined"
                    color="primary"
                    sx={{ borderRadius: 10, py: 2 }}
                  >
                    Sort by: Recommended <SwapVertIcon />
                  </Button>
                </Grid>
                <Grid item xs={12} sx={{ paddingTop: 0 }}>
                <Link to='/reviewcarbooking' style={{textDecoration:'none'}}>
                  <Card sx={{ p: 3, boxShadow:'0px 0px 10px #cacaca', borderRadius: 3 }}>
                    <Grid container spacing={5}>
                      <Grid item xs={3} sx={{position:'relative'}}>
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
                      <Grid item xs={2} sx={{textAlign: 'end'}}>
                        <Typography>2187 Reviews <span style={{background:'#004db5', color:'#fff', padding: 4}}>4.4 </span></Typography>
                        <Typography sx={{py: 1}}>Price for 3 days</Typography>
                        <Typography variant="h6">₹ 4,849.88</Typography>
                        <Box component='div' sx={{display:'flex', alignItems:'center', justifyContent: 'end', py: 1}}>
                            <DoneIcon sx={{marginRight: 1}}/> 
                            <Typography variant="p">Free Cancellation</Typography>
                            </Box>
                        <Button variant="contained" size="large" sx={{marginTop: 1}}>View Deal</Button>
                      </Grid>
                    </Grid>
                  </Card>
                  </Link>
                </Grid>
                <Grid item xs={12} sx={{ paddingTop: 0 }}>
                <Link to='/reviewcarbooking' style={{textDecoration:'none'}}>
                <Card sx={{ p: 3, boxShadow:'0px 0px 10px #cacaca', borderRadius: 3 }}>
                    <Grid container spacing={5}>
                      <Grid item xs={3} sx={{position:'relative'}}>
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
                      <Grid item xs={2} sx={{textAlign: 'end'}}>
                        <Typography>2187 Reviews <span style={{background:'#004db5', color:'#fff', padding: 4}}>4.4 </span></Typography>
                        <Typography sx={{py: 1}}>Price for 3 days</Typography>
                        <Typography variant="h6">₹ 4,849.88</Typography>
                        <Box component='div' sx={{display:'flex', alignItems:'center', justifyContent: 'end', py: 1}}>
                            <DoneIcon sx={{marginRight: 1}}/> 
                            <Typography variant="p">Free Cancellation</Typography>
                            </Box>
                        <Button variant="contained" size="large" sx={{marginTop: 1}}>View Deal</Button>
                      </Grid>
                    </Grid>
                  </Card>
                </Link>
                </Grid>
                <Grid item xs={12} sx={{ paddingTop: 0 }}>
                <Link to='/reviewcarbooking' style={{textDecoration:'none'}}>
                <Card sx={{ p: 3, boxShadow:'0px 0px 10px #cacaca', borderRadius: 3 }}>
                    <Grid container spacing={5}>
                      <Grid item xs={3} sx={{position:'relative'}}>
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
                      <Grid item xs={2} sx={{textAlign: 'end'}}>
                        <Typography>2187 Reviews <span style={{background:'#004db5', color:'#fff', padding: 4}}>4.4 </span></Typography>
                        <Typography sx={{py: 1}}>Price for 3 days</Typography>
                        <Typography variant="h6">₹ 4,849.88</Typography>
                        <Box component='div' sx={{display:'flex', alignItems:'center', justifyContent: 'end', py: 1}}>
                            <DoneIcon sx={{marginRight: 1}}/> 
                            <Typography variant="p">Free Cancellation</Typography>
                            </Box>
                        <Button variant="contained" size="large" sx={{marginTop: 1}}>View Deal</Button>
                      </Grid>
                    </Grid>
                  </Card>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default CarList;
