import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 930px) {
    height: fit-content;
  }
  media (max-width: 445px){
    width:200px;
  }

  .bottom-fix{
    width:100%;
    position: fixed;
    bottom: 0px;
  }

  @media(max-width: 930px){
    .bottom-fix{
      position: inherit;
    }
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: 100%;
  
  // padding-bottom: 77px;

  @media (max-width: 930px) {
    overflow: scroll;
    padding-top: 60px;
    padding-bottom: 77px;
  }

  @media (max-width: 700px) {
    padding-top: 60px;
    padding-bottom: 77px;
  }
`;

export const TitleContainer = styled.div`
  padding: 90px 208px 0 208px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & .label {
    float: left;
    font-size: 24px;
    text-align: left;
    max-width: 482px;
    // width: 40%;
    font-family: 'AvenirNext Medium' !important;
    font-weight: 600;
    margin:0;
  }

  & .content {
    float: left;
    font-size: 16px;
    text-align: left;
    max-width: 482px;
    padding-top:15px;
    font-family: 'AvenirNext Regular' !important;
    margin:0;
  }

  @media (max-width: 930px) {
    padding: 64px 20px 0 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    & .label {
      float: left;
      font-size: 24px;
      text-align: left;
      width: 100%;
    }
  }
`;
