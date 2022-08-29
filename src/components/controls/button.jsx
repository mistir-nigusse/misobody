import React from "react";
import { makeStyles } from "@mui/styles";
import { Button as MuiButton } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    margin: "4px",
  },
  label: {
    textTransform: "none",
  },
}));

export default function Button(props) {
  const { text, size, color, variant, onClick, ...other } = props;
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color="inherit"
      // color={color || "primary"}
      onClick={onClick}
      {...other}
      style={{
        textTransform: "capitalize",
        backgroundColor: color || "rgb(20, 61, 89)",
        color: "white",
      }}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MuiButton>
  );
}
