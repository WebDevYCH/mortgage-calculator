import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../styles";
import { backImg } from "../../assets";

import { ReactComponent as AvatarFirst } from "../../assets/images/MORTGAGE.svg";
import { ReactComponent as AvatarSecond } from "../../assets/images/REFINANCING.svg";

import ModalDialog from "../../components/modal";

import {
  BlockContainer,
  BlockContainerSecond,
  BlockSecond,
  CircleIcon,
  ContentContainer,
  BlockContainerThird,
} from "./style";
import Header from "../../components/homepageheader";
import Button from "../../components/button";
import SideMenu from "../../components/sidemenu";
import * as Types from "../../state/types";
import HomePageFooter from "../../components/homepagefooter";
import { useHistory } from "react-router-dom";

function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const storeData = useSelector((store) => store.data);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState({
    ...storeData,
  });
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setValue({ ...storeData });
  }, [storeData]);
  const buttonClicked = () => {
    history.push("/quotedetailfirst");
  };
  const toggleMenu = (data) => {
    dispatch({ type: Types.SET_DATA, payload: { ...data } });
  };

  return (
    <Container>
      <Header toggleMenu={toggleMenu} />
      <SideMenu value={value.drawMenu} toggleMenu={toggleMenu} />
      <ContentContainer id="backcolor">
        <ModalDialog />
        <BlockContainer>
          <div className="block">
            <div className="title">
              The 1st platform for mortgage and refinancing calculator in the
              U.S
            </div>
            <div className="content">
              Now from Mortgage Calculator, get your personalized mortgage or
              refinancing proposal for free. All 100% online. Fill in your
              application and receive the best proposal.
            </div>
            <div className="btn-group">
              <Button
                text="Mortgage Calculator"
                buttonClicked={buttonClicked}
              />
              <Button
                text="Refinancing Calculator"
                buttonClicked={buttonClicked}
              />
            </div>
            <div className="privacy">
              *Please complete the Mortgage Calculator or Refinance Calculator
              form below to calculate your mortgage and receive the best
              proposal.
            </div>
          </div>
        </BlockContainer>
        <BlockContainerSecond>
          <div className="block">
            <div className="title">Easy and simple.</div>
            <div className="title">Receive your personalized proposal.</div>
            <div className="content">
              At Mortgage Calculator we help you find and manage the best
              mortgage or refinancing proposal. You will receive your
              personalized proposal quickly and 100% online.
            </div>
          </div>
        </BlockContainerSecond>
        <BlockContainerThird>
          <div className="block">
            <CircleIcon>
              <AvatarFirst style={{ width: "25px", height: "25px" }} />
            </CircleIcon>
            <div className="title">Online Mortgage Experience.</div>
            <div className="content">
              Get the best proposal for your mortgage through Mortgage
              Calculator, 100% online. You will receive your proposal through
              the best partner that suits your needs.
            </div>
          </div>
          <div className="block">
            <CircleIcon>
              <AvatarSecond style={{ width: "25px", height: "25px" }} />
            </CircleIcon>
            <div className="title">Online Refinancing Experience.</div>
            <div className="content" id="contentId">
              Get the best proposal for refinancing through Mortgage Calculator,
              100% online. You will receive your proposal through the best
              partner that suits your needs.
            </div>
          </div>
        </BlockContainerThird>
        <HomePageFooter />
      </ContentContainer>
    </Container>
  );
}

export default HomePage;
