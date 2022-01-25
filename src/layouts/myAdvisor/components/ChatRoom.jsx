import React from "react";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import MDBox from "components/MDBox";
import ProfileCard from "examples/Cards/ProfileCard";
import womenProfile from "assets/images/cropped-woman-profile.jpg";
import TextInput from "./TextInput";
import { MessageLeft, MessageRight } from "./Message";

const MyPaper = styled(Paper)({
  width: "100%",
  // height: "100%",
  // maxWidth: "500px",
  maxHeight: "700px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
});
const Container = styled("div")(({ theme }) => ({
  display: "flex",
  paddingTop: "20px",
  height: "calc(100vh - 8rem)",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export default function ChatRoom() {
  return (
    <Container>
      <MDBox sx={{ minWidth: "100px" }}>
        <ProfileCard
          color="dark"
          icon={womenProfile}
          name="Aaron"
          jobTitle="Professional Financial Advisor"
          percentage={{
            color: "success",
            // amount: "+55%",
            label:
              "I provide comprehensive insurance planning for professionals while they are in school, residency, or working full time.",
          }}
        />
      </MDBox>
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
          <MessageLeft
            message="Great! See you on Wed afternoon 1pm, as usual at Sharon's Cafe"
            // timestamp="MM/DD 00:00"
            photoURL=""
            displayName="Aaron Lee"
            avatarDisp={false}
          />
        </Paper>
        <TextInput />
      </MyPaper>
    </Container>
  );
}
