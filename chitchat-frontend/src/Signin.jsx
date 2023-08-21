import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin(){
  const navigate = useNavigate()
  const [username, setusername] = useState()
  const [password, setpassword] =useState()
    return(<div>
      <div style={
          { 
              display:"flex",
              justifyContent: "center",
              paddingTop: 150,
              paddingBottom:10                }
      }>
<Typography variant="h5" > Welcome to CHITCHAT! please log in</Typography>
      </div>

  <div style={
          { 
              display:"flex",
              justifyContent: "center"
              }}>
  <Box sx={{ minWidth: 275 }}>
  <Card variant='outlined' style={{width: 400,padding: 20}} >
     
    <TextField 
    onChange={(e => {
       setusername(e.target.value)
    })}
      fullWidth={true}
      label="Email"
      variant='outlined'
    />
   <br />
   <br />
    <TextField
    fullWidth={true}
    onChange={(e) =>{
     setpassword(e.target.value) ;
    }}
      label="password"
      variant='outlined'
      type={"password"}
    />
    <br />
    <br />
  <Button size ="large" variant="contained" onClick={async () =>{
      const response =await axios.post("http://localhost:3000/chat/signin",{
        username:username,   
        password:password
      },{
        headers: {
            "Content-type": "application/json"
        }
      });
      const tocken = response.data;
      localStorage.setItem("token" ,tocken.token);
    // if(tocken){
    //   navigate('/getcourses')
    // }
    }}>Sign in</Button>
  <br />
  
</Card>
</Box>
</div>
</div>);
}

export default Signin;