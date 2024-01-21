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
                    <Grid container spacing={2} sx={{p: 3}}>
                        <Grid item xs={12}>
                        <Typography variant="h6" sx={{mb: 1}}>Amoha Hotel</Typography>
                        <Typography variant="p" sx={{mb: 1, lineHeight: 1.7}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</Typography>

                            <Box component='div' sx={{display:'flex', alignItems:'center', justifyContent:'space-between', p: 2, my: 2, background: '#eaeaea'}}>
                                <div>
                                <Typography variant="p" component='div'>CHECK IN</Typography>
                                <Typography variant="h6" component='div'>Fri 12 Jan 2024</Typography>
                                <Typography variant="p" component='div'>2 PM</Typography>
                                </div>
                                <div>
                                <Typography variant="p" component='div'>CHECK OUT</Typography>
                                <Typography variant="h6" component='div'>Fri 12 Jan 2024</Typography>
                                <Typography variant="p" component='div'>2 PM</Typography>
                                </div>
                                <div>
                                <Typography variant="p" component='div'>1 Night | 2 Adults | 1 Room</Typography>
                                </div>
                            </Box>
                            <Typography variant="h6">Deluxe Room</Typography>
                            <Typography variant="p" sx={{mb: 2}}>2 Adults</Typography>
                            <Box component='div' sx={{display:'flex', alignItems:'center', my: 1}}>
                            <DoneIcon sx={{marginRight: 1}}/> 
                            <Typography variant="p">Room Only</Typography>
                            </Box>
                            <Box component='div' sx={{display:'flex', alignItems:'center', my: 1}}>
                            <DoneIcon sx={{marginRight: 1}}/> 
                            <Typography variant="p">No Meals included</Typography>
                            </Box>
                            <Box component='div' sx={{display:'flex', alignItems:'center', mb: 1}}>
                            <CloseIcon color="danger" sx={{marginRight: 1}}/> 
                            <Typography sx={{color:'#b80413'}} variant="p">Non-Refundable</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider light />
                    <Box sx={{p: 2}}>
                    <Typography variant="h6">Guest Details</Typography>
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
            <Grid item xs={12}>
            <Button>+ Add Guest</Button>
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
                        <Typography variant="h5" sx={{mb: 1}}>Price Breakup</Typography>

                            <Box component='div' sx={{display:'flex', alignItems:'center', py: 2, justifyContent:'space-between'}}>
                            <Typography variant="h6">1 Room x 1 Night</Typography>
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
                            <Button variant="contained" color="secondary" fullWidth sx={{py: 2}}>Pay Now</Button>
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