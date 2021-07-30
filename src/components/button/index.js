import React from "react";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Media } from "reactstrap";
import { MaximizeTwoTone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  margin: {
    padding: theme.spacing(1),
    marginTop:theme.spacing(2),
    marginRight: theme.spacing(2),
    textTransform: "none",
    color: '#ffffff',
    fontFamily: "AvenirNext",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "#353535",
    },
    "&:focus": {
      outline: "none",
    },
    minWidth: '55%',
    height: '55px',
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: { main: "#000" },
  },
});

function CustomButton({ buttonClicked, text }) {
    const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={() => buttonClicked()}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
}

export default CustomButton;
