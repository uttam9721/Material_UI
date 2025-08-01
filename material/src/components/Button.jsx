import React from 'react';
import { Button, IconButton } from '@mui/material'; // MUI Button
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';

// import { IconButton } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { Fab } from '@mui/material';
import { Checkbox } from '@mui/material';
import Rating  from '@mui/material/Rating';
import Slider  from '@mui/material/Slider';
import Box  from '@mui/material/Box';

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

     <h1>Custom button</h1>
     <Button variant="contained" style={{backgroundColor:'green'}} >Text</Button>

     <h1>Click button</h1>
     <Button variant="contained" onClick={()=>alert('Hii Uttam')} >Click me </Button>

     <h1>button group</h1>
     <ButtonGroup>
        <Button>ONE</Button>
        <Button>TWO</Button>
        <Button>THREE</Button>
     </ButtonGroup>
     <h1>button group vertical</h1>
     <ButtonGroup orientation='vertical'>
        <Button>ONE</Button>
        <Button>TWO</Button>
        <Button>THREE</Button>
     </ButtonGroup>

<h1>Floating Action Button</h1>
     <Fab color='secondary'>
        U
     </Fab>
     <Fab>
        T
     </Fab>
     <Fab>
        T
     </Fab>
     <Fab>
        A
     </Fab>
     <Fab>
        M
     </Fab>

     <h1>Checkbox</h1>
     
     <Checkbox  defaultChecked />
<Checkbox control={Checkbox} lebel='start' lebelPlacement="top" />
<Checkbox  disabled />
<Checkbox  disabled checked />

<h1>Rating</h1>
<Rating value={4}  readOnly/>

<h1>Slider</h1>
<Slider />

<h1>Margin</h1>
<Box m={10}>Uttam Maurya</Box> 
    </div>
  );
};

export default MyButton;
