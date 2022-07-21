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
  const [sex, setSex] = useState(sexes[0].value)

  const handleSelectFieldChange = (event) => {
    setSex(event.target.value);
  }

  return (
    <div>

      <TextField
        id="Agefield"
        label="Age"
        InputLabelProps={labelProps}
        inputProps={inputProps}
      ></TextField>

      <TextField
        id="Heightfield"
        label="Height"
        InputLabelProps={labelProps}
        inputProps={inputProps}
      ></TextField>

      <TextField
        id="Weightfield"
        label="Weight"
        InputLabelProps={labelProps}
        inputProps={inputProps}
      ></TextField>

      <TextField
        id="select-Sex"
        select
        label="Sex"
        InputLabelProps={labelProps}
        value={sex}
        onChange={handleSelectFieldChange}
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