import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const DataShow = () => {

    const location:any = useLocation();
    const[data, setData] = useState<any>();
    const[weather, setWeather] = useState<any>();

    const New = location.state;
    console.log(New);

    useEffect(()=>{
        ApiCaallC();
    })

    const handleClick = () => {
        ApiCallW();
    }

    const ApiCaallC = () =>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://restcountries.com/v3.1/name/${New}`)
            .then(response => response.json())
            .then((result) => {
                console.log(result);
                setData({
                    capital: result[0].capital[0],
                    population: result[0].population,
                    lat: result[0].latlng[0],
                    long: result[0].latlng[1],
                    Flags: result[0].flags['png'],
                });
            })
            .catch(error => console.log('error', error));
    }

    const ApiCallW = () =>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`http://api.weatherstack.com/current?access_key=12700ec246607b0da6baa1e34ea85377&query=${New}`)
            .then(response => response.json())
            .then((result) => {
                console.log(result);
                setWeather({
                    temperature: result.current.temperature,
                    weather_icons: result.current.weather_icons,
                    wind_speed: result.current.wind_speed,
                    precip: result.current.precip,
                });
              
            })
            .catch(error => console.log('error', error));
    }
    
  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><h2>Capital</h2></TableCell>
            <TableCell align="center"><h2>population</h2></TableCell>
            <TableCell align="center"><h2>Lat-Long</h2></TableCell>
            <TableCell align="center"><h2>Flag</h2></TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
            {data ? (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{data.capital}</TableCell>
              <TableCell align="center">{data.population}</TableCell>
              <TableCell align="center">{data.lat} , { data.long}</TableCell>
              <TableCell align="center">
                  <img src={data.Flags}/>
              </TableCell>  
    
            </TableRow>) : null}
        
        </TableBody>
      </Table>
    </TableContainer>

    <p><Button variant="contained" onClick={handleClick}>Weather Update</Button></p>

    <p>
        {weather ? (
              <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center"><h2>temperature</h2></TableCell>
                    <TableCell align="center"><h2>wind_speed</h2></TableCell>
                    <TableCell align="center"><h2>weather_icons</h2></TableCell>
                    <TableCell align="center"><h2>precip</h2></TableCell>
                
                  </TableRow>
                </TableHead>
                <TableBody>
            
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">{weather.temperature}</TableCell>
                      <TableCell align="center">{weather.wind_speed}</TableCell>
                      <TableCell align="center">{weather.precip}</TableCell>
                      <TableCell align="center">
                          <img src={weather.weather_icons}/>
                      </TableCell>  
            
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
        ) : null}
  
    </p>
    </div>
  )
}

export default DataShow