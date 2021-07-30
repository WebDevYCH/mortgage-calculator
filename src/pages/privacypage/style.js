import styled from "styled-components";

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: 100%;

  & .header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 0px;
  }

  @media (max-width: 930px) {
    overflow: scroll;
  }

  @media (max-width: 700px) {
    & .header {
      display: none;      
    }
  }
`;


export const BlockContainer = styled.div`
  padding: 90px 208px 90px 208px;
  
  background-color: #fcfcfc;
  

  & .title {
    font-family: 'AvenirNext Medium';
    font-size: 20px;
    padding-bottom: 30px;
    text-align: left;
    line-height: 26px;
  }

  & .first-title {
    font-family: 'AvenirNext Medium';
    font-size: 16px;
    padding-bottom: 30px;
    text-align: left;
    line-height: 26px;
  }

  & .sub-title {
    font-family: 'AvenirNext Medium';
    font-size: 16px;
    text-align: left;
    line-height: 26px;
  }

  & .content {
    font-family: 'AvenirNext Regular';
    font-size: 16px;
    padding-bottom: 30px;
    text-align: left;
    line-height: 26px;
  }

  & .last-content {
    font-family: 'AvenirNext Regular';
    font-size: 16px;
    padding-bottom: 0px;
    text-align: left;
    line-height: 26px;
  }

  @media (max-width: 930px) {
    padding: 150px 20px 90px 20px;
  }
`;