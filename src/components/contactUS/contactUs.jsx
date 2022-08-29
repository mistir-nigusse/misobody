import React,{useEffect, useState} from "react";
import { Form } from "../Form/form";
import { Grid, Container, Autocomplete, TextField } from "@mui/material";
import Controls from "../controls/controls";
import { makeStyles } from "@mui/styles";
import { experimentalStyled as styled } from "@mui/material/styles";
import emailjs from "emailjs-com";
import { CircularProgress,Box } from "@material-ui/core";
import axios from "axios";


// contact us form to order via

const Contactus = ({
  // values,
  // setValues,
  error,
  setError,
}) => {
const useStyles = makeStyles((theme) => ({
  label: {
    color: "white",
  },
  input: {
    color: "white",
  },
}));

  const classes = useStyles();
  const [countries, setCountries] = useState([]);
  const [open, setOpen] = React.useState(false);
  const loading = open && countries.length === 0;
  const [values, setValues] = React.useState({
    user_email: "",
    user_name: "",
    Product_name: "",
    Product_country: "",
    message: "",
  });
  useEffect(() => {
  setValues({ ...values, country: countries[0] });
  axios.get("https://restcountries.com/v3.1/all?fields=name,currencies").then(
    (response) => {
      setCountries(
        response.data.sort((a, b) =>
          a.name.common < b.name.common
            ? -1
            : b.name.common < a.name.common
            ? 1
            : 0
        )
      );
    },
    (error) => {
      console.log(error);
    }
  );
}, []);
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setValues({ ...values, sending: true });
    emailjs
      .sendForm(
        "service_9nllat8",
        "template_eif4x76",
        e.target,
        "user_z74Tihmo9o26WkyQEur3g"
      )
      .then(
        (result) => {
          setValues({ ...values, sending: false });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container>
      <Grid item sm={12} md={4}>
        <h5 className="contact-text">Contact Us</h5>
        <Form onSubmit={sendEmail}>
          <div className="input-container">
            <input
              className="input-cont"
              label="Email"
              name="user_email"
              type="email"
              placeholder="email"
              value={values.user_email}
              onChange={handleInputChange}
              required
              variant="outlined"
              //   InputLabelProps={{
              //     classes: {
              //       root: classes.label,
              //     },
              //   }}
              //   InputProps={{
              //     classes: { input: classes.input },
              //   }}
            />

            <input
              className="input-cont"
              label="Name"
              type="text"
              name="user_name"
              placeholder="userName"
              value={values.user_name}
              onChange={handleInputChange}
              required
              //   InputLabelProps={{
              //     classes: {
              //       root: classes.label,
              //     },
              //   }}
              //   InputProps={{
              //     classes: { input: classes.input },
              //   }}
            />
            <input
              className="input-cont"
              label="productNname"
              name="Product_name"
              type="text"
              placeholder="productName"
              value={values.Product_name}
              onChange={handleInputChange}
              required
              variant="outlined"
              //   InputLabelProps={{
              //     classes: {
              //       root: classes.label,
              //     },
              //   }}
              //   InputProps={{
              //     classes: { input: classes.input },
              //   }}
            />
            <Autocomplete
              id="country-select-demo"
              open={open}
              onOpen={() => {
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              loading={loading}
              value={values.country}
              onChange={(event, newValue) => {
                if (newValue) setError(false);
                setValues({ ...values, country: newValue });
              }}
              required
              sx={{ width: "50%" }}
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.name.common}
              renderOption={(props, option) => (
                <Box
                  key={option.name.common}
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  {option.name.common}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="filled"
                  label="Choose your country"
                  {...(error && {
                    error: true,
                    helperText: "Choose your country.",
                  })}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />
            <input
              className="input-cont"
              label="Message"
              placeholder="write something"
              name="message"
              multiline
              value={values.message}
              onChange={handleInputChange}
              required
              //   InputLabelProps={{
              //     classes: {
              //       root: classes.label,
              //     },
              //   }}
              //   InputProps={{
              //     classes: { input: classes.input },
              //   }}
            />
          </div>

          <Grid item xs={12}>
            <Controls.Button
              disabled={values.sending ? true : false}
              text={
                values.sending == undefined || null
                  ? "Send"
                  : values.sending
                  ? "Sending..."
                  : "sent"
              }
              variant="contained"
              className="Button"
              type="submit"
              color="rgba(244,151,3,.8)"
            />
          </Grid>
        </Form>
      </Grid>
      ;
    </Container>
  );
};

export default Contactus;
