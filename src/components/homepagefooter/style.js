import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: #000000;
  padding: 21px 208px;
  justify-content: space-between;

  & .left {
    float: left;
    display: flex;
    flex-direction: row;
  }
  
  & .right {
    float: right;
    display: flex;
    flex-direction: row;
  }

  & .footerlink {
    padding: 0 10px;
    font-size: 14px;
    color: #ffffff;
  }

  & .footerlinkfirst {
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
  }

  & #bold{
    font-family: AvenirNext Medium;
    cursor: pointer;
    : hover{
      opacity: 0.5;
    }
  }
  & .footerlink:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  @media (max-width: 1200px){
    padding: 21px 20px;
  }
  @media (max-width: 930px) {
    text-align: left;
    flex-direction: column;
    padding: 30px 20px;
    height: 215px;

    & .left {
      display: flex;
      flex-direction: column;
      height: 25%;
      justify-content: space-around;
    }

    & .right {
      display: flex;
      flex-direction: column;
      height: 75%;
      justify-content: space-around;
    }

    & .footerlink {
      padding: 15px 0px;
      font-size: 14px;
      color: #ffffff;
      padding: 0;
    }

    & .footerlinkfirst {
      font-size: 14px;
      font-weight: 500;
      color: #ffffff;
    }
  }
`;
