import React from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const MyForm = styled("form")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "95%",
  margin: `${theme.spacing(1)} auto`,
}));

const TextInput = () => (
  <>
    <MyForm noValidate autoComplete="off">
      <TextField
        id="standard-text"
        label="メッセージを入力"
        sx={{ width: "100%" }}
      // margin="normal"
      />
      <Button variant="contained" color="primary">
        <SendIcon color="white"/>
      </Button>
    </MyForm>
  </>
);

export default TextInput;
