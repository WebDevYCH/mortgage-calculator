import React from "react";
import { useHistory } from "react-router-dom";
import { FooterContainer } from "./style";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    textTransform: 'none',
    fontFamily:'AvenirNext Regular',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: "#353535",
    },
    '&:focus': {
      outline: "none",
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {main:"#000"}    
  }  
});

function Footer(props) {
  const history = useHistory();

  const classes = useStyles();
  

  /*
   * when exit btn click, go to previous page
   */
  const goBackNavigation = () => {
    if (props.navigation === "second") {
      history.push("/quotedetailfirst");
    }
  };

  return (
    <FooterContainer>
      <div className="exit-btn" onClick={goBackNavigation}>
        Exit
      </div>
     
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin} onClick={() => props.goNext()}>
        Continue
        </Button>
      </ThemeProvider>

    </FooterContainer>
  );
}

export default Footer;
