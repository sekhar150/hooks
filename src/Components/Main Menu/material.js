import React from 'react'
import {Typography,AppBar,Toolbar,Container, ImageList, ImageListItem, TextField,Button} from '@mui/material'
import ImagesData from './../../Assets/Json/Imageslist.json'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';


function Material() {
  return (
    <div>
   <AppBar style={{"marginTop":"90px"}}>
     <Toolbar>
     <AddAPhotoIcon />
  <Typography variant='h4' >Photography</Typography>
     </Toolbar>
   </AppBar>
   <Container style={{"marginTop":"70px","textAlign":"center"}}>
  <Typography variant='h4'>Our Latest Version Of Photography</Typography>
  <Typography paragraph>Pleasure to take your photos as well</Typography>
   </Container>
   <Container>
     <ImageList rowHeight={150} cols={3}>
       {ImagesData.map((res)=>
       <ImageListItem key={res.id} cols={1}>
         <img src={res.url} alt={res.title}/>
       </ImageListItem>
        )}
     </ImageList>
   </Container>
    <center>
     <Container>
       <Typography variant='h4'>Contact Form</Typography>
       <form>
         <TextField style={{"width":"500px","margin":"5px"}} type="text" label="Name" variant='outlined'/><br></br>
         <TextField style={{"width":"500px","margin":"5px"}} type="email" label="Email" variant='outlined'/><br></br>
         <TextField style={{"width":"500px","margin":"5px"}} type="text" label="Proposal" variant='outlined'/><br></br>
         <TextField style={{"width":"500px","margin":"5px"}} type="text" label="Address" variant='outlined'/><br></br>
         <Button variant="contained"><LabelImportantIcon/>Submit</Button>
       </form>
     </Container>
   </center> 
    </div>
  )
}


export default Material;