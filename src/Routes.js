import React from 'react';
import Dashboard from './pages/landing/Landing.js';
import Category from './pages/hotelList/HotelList.js';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Login from './pages/login/Login.js';
import ViewHotel from './pages/hotelList/ViewHotel.js';
import ReviewBooking from './pages/hotelList/ReviewBooking.js';
import CarList from './pages/rentalcar/CarList.js';
import ReviewCarBooking from './pages/rentalcar/ReviewCarBooking.js';
import ParkingList from './pages/carparking/ParkingList.js';
import TravelList from './pages/grouptravel/TravelList.js';
import DriverList from './pages/localdrivers/DriverList.js';


const RouteRoute = ({setLoader}) => {
  return (
    <>
    <Routes>
        <Route path='/login' element={<Login setLoader={setLoader}/>}></Route> 
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Dashboard setLoader={setLoader}/>}></Route>
        <Route path='/hotelList' element={<Category setLoader={setLoader}/>}></Route>
        <Route path='/viewhotel' element={<ViewHotel setLoader={setLoader}/>}></Route>
        <Route path='/reviewbooking' element={<ReviewBooking setLoader={setLoader}/>}></Route>
        <Route path='/carlist' element={<CarList setLoader={setLoader}/>}></Route>
        <Route path='/reviewcarbooking' element={<ReviewCarBooking setLoader={setLoader}/>}></Route>
        <Route path='/parkinglist' element={<ParkingList setLoader={setLoader}/>}></Route>
        <Route path='/travellist' element={<TravelList setLoader={setLoader}/>}></Route>
        <Route path='/driverlist' element={<DriverList setLoader={setLoader}/>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default RouteRoute;