import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import {Navigate, useNavigate } from 'react-router-dom';

import { login } from "../../slices/auth";
import { clearMessage } from "../../slices/message";

const Login = ({setLoader}) => {

    const navigate = useNavigate();


    const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(clearMessage());
    }, [dispatch]);

    const [userCredentials, setUserCredentials] = useState({
        username: "",
        password: ""
      });
    
      const [showpassword, setShowpassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)
        dispatch(login(userCredentials))
        .unwrap()
        .then(() => {
          navigate("/");
          window.location.reload();
        })
        .catch(()=>{
          setLoader(false);
        })
      };
    
      const handleClickShowPassword = () => {
        setShowpassword(!showpassword);
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


      if (!isLoggedIn) {
        return <Navigate to="/" />;
      }

  return (
    <Box
    component="form"
    noValidate
    autoComplete="off"
    onSubmit={handleSubmit}
    sx={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: 15}}>
        <Paper sx={{width: 400, p: 3}}>
            <Typography sx={{textAlign: 'center'}}>LOGO</Typography>
            <Grid container spacing={3} sx={{marginTop: 2}}>
                <Grid item xs={12}>
                    <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" 
                    onChange={(e) =>
                      setUserCredentials({
                        ...userCredentials,
                        username: e.target.value,
                      })
                    }
                    />
                </Grid>
                <Grid item xs={12}>
                <FormControl sx={{ width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showpassword ? "text" : "password"}
                      value={userCredentials.password}
                      onChange={(e) =>
                        setUserCredentials({
                          ...userCredentials,
                          password: e.target.value,
                        })
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showpassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>                </Grid>
                <Grid item xs={12}>
                    <Button fullWidth type='submit' variant='contained' size='large' sx={{py: 2, marginTop: 2}}>Login</Button>
                </Grid>
            </Grid>
            {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
        </Paper>
    </Box>
  )
}

export default Login