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

const Category = ({ setLoader }) => {
  return (
    <div className="content">
      <div style={{ paddingTop: "150px" }}>
        <div style={{ background: "#fff" }}>
          <Container maxWidth="xl">
            <div className="search_bar">
              <Grid container sx={{ alignItems: "center" }}>
                <Grid item xs={3} sx={{ borderRight: "1px solid #000", px: 2 }}>
                  <input
                    className="inputField"
                    placeholder="Room Type"
                    style={{ height: "50px", border: "none" }}
                  />
                </Grid>
                <Grid item xs={3} sx={{ borderRight: "1px solid #000", px: 2 }}>
                  <input
                    className="inputField"
                    placeholder="Check in Date - Check Out Date"
                    style={{ height: "50px", border: "none" }}
                  />
                </Grid>
                <Grid item xs={3} sx={{ borderRight: "1px solid #000", px: 2 }}>
                  <input
                    className="inputField"
                    placeholder="2 adults - 0 children - 1 room"
                    style={{ height: "50px", border: "none" }}
                  />{" "}
                </Grid>
                <Grid item xs={3} sx={{ px: 2 }}>
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
                    Total 3187 Properties Found
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ paddingTop: 0 }}>
                  <Button
                    size="large"
                    variant="outlined"
                    color="primary"
                    sx={{ borderRadius: 10, py: 2 }}
                  >
                    Sort by: Our top picks <SwapVertIcon />
                  </Button>
                </Grid>
                <Grid item xs={12} sx={{ paddingTop: 0 }}>
                <Link to='/viewhotel' style={{textDecoration:'none'}}>
                  <Card sx={{ p: 3, boxShadow:'0px 0px 10px #cacaca', borderRadius: 3 }}>
                    <Grid container spacing={5}>
                      <Grid item xs={3} sx={{position:'relative'}}>
                        <CardMedia
                          component="img"
                          height="300"
                          image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                          alt="Paella dish"
                          sx={{borderRadius: 2}}
                        />
                        <FavoriteIcon sx={{color: '#fff', position:'absolute', top: '15%', right: '5%',}}/>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography variant="h5" component='p' color='primary' sx={{fontWeight: 'medium', marginBottom: 1}}>
                            Apartment Hotel  <Rating name="read-only" value='4' readOnly />
                        </Typography>
                        <Typography variant="p" component='p' sx={{fontWeight: 'medium', paddingBottom: 1}}> 
                            <a href="#">Show on map</a> 300m from kovil
                        </Typography>
                        <Typography variant="p" component='div' sx={{lineHeight: 1.5}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography>2187 Reviews <span style={{background:'#004db5', color:'#fff', padding: 4}}>4.4 </span></Typography>
                        <Button variant="contained" size="large" sx={{marginTop: 3}}>Show Prices</Button>
                      </Grid>
                    </Grid>
                  </Card>
                  </Link>
                </Grid>
                <Grid item xs={12} sx={{ paddingTop: 0 }}>
                <Link to='/viewhotel' style={{textDecoration:'none'}}>
                <Card sx={{ p: 3, boxShadow:'0px 0px 10px #cacaca', borderRadius: 3 }}>
                    <Grid container spacing={5}>
                      <Grid item xs={3} position='relative'>
                        <CardMedia
                          component="img"
                          height="300"
                          image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                          alt="Paella dish"
                          sx={{borderRadius: 2}}
                        />
                        <FavoriteIcon sx={{color: '#fff', position:'absolute', top: '15%', right: '5%',}}/>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography variant="h5" component='p' color='primary' sx={{fontWeight: 'medium', marginBottom: 1}}>
                            Apartment Hotel  <Rating name="read-only" value='4' readOnly />
                        </Typography>
                        <Typography variant="p" component='p' sx={{fontWeight: 'medium', paddingBottom: 1}}> 
                            <a href="#">Show on map</a> 300m from kovil
                        </Typography>
                        <Typography variant="p" component='div' sx={{lineHeight: 1.5}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography>2187 Reviews <span style={{background:'#004db5', color:'#fff', padding: 4}}>4.4 </span></Typography>
                        <Button variant="contained" size="large" sx={{marginTop: 3}}>Show Prices</Button>
                      </Grid>
                    </Grid>
                  </Card>
                </Link>
                </Grid>
                <Grid item xs={12} sx={{ paddingTop: 0 }}>
                <Link to='/viewhotel' style={{textDecoration:'none'}}>
                  <Card sx={{ p: 3, boxShadow:'0px 0px 10px #cacaca', borderRadius: 3 }}>
                    <Grid container spacing={5}>
                      <Grid item xs={3} position='relative'>
                        <CardMedia
                          component="img"
                          height="300"
                          image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                          alt="Paella dish"
                          sx={{borderRadius: 2}}
                        />
                        <FavoriteIcon sx={{color: '#fff', position:'absolute', top: '15%', right: '5%',}}/>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography variant="h5" component='p' color='primary' sx={{fontWeight: 'medium', marginBottom: 1}}>
                            Apartment Hotel  <Rating name="read-only" value='4' readOnly />
                        </Typography>
                        <Typography variant="p" component='p' sx={{fontWeight: 'medium', paddingBottom: 1}}> 
                            <a href="#">Show on map</a> 300m from kovil
                        </Typography>
                        <Typography variant="p" component='div' sx={{lineHeight: 1.5}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography>2187 Reviews <span style={{background:'#004db5', color:'#fff', padding: 4}}>4.4 </span></Typography>
                        <Button variant="contained" size="large" sx={{marginTop: 3}}>Show Prices</Button>
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

export default Category;
