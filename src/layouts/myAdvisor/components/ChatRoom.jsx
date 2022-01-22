import React from "react";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import TextInput from "./TextInput";
import { MessageLeft, MessageRight } from "./Message";

const MyPaper = styled(Paper)({
  width: "80vw",
  height: "80vh",
  maxWidth: "500px",
  maxHeight: "700px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
});

export default function ChatRoom() {
  return (
    <div
      style={{
        // width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MyPaper zDepth={2}>
        <Paper
          id="style-1"
          sx={{
            width: "calc( 100% - 20px )",
            margin: 1,
            marginTop: 4,
            overflowY: "scroll",
            height: "calc( 100% - 80px )",
          }}
        >
          {/* <MessageLeft
            message="あめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName=""
            avatarDisp
          /> */}
          <MessageLeft
            message="Hi it's been a while not having lunch together"
            // timestamp="MM/DD 00:00"
            photoURL=""
            displayName="Aaron Lee"
            avatarDisp={false}
          />
          <MessageRight
            message="Yea, this week is quite a busy week for me"
            // timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
            avatarDisp
          />
          <MessageRight
            message="But would love to hear some info about the new RHB product, mind to have lunch on Wed to share more?"
            // timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
            avatarDisp={false}
          />
        </Paper>
        <TextInput />
      </MyPaper>
    </div>
  );
}
