import React, { useEffect, useState } from 'react';
import './Sidebar.css'
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {Home} from '@mui/icons-material';
import classNames from 'classnames';

const Sidebar = () => {

const [selectmenu, setSelectmenu] = useState('')

const side_menus = [
        {
        menuName: 'Dashboard',
        icon: Home,
        route: '/'
        },
        {
            menuName: 'Category',
            icon: Home,
            route: '/category'
        },
        {
            menuName: 'Subcategory',
            icon: Home,
            route: '/subcategory'
        },
]

const handleMenu = (val) =>{
    setSelectmenu(val);
}

useEffect(()=>{
   const val = window.location.pathname;
   for(let i=0; i<side_menus.length; i++){
    if(val === side_menus[i].route){
        setSelectmenu(side_menus[i].menuName)
    }
   }
}, [])

  return (
    <div className='sidebar'>
        <Box>
            <Typography sx={{p: 3, color:'#fff', fontSize :  '20px'}}>ANIMAL ADMIN</Typography>
            <div>
                {
                    side_menus.map((val, index)=>{
                        return (
                          <Link key={index} to={val.route} onClick={()=> handleMenu(val.menuName)}>
                            <Box className={classNames("sidemenu", `${selectmenu === val.menuName && "active"}`)} sx={{ py: 2, px: 3 }}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <val.icon sx={{ marginRight: 1, color: "#fff" }} />
                                <Typography sx={{ color: "#fff" }}>
                                  {val.menuName}
                                </Typography>
                              </div>
                            </Box>
                          </Link>
                        );
                    })
                }
                {/* <Link to={'/'}>
                <Box className='sidemenu' sx={{py: 2, px: 3}}>
                    <div style={{display:'flex', alignItems:'center'}}>
                    <Home sx={{marginRight: 1, color:'#fff'}}/>
                    <Typography sx={{color:'#fff'}}>Home</Typography> 
                    </div>
                </Box>
                </Link>
                <Link to={'/menu'}>
                <Box className='sidemenu' sx={{py: 2, px: 3}}>
                    <div style={{display:'flex', alignItems:'center'}}>
                    <Home sx={{marginRight: 1, color:'#fff'}}/>
                    <Typography sx={{color:'#fff'}}>Menu</Typography> 
                    </div>
                </Box>
                </Link> */}
            </div>
        </Box>
    </div>
  )
}

export default Sidebar