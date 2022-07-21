import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';

//Textfield select
const sexes = [
  {
    value: "male",
    label: "M"
  },
  {
    value: "female",
    label: "F"
  }
]


function ProfileDetails(props) {
  // Destructure User from props for handleUpdateOnClick
  const { user } = props

  //Material-ui: Textfield
  const inputProps = {
    type: 'number',
  }

  const labelProps = {
    shrink: true
  }



  //React Hooks and functions
  const [userSex, setSex] = useState(sexes[0].value);
  const [userAge, setAge] = useState(0);
  const [userHeight, setHeight] = useState(0);
  const [userWeight, setWeight] = useState(0);

  // handels setting state of Textfields
  const handleFieldChange = (event) => {
    const { value, name } = event.target;
    
    // determine which setState needs to be called
    switch(name){
      case "Age": setAge(value)
      break;
      case "Weight": setWeight(value)
      break;
      case "Height": setHeight(value)
      break;
      case "Sex": setSex(value)
      break;
    }
    console.log(`The ${name} field's value has been changed to ${value}`);
  }

  // on Update click send axios put request that will communicate with server
  const handleUpdateOnClick = (user) => {
    // send axios put request passing in user email as HTTP path parameter
    // passing in object containing state for the update
    axios.put(`/profile/${user.email}`, {
      age: userAge,
      height: userHeight,
      weight: userWeight,
      sex: userSex
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error('could not send update to server =>', err)
    });
  }
  console.log(user);
  return (
    <Box
    sx={{
      border: "1px",
      borderColor: "grey"
    }}
    >

      <TextField
        id="Agefield"
        name="Age"
        label="Age"
        defaultValue={userAge}
        onChange={handleFieldChange}
        InputLabelProps={labelProps}
        inputProps={inputProps}
      ></TextField>

      <TextField
        id="Heightfield"
        name="Height"
        label="Height"
        defaultValue={userHeight}
        onChange={handleFieldChange}
        InputLabelProps={labelProps}
        inputProps={inputProps}
      ></TextField>

      <TextField
        id="Weightfield"
        name="Weight"
        label="Weight"
        defaultValue={userWeight}
        onChange={handleFieldChange}
        InputLabelProps={labelProps}
        inputProps={inputProps}
      ></TextField>

      <TextField
        id="select-Sex"
        name="Sex"
        select
        label="Sex"
        InputLabelProps={labelProps}
        defaultValue={userSex}
        onChange={handleFieldChange}
      >

        {sexes.map((option) => {
          return <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        })}

      </TextField>

        <Button text="Update" variant="outlined"
        onClick={() => {  handleUpdateOnClick(user) }}
        >Update</Button>

    </Box>
  )
}

export default ProfileDetails;