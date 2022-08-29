import React from "react"
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles((theme) => ({
  label: {
    color: "black",
  },
  input: {
    color: "white",
  },
}));

export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className="contactwithUs-form" autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}
