import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import LabelInput from "../../components/labelinput";
import Select from "../../components/select";
import Check from "../../components/check";
import Footer from "../../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Types from "../../state/types";
import { db } from "../../api";
import { Container, ContentContainer, TitleContainer } from "../../styles";
import { BlockContainer } from "./style";
import { Apis } from "../../api";
import { toUserEmailTemplate } from "../../utils";
import Loading from "../../components/loading";
import moment from "moment-timezone";
import SideMenu from "../../components/sidemenu";

const states = [
  {item: "California"}
]

const cities = [
  {item: "Anaheim"},
  {item: "Downey"},
  {item: "Fontana"},
  {item: "Huntington Beach"},
  {item: "Inglewood"},
  {item: "Irvine"},
  {item: "Lakewood"},
  {item: "Long Beach"},
  {item: "Los Angeles"},
  {item: "Moreno Valley"},
  {item: "Newport Beach"},
  {item: "Ontario"},
  {item: "Rancho Cucamonga"},
  {item: "Riverside"},
  {item: "Santa Ana"},
  {item: "Torrance"}
]

function QuoteDetailFirst() {
  const storeData = useSelector((store) => store.data);
  const history = useHistory();
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    ...storeData,
  });

  useEffect(() => {
    var ele = document.getElementsByTagName("body");
    ele[0].style.backgroundColor = "#ffffff";
    setValue({ ...storeData });
  }, [storeData]);

  //save data to the redux store from each form field
  const setData = (data) => {
    dispatch({ type: Types.SET_DATA, payload: { ...data } });
  };

  // validation of form fields value
  const checkValidation = () => {
    let temp = {};
    if (!value.Name) {
      temp = { ...temp, NameValidation: true };
    }
    if (!value.SurName) {
      temp = { ...temp, SurNameValidation: true };
    }
    if (!value.Email) {
      temp = { ...temp, EmailValidation: true };
    }
    if (!value.Phone) {
      temp = { ...temp, PhoneValidation: true };
    }
    if (value.State === "0") {
      temp = { ...temp, StateValidation: true };
    }
    if (value.City === "0") {
      temp = { ...temp, CityValidation: true };
    }
    if (!value.firstCheck) {
      temp = { ...temp, firstCheckValidation: true };
    }
    dispatch({ type: Types.SET_DATA, payload: { ...temp } });

    if (Object.keys(temp).length > 0) {
      return 0;
    } else {
      return 1;
    }
  };

  // go second detail page
  const goNext = () => {
    if (checkValidation()) {
      setData({ isLoading: true });
      db.collection("PersonalInfomation")
        .add({
          Name: value.Name,
          SurName: value.SurName,
          Email: value.Email,
          Phone: value.Phone,
          State: value.State,
          City: value.City,
          RegisteredDate: moment()
            .clone()
            .tz("America/Los_Angeles")
            .format("DD/MM/YYYY"),
          RegisteredTime: moment()
            .clone()
            .tz("America/Los_Angeles")
            .format("HH:mm"),
        })
        .then(async function (docRef) {
          dispatch({ type: Types.SET_DOC_ID, payload: { docId: docRef.id } });
          // console.log("Document written with ID: ", docRef.id);
          const res = await Apis.sendEmail({
            email: value.Email,
            emailBody: toUserEmailTemplate,
            subject: "Welcome to Mortgage Calculator Us.",
          });
          // console.log(res);
          setData({ isLoading: false });
          history.push("/quotedetailsecond");
        })
        .catch(function (error) {
          setData({ isLoading: false });
          console.error("Error adding document: ", error);
        });
    }
  };

  const toggleMenu = (data) => {
    dispatch({ type: Types.SET_DATA, payload: { ...data } });
  };

  return (
    <Container>
      {value.isLoading ? (
        <Loading />
      ) : (
        <>
          <Header toggleMenu={toggleMenu} />
          <SideMenu value={value.drawMenu} toggleMenu={toggleMenu} />
          <ContentContainer>
            <TitleContainer>
              <label className="label">
                The 1st platform for mortgage and refinancing calculator in the
                U.S
              </label>
              <label className="content">
                Now from Mortgage Calculator, get your personalized mortgage or
                refinancing proposal for free. All 100% online. Fill in your
                application and receive the best proposal.
              </label>
            </TitleContainer>
            <BlockContainer>
              <div className="block">
                <LabelInput
                  label="Name*"
                  placeHolder="Your Name…"
                  setData={setData}
                  value={value.Name}
                  id="Name"
                  validate="NameValidation"
                  willValidation={value.NameValidation}
                />
                <LabelInput
                  label="Surname*"
                  placeHolder="Your surname…"
                  setData={setData}
                  value={value.SurName}
                  id="SurName"
                  validate="SurNameValidation"
                  willValidation={value.SurNameValidation}
                />
                <LabelInput
                  label="Your email*"
                  placeHolder="Your email…"
                  setData={setData}
                  value={value.Email}
                  id="Email"
                  validate="EmailValidation"
                  willValidation={value.EmailValidation}
                />
                <LabelInput
                  label="Phone number*"
                  placeHolder="Your phone number…"
                  setData={setData}
                  value={value.Phone}
                  id="Phone"
                  validate="PhoneValidation"
                  willValidation={value.PhoneValidation}
                />
              </div>
              <div className="block">
                <Select
                  label="State*"
                  option="Select your state"
                  setData={setData}
                  value={value.State}
                  id="State"
                  validate="StateValidation"
                  willValidation={value.StateValidation}
                  data = {states}
                />
                <Select
                  label="City*"
                  option="Select your city"
                  setData={setData}
                  value={value.City}
                  id="City"
                  validate="CityValidation"
                  willValidation={value.CityValidation}
                  data={cities}
                />
                <Check
                  value={value.firstCheck}
                  id="firstCheck"
                  validate="firstCheckValidation"
                  setData={setData}
                  willValidation={value.firstCheckValidation}
                  label="By clicking the submit button below, I hereby agree to and accept the following terms and conditions. Visit Terms and Conditions page if needed. "
                />
              </div>
            </BlockContainer>
          </ContentContainer>
          <Footer goNext={goNext} />
        </>
      )}
    </Container>
  );
}

export default QuoteDetailFirst;
