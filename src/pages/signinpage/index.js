import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../styles";
import * as Types from "../../state/types";
import SideMenu from "../../components/sidemenu";
import { ContentContainer } from "./style";
import Header from "../../components/header";
import HeaderBottom from "../../components/HeaderBottom";
// import { bannerImg4 } from '../../assets';
import LabelInput from "../../components/labelinput";
import HomePageFooter from "../../components/homepagefooter";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  margin: {
    textTransform: "none",
    fontFamily: "AvenirNext Regular",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "#353535",
    },
    "&:focus": {
      outline: "none",
    },
    width: "198px",
    height: "55px",
    padding: 0,
  },
}));

function SignInPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.data);
  const [value, setValue] = useState({
    ...storeData,
  });

  const theme = createMuiTheme({
    palette: {
      primary: { main: "#000" },
    },
  });
  useEffect(() => {
    var ele = document.getElementsByTagName("body");
    ele[0].style.backgroundColor = "#d4d4d4";
    setValue({ ...storeData });
  }, [storeData]);

  const toggleMenu = (data) => {
    dispatch({ type: Types.SET_DATA, payload: { ...data } });
  };
  const setData = (data) => {
    dispatch({ type: Types.SET_DATA, payload: { ...data } });
  };
  const checkValidation = () => {
    let temp = {};
    if (!value.LoginEmail) {
      temp = { ...temp, LoginEmailValidation: true };
    }
    if (!value.LoginPassword) {
      temp = { ...temp, LoginPasswordValidation: true };
    }
    dispatch({ type: Types.SET_DATA, payload: { ...temp } });

    if (Object.keys(temp).length > 0) {
      return 0;
    } else {
      return 1;
    }
  };
  const login = () => {
    if (checkValidation()) {
      alert("You are right!!");
    }
  };
  return (
    <Container>
      <Header clsName="paddingsm" toggleMenu={toggleMenu} />
      <SideMenu value={value.drawMenu} toggleMenu={toggleMenu} />
      <ContentContainer>
        <div className="content">
          <div className="block">
            <div className="title">WELCOME PARTNER.</div>
          </div>
        </div>
        <div className="content">
          <div className="block">
            <div className="smtitle">
              Welcome! Now you can login to your partner account with Mortgage
              Calculator.
            </div>
            <div className="textcontent">
              Now you can access your private area in Mortgage Calculator. If
              you are a partner and you still do not have access to your private
              area, please, contact us.
            </div>
            <div className="smtitle">Become a partner.</div>
            <div className="textcontent">
              Do you want to be part of Mortgage Calculator? If you are a credit
              financial institution, you can contact us at
              <a>{` business@mortgagecalculator.us`}</a>
            </div>
          </div>
          <div className="block">
            <div className="labelinput">
              <LabelInput
                label="Email*"
                placeHolder="Your email…"
                setData={setData}
                id="LoginEmail"
                validate="LoginEmailValidation"
                willValidation={value.LoginEmailValidation}
              />
            </div>
            <div className="labelinput">
              <LabelInput
                className="LabelInput"
                label="Password*"
                placeHolder="Your password…"
                setData={setData}
                id="LoginPassword"
                validate="LoginPasswordValidation"
                type="password"
                willValidation={value.LoginPasswordValidation}
              />
            </div>
            <div className="loginBtn">
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.margin}
                  onClick={() => login()}
                >
                  Login
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </div>
        {/* <div className="group">
          <div className="block">
          </div>
          <div className="block">
            <div className="title">
              Please login to your account.
            </div>
            <div className='desc'>
              Please access your personal account on MC.US. Do not share your account access information with anyone.
            </div>
            <LabelInput
                    label="Email*"
                    placeHolder="Your email…"
                    setData={setData}
                    id="LoginEmail"
                    validate="LoginEmailValidation"
                    willValidation={value.LoginEmailValidation}
                  />
            <LabelInput className="LabelInput"
                    label="Password*"
                    placeHolder="Your password…"
                    setData={setData}
                    id="LoginPassword"
                    validate="LoginPasswordValidation"
                    type="password"
                    willValidation={value.LoginPasswordValidation}
                  />
            <div className="LoginBtn">
              <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary" className={classes.margin} onClick={() => login()}>
                Login
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </div> */}
      </ContentContainer>
      <div className="bottom-fix">
        <HomePageFooter />
      </div>
    </Container>
  );
}

export default SignInPage;
