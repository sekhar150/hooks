import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function BasicTextFields() {
  return (
      <div className='container py-5'>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField className='w-50' id="outlined-basic" label="Username" variant="outlined" /><br></br>
      <TextField className='w-50' id="outlined-basic" label="Password" variant="outlined" /><br></br>
      <Button variant="contained">SignIn</Button>
    </Box>
  </div>);
}