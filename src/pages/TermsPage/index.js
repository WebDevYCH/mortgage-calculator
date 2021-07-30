import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../styles";
import * as Types from "../../state/types";
import SideMenu from "../../components/sidemenu";
import { ContentContainer, BlockContainer } from "./style";
import Header from "../../components/header";
import HomePageFooter from "../../components/homepagefooter";

import { animateScroll as scroll } from "react-scroll";

function TermsPage() {
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.data);
  const [value, setValue] = useState({
    ...storeData,
  });
  useEffect(() => {
    scroll.scrollToTop();
    setValue({ ...storeData });
  }, [storeData]);
  const toggleMenu = (data) => {
    dispatch({ type: Types.SET_DATA, payload: { ...data } });
  };
  return (
    <Container>
      <Header clsName="paddingsm" toggleMenu={toggleMenu} />
      <SideMenu value={value.drawMenu} toggleMenu={toggleMenu} />
      <ContentContainer>
        <BlockContainer>
          <div className="title">Terms and Conditions</div>
          <div className="first-title">
            Mortgage Calculator Terms and Conditions
          </div>
          <div className="sub-title">Introduction.</div>
          <div className="content">
            The Terms and Conditions are described and will be administered for
            your use on our website, Mortgage Calculator, accessible at
            www.mortgagecalculator.com.
          </div>
          <div className="content">
            These Terms will apply in their entirety and will affect your use of
            this website. By using this website, you agree to accept all the
            terms and conditions written here. You should not use this website
            if you do not agree to any of these Standard Website Terms and
            Conditions.
          </div>
          <div className="content">
            Intellectual Property Rights.Apart from the content that you own,
            under these Terms, Mortgage Calculator and / or its licensors own
            all intellectual property rights and materials contained in this
            website.
          </div>
          <div className="content">
            You are granted a limited license only for the purpose of viewing
            the material contained on this website.
          </div>
          <div className="sub-title">Restrictions.</div>
          <div className="content">
            It is specifically restricted to all of the following. Publish any
            material from the website in any other medium.Sell, sublicense and /
            or commercialize any material on the website.Perform and / or
            publicly display any material on the website.Using this website in
            any way that is or may be harmful to this website.Use of this
            website contrary to applicable laws and regulations, or in any way
            may cause damage to the website or to any person or business
            entity.Participate in any data extraction, data collection, or any
            other similar activity in connection with this website.Use this
            website to participate in any type of advertising or marketing.
          </div>
          <div className="content">
            Access to you is restricted to certain areas of this website and
            Mortgage Calculator may further restrict access to any area of
            ​​this website, at any time. Any user ID and password you may have
            for this website are confidential and you must also maintain
            confidentiality.
          </div>
          <div className="sub-title">Content.</div>
          <div className="content">
            Your content must be yours and must not invade the rights of third
            parties. Mortgage Calculator reserves the right to remove its
            content from this website at any time without notice.
          </div>
          <div className="sub-title">Limitation of liability.</div>
          <div className="content">
            Mortgage Calculator, including its officers, directors and employees
            shall not be liable for any indirect, consequential or special
            liability arising out of or in any way related to your use of this
            website.
          </div>
          <div className="sub-title">Divisibility.</div>
          <div className="content">
            If any provision of these Terms is determined to be invalid under
            applicable law, those provisions will be removed without affecting
            the remaining provisions hereof.
          </div>
          <div className="sub-title">Variation of terms.</div>
          <div className="content">
            Mortgage Calculator may review these Terms at any time it deems
            appropriate, and by using this website you are expected to review
            them periodically.
          </div>
          <div className="sub-title">Assignment.</div>
          <div className="content">
            Mortgage Calculator may assign, transfer and subcontract your rights
            and / or obligations under these Terms without notice. However, you
            are not allowed to assign, transfer or subcontract any of your
            rights and / or obligations under these Terms.
          </div>
        </BlockContainer>
        <HomePageFooter />
      </ContentContainer>
    </Container>
  );
}

export default TermsPage;
