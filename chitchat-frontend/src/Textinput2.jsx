import React from 'react'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';



export const TextInput = () => {
   
    return (
        <>
            <form style={{
                        display: "flex",
                        justifyContent: "center",
                        width:"95%",
                        margin:"auto"
            }}  noValidate autoComplete="off">
            <TextField
                id="standard-text"
                label=" "
                style={{width: "100%"}}
                //margin="normal"
            />
            <Button variant="contained" color="primary" >
                <SendIcon />
            </Button>
            </form>
        </>
    )
}



