import React, { useState } from 'react';
import { TextField, MenuItem } from '@mui/material';

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


function ProfileDetails() {

  //Material-ui: Textfield
  const inputProps = {
    type: 'number',
  }

  const labelProps = {
    shrink: true
  }



  //React Hooks and functions
  const [sex, setSex] = useState(sexes[0].value);
  const [userAge, setAge] = useState(28);
  const [userHeight, setHeight] = useState(0);
  const [userWeight, setWeight] = useState(0);

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

 
  return (
    <div>

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
        value={userHeight}
        onChange={handleFieldChange}
        InputLabelProps={labelProps}
        inputProps={inputProps}
      ></TextField>

      <TextField
        id="Weightfield"
        name="Weight"
        label="Weight"
        value={userWeight}
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
        value={sex}
        onChange={handleFieldChange}
      >

        {sexes.map((option) => {
          return <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        })}

      </TextField>


    </div>
  )
}

export default ProfileDetails;