import React from 'react';
import { Button, IconButton } from '@mui/material'; // MUI Button
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
// import { IconButton } from '@mui/material';

const MyButton = () => {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="secondary">Text</Button>
      <h1>button </h1>
      <Button variant="contained" color='primary'>Text</Button>
      <Button variant="contained" color='primary'>Text</Button>
      <Button variant="contained" color='secondary'>Text</Button>
      <Button variant="contained" disabled>Disable</Button>
      <h1>Outline</h1>
      <Button variant="outlined" color='primary'>Text</Button>
      <Button variant="outlined" color='primary'>Text</Button>
      <Button variant="outlined" color='secondary'>Text</Button>
      <h1>size</h1>
      <Button variant="outlined" size='small'>Text</Button>
      <Button variant="outlined" size='medium'>Text</Button>
      <Button variant="outlined" size='large'>Text</Button>
      <h1>Button with icon</h1>
     <Button variant="contained" startIcon ={<AutoDeleteIcon/>} >Text</Button>
     <Button variant="contained" color='warning' endIcon ={<AutoDeleteIcon/>} >Text</Button>

     <h1>icon button</h1>
     <IconButton color='secondary'>
        <AutoDeleteIcon />
     </IconButton>
    </div>
  );
};

export default MyButton;
