import React from "react";
import { Paper } from "@mui/material";
import { TextInput } from "./TextInput.jsx";
import { MessageLeft, MessageRight } from "./Message.jsx";


export default function Chatform() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end"
    }}>
      <Paper style={{
           width: "60vw",
           height: "100vh",
           display: "flex",
           alignItems: "center",
           flexDirection: "column",
           position: "relative"
      }} zDepth={2}>
        <Paper id="style-1" style={{width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      height: "calc( 100% - 80px )"}}>
          <MessageLeft
            message="a"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="fsdf"
            avatarDisp={true}
          />
          
          
          <MessageRight
            message="b"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="sdfsf"
            avatarDisp={true}
          />
        </Paper><Paper>
        <TextInput />
        </Paper>

      </Paper>
    </div>
  );
}
