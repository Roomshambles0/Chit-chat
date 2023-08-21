import React from "react";
import { Paper,Box,Avatar,Typography,Stack,TextField} from "@mui/material";
import { TextInput } from "./TextInput.jsx";
import { MessageLeft, MessageRight } from "./Message.jsx";


export default function Chatform() {
  return (
    <>
    

      <Paper style={{backgroundColor:"#155263"}}elevation={3} >
   <div style={{display:"flex",backgroundColor:"#e0fcff",padding:8}}>
   <Stack direction="row" spacing={2}>
   <Avatar src="/broken-image.jpg" />
   <Typography variant="h6" fontFamily={"Segoe"}>Piyush</Typography>
   </Stack>
   </div><MessageLeft></MessageLeft>
      </Paper>
      <Paper>
   <TextInput></TextInput>
   </Paper>
   
    
    </>
  )
}
