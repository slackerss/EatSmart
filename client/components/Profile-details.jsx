import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';
import CalorieCalc from './CalorieCalc.jsx';

//Textfield select
const sexes = [
  {
    value: 'male',
    label: 'M',
  },
  {
    value: 'female',
    label: 'F',
  },
];

function ProfileDetails(props) {
  // Destructure User from props for handleUpdateOnClick
  const { user } = props;

  //Material-ui: Textfield props
  const inputProps = {
    type: 'number',
  };

  const labelProps = {
    shrink: true,
  };

  //React Hooks and functions
  const [userSex, setSex] = useState(sexes[0].value);
  const [userAge, setAge] = useState(0);
  const [userHeight, setHeight] = useState(0);
  const [userWeight, setWeight] = useState(0);

  // handels setting state of Textfields
  const handleFieldChange = (event) => {
    const { value, name } = event.target;

    // determine which setState needs to be called
    switch (name) {
      case 'Age':
        setAge(value);
        break;
      case 'Weight':
        setWeight(value);
        break;
      case 'Height':
        setHeight(value);
        break;
      case 'Sex':
        setSex(value);
        break;
    }
  };

  // on Update click send axios put request that will communicate with server
  const handleUpdateOnClick = (user) => {
    // send axios put request passing in user email as HTTP path parameter
    // passing in object containing state for the update
    axios
      .put(`/profile/${user.email}`, {
        age: userAge,
        height: userHeight,
        weight: userWeight,
        sex: userSex,
      })
      .then(({ status }) => {
        console.log(status);
      })
      .catch((err) => {
        console.error('could not send update to server =>', err);
      });
  };

  // send axios get request to get user information not provided by Auth0
  const getProfileDetails = () => {
    axios
      .get(`/profile/${user.email}`)
      .then(({ data, status }) => {
        console.log(status);
        return data;
      })
      .then((data) => {
        // setState to reflect user information

        if (data.age) {
          setAge(data.age);
        }
        if (data.weight) {
          setWeight(data.weight);
        }
        if (data.height) {
          setHeight(data.height);
        }
        if (data.sex) {
          setSex(data.sex);
        }
      })
      .catch((err) => {
        console.log('could not get information', err);
      });
  };

  //run immediately after rendering
  useEffect(() => {
    getProfileDetails();
  }, []);

  return (
    <div>
      <Box
        sx={{
          border: '1px',
          borderColor: 'grey',
        }}
      >
        <TextField
          id='Agefield'
          name='Age'
          label='Age'
          value={userAge}
          onChange={handleFieldChange}
          InputLabelProps={labelProps}
          inputProps={inputProps}
        ></TextField>

        <TextField
          id='Heightfield'
          name='Height'
          label='Height'
          value={userHeight}
          onChange={handleFieldChange}
          InputLabelProps={labelProps}
          inputProps={inputProps}
        ></TextField>

        <TextField
          id='Weightfield'
          name='Weight'
          label='Weight'
          value={userWeight}
          onChange={handleFieldChange}
          InputLabelProps={labelProps}
          inputProps={inputProps}
        ></TextField>

        <TextField
          id='select-Sex'
          name='Sex'
          select
          label='Sex'
          InputLabelProps={labelProps}
          value={userSex}
          onChange={handleFieldChange}
        >
          {sexes.map((option) => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
        </TextField>

        <Button
          text='Update'
          variant='outlined'
          onClick={() => {
            handleUpdateOnClick(user);
          }}
        >
          Update
        </Button>
      </Box>
      <br />
      <Box>
        <CalorieCalc
          userSex={userSex}
          userAge={userAge}
          userHeight={userHeight}
          userWeight={userWeight}
        />
      </Box>
    </div>
  );
}

export default ProfileDetails;
