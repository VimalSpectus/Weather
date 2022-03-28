import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Input = () => {
    const[value, setValue] = useState<any>()
    console.log(value);
     
    const handleChange = (e:any) => {
        setValue(e.target.value) 
    }

    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/data/" , {state:value});
    }

  return (
    <div>
        <p><TextField id="filled-basic" label="Please Enter Conry Name" variant="filled"
         value={value} onChange={handleChange}/></p>
        <p><Button variant="contained" disabled = {!value}  onClick={handleClick}>Submit</Button></p>
    </div>  
  )
}

export default Input