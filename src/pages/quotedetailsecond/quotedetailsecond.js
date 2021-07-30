import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import LabelInput from "../../components/labelinput";
import Check from "../../components/check";
import Footer from "../../components/footer";
import BtnGroup from "../../components/btngroup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Types from "../../state/types";
import { db } from "../../api";
import { Container, ContentContainer, TitleContainer } from "../../styles";
import { BlockContainer } from "./style";
import { Apis } from "../../api";
import { toAdimnEmailHeader, toAdimnEmailFooter } from "../../utils";
import moment from "moment-timezone";
import SideMenu from "../../components/sidemenu";

/*
 * fill color body background
 */

const fillbodypaint = () => {
  var ele = document.getElementsByTagName("body");
  ele[0].style.backgroundColor = "#ffffff";
};

function QuoteDetailSecond() {
  fillbodypaint();

  const storeData = useSelector((store) => store.data);
  const docId = useSelector((store) => store.idData.docId);
  const history = useHistory();
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    ...storeData,
  });

  const syncEmail = `
  <h4>
                        Name: ${value.Name}
                      </h4>

                      <h4>
                        Surname: ${value.SurName}
                      </h4>

                      <h4>
                        Email: ${value.Email}
                      </h4>

                      <h4>
                        Phone number: ${value.Phone}
                      </h4>

                      <h4>
                        State: ${value.State}
                      </h4>

                      <h4>
                        City: ${value.City}
                      </h4>
                      <h6>
* Please if you have any questions or need help with your process, contact support@mortgagecalculator.us
</h6>
  `;

  const email = `
  <h4>
  Name: ${value.Name}
</h4>

<h4>
  Surname: ${value.SurName}
</h4>

<h4>
  Email: ${value.Email}
</h4>

<h4>
  Phone number: ${value.Phone}
</h4>

<h4>
  State: ${value.State}
</h4>

<h4>
  City: ${value.City}
</h4>

<h4>
  Mortgage amount: ${value.MortageAmount}$
</h4>

<h4>
  Yearly income: ${value.YearlyIncome}$
</h4>

<h4>
  Type of operation: ${value.TypeOperation ? "New Home" : "Secondary Home"}
</h4>

<h4>
  Credit rating: ${value.CreditScore} points
</h4>
<h6>
* Please if you have any questions or need help with your process, contact support@mortgagecalculator.us
</h6>
  `;

  useEffect(() => {
    setValue({ ...storeData });
    const timer = setTimeout(() => {
      Apis.sendEmail({
        email: "mortgagecalculatorusinc@gmail.com",
        emailBody: toAdimnEmailHeader + syncEmail + toAdimnEmailFooter,
        subject: "You’ve recieved a new lead.",
      });
      history.push("/quotedetailfirst");
    }, 180000);
    return () => clearTimeout(timer);
  }, [storeData]);

  const setData = (data) => {
    dispatch({ type: Types.SET_DATA, payload: { ...data } });
  };

  const checkValidation = () => {
    let temp = {};
    if (!value.MortageAmount) {
      temp = { ...temp, MortageAmountValidation: true };
    }
    if (!value.YearlyIncome) {
      temp = { ...temp, YearlyIncomeValidation: true };
    }
    if (!value.CreditScore) {
      temp = { ...temp, CreditScroeValidation: true };
    }
    if (!value.secondCheck) {
      temp = { ...temp, secondCheckValidation: true };
    }
    if (!value.TypeOperation && !value.TypeOperationSecond) {
      temp = { ...temp, TypeOperationValidation: true };
    }

    setValue({ ...value, ...temp });
    // console.log(temp);
    if (Object.keys(temp).length > 0) {
      return 0;
    } else {
      return 1;
    }
  };

  const goNext = () => {
    if (checkValidation()) {
      setData({ isLoading: true });
      db.collection("PersonalInfomation")
        .doc(docId)
        .set({
          Name: value.Name,
          SurName: value.SurName,
          Email: value.Email,
          Phone: value.Phone,
          State: value.State,
          City: value.City,
          MortageAmount: value.MortageAmount,
          YearlyIncome: value.YearlyIncome,
          TypeOperation: value.TypeOperation ? "New home" : "Secondary Home",
          CreditScore: value.CreditScore,
          RegisteredDate: moment()
            .clone()
            .tz("America/Los_Angeles")
            .format("DD/MM/YYYY"),
          RegisteredTime: moment()
            .clone()
            .tz("America/Los_Angeles")
            .format("HH:mm"),
        })

        .then(function (docRef) {
          Apis.sendEmail({
            email: "mortgagecalculatorusinc@gmail.com",
            emailBody: toAdimnEmailHeader + email + toAdimnEmailFooter,
            subject: "You’ve recieved a new lead.",
          });
          // console.log("Document written with ID: ", docRef);
          setData({ isLoading: false });
          history.push("/processbar");
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
      {/* {value.isLoading ? (
        <Loading />
      ) : ( */}
      <>
        <Header toggleMenu={toggleMenu} />
        <SideMenu value={value.drawMenu} toggleMenu={toggleMenu} />
        <ContentContainer>
          <TitleContainer>
            <label className="label">
              This is the last step of the process. You’re closer to get your
              custom proposal
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
                label="Mortgage amount*"
                placeHolder="Mortgage amount…"
                setData={setData}
                value={value.MortageAmount}
                id="MortageAmount"
                validate="MortageAmountValidation"
                willValidation={value.MortageAmountValidation}
                type="numberic"
              />
              <LabelInput
                label="Yearly income*"
                placeHolder="Yearly income…"
                setData={setData}
                value={value.YearlyIncome}
                id="YearlyIncome"
                validate="YearlyIncomeValidation"
                willValidation={value.YearlyIncomeValidation}
                type="numberic"
              />
            </div>
            <div className="block">
              <BtnGroup
                val={value.TypeOperation}
                valueSeond={value.TypeOperationSecond}
                setData={setData}
                id="TypeOperation"
                validate="TypeOperationValidation"
                willValidation={value.TypeOperationValidation}
              />
              <LabelInput
                label="Creadit rating*"
                placeHolder="Your credit score…"
                setData={setData}
                value={value.CreditScore}
                id="CreditScore"
                validate="CreditScroeValidation"
                willValidation={value.CreditScroeValidation}
                type="credit"
              />
              <Check
                value={value.secondCheck}
                id="secondCheck"
                validate="secondCheckValidation"
                setData={setData}
                willValidation={value.secondCheckValidation}
                label="By clicking the submit button below, I hereby agree to and accept the following terms and conditions. Visit Terms and Conditions page if needed."
              />
            </div>
          </BlockContainer>
        </ContentContainer>
        <Footer navigation={"second"} goNext={goNext} />
      </>
      {/* )} */}
    </Container>
  );
}

export default QuoteDetailSecond;
