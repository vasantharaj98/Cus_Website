import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import CarRentalIcon from '@mui/icons-material/CarRental';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Groups3Icon from '@mui/icons-material/Groups3';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MedicationIcon from '@mui/icons-material/Medication';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow:'none',
  justifyContent: 'center',
  alignItems:'center'
}));

export default function ModuleGrid() {
  return (
    <Box sx={{ flexGrow: 1, background:'#fff', borderRadius: 4, overflow:'hidden' }}>
      <Grid container sx={{justifyContent:'center'}}>
      <Grid  item xs={2.4}>
      <Link style={{textDecoration:'none'}} to='/hotelList'>
        <div className='moduleItem'>
        <ApartmentIcon className='icon'/>
            <Typography className='text'>
            Hotel & Homes
            </Typography>
        </div>
            </Link>
        </Grid>
        <Grid item xs={2.4}>
        <Link style={{textDecoration:'none'}} to='/parkinglist'>
        <div className='moduleItem'>
        <LocalParkingIcon className='icon'/>
        <Typography>
            Car Parking
            </Typography>
        </div>
            </Link>
        </Grid>
        <Grid item xs={2.4}>
        <Link style={{textDecoration:'none'}} to='/carlist'>
        <div className='moduleItem'>
        <CarRentalIcon className='icon'/>
        <Typography>
            Bike, Cycle, Car Rental
            </Typography>
        </div>
            </Link>
        </Grid>
        <Grid item xs={2.4}>
        <Link style={{textDecoration:'none'}} to='/driverlist'>
        <div className='moduleItem'>
        <EngineeringIcon className='icon'/>
        <Typography>
        Local Drivers
            </Typography>
        </div>
            </Link>
        </Grid>
        <Grid item xs={2.4}>
        <Link style={{textDecoration:'none'}} to='/travellist'>
        <div className='moduleItem'>
        <Groups3Icon className='icon'/>
        <Typography>
        Group Travel
            </Typography>
        </div>
            </Link>
        </Grid>
        <Grid className='moduleItem' item xs={2.4}>
            <LocalGroceryStoreIcon className='icon'/>
            <Typography>
            Grocery
            </Typography>
        </Grid>
        <Grid className='moduleItem' item xs={2.4}>
            <RestaurantIcon className='icon'/>
            <Typography>
            Foods
            </Typography>
        </Grid>
        <Grid className='moduleItem' item xs={2.4}>
            <MedicationIcon className='icon'/>
            <Typography>
            Pharma
            </Typography>
        </Grid>
        <Grid className='moduleItem' item xs={2.4}>
            <MapsHomeWorkIcon className='icon'/>
            <Typography>
            Home Services
            </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}