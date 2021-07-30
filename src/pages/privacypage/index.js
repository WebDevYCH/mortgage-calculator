import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../styles";
import * as Types from "../../state/types";
import SideMenu from "../../components/sidemenu";
import { ContentContainer, BlockContainer } from "./style";
import Header from "../../components/header";
import HeaderBottom from "../../components/HeaderBottom";
import HomePageFooter from '../../components/homepagefooter'

import { animateScroll as scroll } from "react-scroll";

function PrivacyPage() {
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
      <Header clsName ='paddingsm' toggleMenu={toggleMenu} />
      <SideMenu value={value.drawMenu} toggleMenu={toggleMenu} />
      <ContentContainer>
        <BlockContainer>
          <div className="title">Privacy Policy</div>
          <div className="first-title">Mortgage Calculator Privacy Policy.</div>
          <div className="content">
            Mortgage Calculator, is accessible from www.mortgagecalculator.com,
            one of our main priorities is the privacy of our visitors. This
            Privacy Policy document contains the types of information collected,
            how it is recorded, and how we use it.
          </div>
          <div className="content">
            If you have additional questions or need more information about our
            Privacy Policy, please do not hesitate to contact us.
          </div>
          <div className="content">
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website regarding the information they
            shared and / or collected in the Mortgage Calculator. This policy
            does not apply to any information collected offline or through
            channels other than this website.
          </div>
          <div className="sub-title">Consent.</div>
          <div className="content">
            By using our website, you agree to our Privacy Policy and agree to
            its terms. For our Terms and Conditions, visit the Terms and
            Conditions Generator.
          </div>
          <div className="sub-title">Information We Collect.</div>
          <div className="content">
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the time we ask you to provide such information.
          </div>
          <div className="content">
            If you contact us directly, we may receive additional information
            about you, such as your name, email address, telephone number, the
            content of the message and / or attachments that you may send us,
            and any other information that you choose to provide. When you sign
            up for an account, we may ask for your contact information,
            including items such as name, company name, address, email address,
            and phone number.
          </div>
          <div className="sub-title">How We Use Your Information.</div>
          <div className="content">
            We use the information we collect in various ways, including to:{" "}
            <br />
            - Provide, operate and maintain our website.
            <br />
            - Improve, personalize and expand our website.
            <br />
            - Understand and analyze how you use our website.
            <br />
            - Develop new products, services, features and functionalities.
            <br />
            - Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information related to our website, for
            promotional and marketing purposes.
            <br />
            - Send you emails.
            <br />
            - Find and prevent fraud.
            <br />- Personalized advertising and commercial proposals of third
            parties that you have requested.
          </div>
          <div className="sub-title">Log files.</div>
          <div className="content">
            Mortgage Calculator follows a standard procedure for using log
            files. These files record visitors when they visit our website. All
            hosting companies do this and are part of the analysis of the
            hosting services. The information collected by the log files
            includes Internet Protocol (IP) addresses, browser type, Internet
            service provider (ISP), date and time stamp, referring / exit pages,
            and possibly the number of clicks. These are not linked to any
            information that is personally identifiable. The purpose of the
            information is to analyze trends, administer the site, track the
            movement of users on the website, and collect demographic
            information.
          </div>
          <div className="sub-title">Cookies</div>
          <div className="content">
            Mortgage Calculator uses 'cookies'. These cookies are used to store
            information, including visitor preferences and the website pages
            that the visitor accessed or visited. The information is used to
            optimize the user experience by customizing the content of our
            website based on the type of visitor's browser and / or other
            information.
          </div>
          <div className="sub-title">Advertising partner privacy policies.</div>
          <div className="content">
            You can refer to this list to find the Privacy Policy for each of
            Mortgage Calculator's advertising partners.
          </div>
          <div className="content">
            Third-party ad servers or ad networks use technologies such as
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear in Mortgage
            Calculator, which are sent directly to users' browser. They
            automatically receive your IP address when this happens. These
            technologies are used to measure the effectiveness of your
            advertising campaigns and / or to personalize the advertising
            content that you see on the websites that you visit.
          </div>
          <div className="content">
            Please note that Mortgage Calculator does not have access to or
            control over these cookies used by third party advertisers.
          </div>
          <div className="content">
            Third party privacy policies.The Mortgage Calculator Privacy Policy
            does not apply to other advertisers or websites. Therefore, we
            recommend that you consult the respective Privacy Policies of these
            third-party ad servers for more detailed information. You can
            include your practices and instructions on how to opt out of certain
            options.
          </div>
          <div className="last-content">
            You can choose to disable cookies through your individual browser
            options. For more detailed information on managing cookies with
            specific web browsers, it can be found on the browsers' respective
            websites.
          </div>
        </BlockContainer>
        <HomePageFooter />
      </ContentContainer>
    </Container>
  );
}

export default PrivacyPage;
