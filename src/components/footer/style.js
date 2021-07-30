import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FCFCFC;
  height: 77px;
  min-height: 77px;
  width: 100%;  
  border-top: 1px solid #020205;
  position: fixed;
  z-index:1000;
    bottom:0;

  & .exit-btn,
  .next-btn {
    cursor: pointer;
  }

  & .next-btn {
      color: #FCFCFC;
      background-color: #000;
      padding: 7px 25px;
      border-radius: 5px;
  }

  @media (max-width: 930px) {
    padding: 0px 20px;
  }

  @media (max-width: 700px) {
    padding: 0px 20px;
    position: fixed;
    bottom:0;
  }
`;
