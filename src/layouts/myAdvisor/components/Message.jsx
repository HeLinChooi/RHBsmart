import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

const BlueMessage = styled("div")({
  position: "relative",
  marginLeft: "20px",
  marginBottom: "10px",
  padding: "10px",
  backgroundColor: "#A8DDFD",
  width: "60%",
  // height: "50px",
  textAlign: "left",
  font: "400 .9em 'Open Sans', sans-serif",
  border: "1px solid #97C6E3",
  borderRadius: "10px",
  "&:after": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "0",
    borderTop: "15px solid #A8DDFD",
    borderLeft: "15px solid transparent",
    borderRight: "15px solid transparent",
    top: "0",
    left: "-15px",
  },
  "&:before": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "0",
    borderTop: "17px solid #97C6E3",
    borderLeft: "16px solid transparent",
    borderRight: "16px solid transparent",
    top: "-1px",
    left: "-17px",
  },
});

const OrangeMessage = styled("div")({
  position: "relative",
  marginRight: "20px",
  marginBottom: "10px",
  padding: "10px",
  backgroundColor: "#f8e896",
  width: "60%",
  // height: "50px",
  textAlign: "left",
  font: "400 .9em 'Open Sans', sans-serif",
  border: "1px solid #dfd087",
  borderRadius: "10px",
  "&:after": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "0",
    borderTop: "15px solid #f8e896",
    borderLeft: "15px solid transparent",
    borderRight: "15px solid transparent",
    top: "0",
    right: "-15px",
  },
  "&:before": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "0",
    borderTop: "17px solid #dfd087",
    borderLeft: "16px solid transparent",
    borderRight: "16px solid transparent",
    top: "-1px",
    right: "-17px",
  },
});

const MessageTimeStampRight = styled("div")({
  position: "absolute",
  fontSize: ".85em",
  fontWeight: "300",
  marginTop: "10px",
  bottom: "-3px",
  right: "5px",
});

// avatarが左にあるメッセージ（他人）
export const MessageLeft = (props) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  const displayName = props.displayName ? props.displayName : "名無しさん";
  const theme = useTheme();
  return (
    <>
      <div style={{ display: "flex" }}>
        <Avatar
          alt={displayName}
          sx={{
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: deepOrange[500],
            width: theme.spacing(4),
            height: theme.spacing(4),
          }}
          src={photoURL}
        />
        <div>
          <div style={{ marginLeft: "20px" }}>{displayName}</div>
          <BlueMessage>
            <div>
              <p style={{ padding: 0, margin: 0 }}>{message}</p>
            </div>
            <div
              style={{
                position: "absolute",
                fontSize: ".85em",
                fontWeight: "300",
                marginTop: "10px",
                bottom: "-3px",
                right: "5px",
              }}
            >
              {timestamp}
            </div>
          </BlueMessage>
        </div>
      </div>
    </>
  );
};
// avatarが右にあるメッセージ（自分）
export const MessageRight = (props) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <OrangeMessage>
        <p style={{ padding: 0, margin: 0 }}>{message}</p>
        <MessageTimeStampRight>{timestamp}</MessageTimeStampRight>
      </OrangeMessage>
    </div>
  );
};
