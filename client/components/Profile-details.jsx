import React, { useState, useEffect } from 'react';
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

  //Material-ui: Textfield props
  const inputProps = {
    type: 'number',
  }

  const labelProps = {
    shrink: true
  }



  //React Hooks and functions
  const [userSex, setSex] = useState(sexes[0].value);
  const [userAge, setAge] = useState();
  const [userHeight, setHeight] = useState();
  const [userWeight, setWeight] = useState();

  // handels setting state of Textfields
  const handleFieldChange = (event) => {
    const { value, name } = event.target;

    // determine which setState needs to be called
    switch (name) {
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
      .then(({ status }) => {
        console.log(status);
      })
      .catch((err) => {
        console.error('could not send update to server =>', err)
      });
  }

  // send axios get request to get user information not provided by Auth0
  const getProfileDetails = () => {
    axios.get(`/profile/${user.email}`)
      .then(({ data, status }) => {
        console.log(status);
        return data
      })
      .then((data) => {
        // setState to reflect user information
        console.log("here's the data?", data.age)
        setAge(data.age);
        setWeight(data.weight);
        setHeight(data.height);
        setSex(data.sex);

      })
      .catch((err) => {
        console.log("could not get information",err);
      })
  }


  //run immediately after rendering
  useEffect(() => {
    getProfileDetails();
  }, [])


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
        onClick={() => { handleUpdateOnClick(user) }}
      >Update</Button>

    </Box>
  )
}

export default ProfileDetails;