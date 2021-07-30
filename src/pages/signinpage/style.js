import styled from "styled-components";

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16px;
  padding: 90px 208px;
  width: 100%;
  color: #000000;
  background-color: #d4d4d4;

  & .content {
    padding: 0 0 60px 0;
    justify-content: space-between;
    display: flex;
    text-align: left;

    & .block{
      max-width: 500px;
      width: 47%;

      .title{
        font-size: 56px;
        color: #a8a8a8;
        font-family: AvenirNext Bold;
      }

      .smtitle{
        font-size: 20px;
        font-family: AvenirNext Medium;
      }

      .textcontent{
        padding:15px 0 30px 0;
        font-size: 16px;
        font-family: AvenirNext Regular;

        & a {
          text-decoration: underline;
          cursor: pointer;
        }
      }
      
      .labelinput{
        padding-top: 30px;
      }

      .loginBtn{
        padding-top: 60px;
      }
    }
  }  

  @media(max-width: 930px){
    flex-direction: column;
    padding: 90px 20px;
  
    & .content {
      padding: 0 0 60px 0;
      justify-content: space-between;
      display: block;
      text-align: left;
  
      & .block{
        max-width: 900px;
        width: 100%;
        .title{
          font-size: 40px;
          color: #a8a8a8;
          font-family: AvenirNext Bold;
        }
  
        .smtitle{
          font-size: 20px;
          font-family: AvenirNext Medium;
        }
  
        .textcontent{
          padding:15px 0 30px 0;
          font-size: 16px;
          font-family: AvenirNext Regular;
        }
        
        .labelinput{
          padding-top: 30px;
        }
  
        .loginBtn{
          margin-bottom: -60px;
          padding-top: 60px;
        }
      }
  }

  @media (max-width: 900px) {
    padding: 150px 20px;
  }
`;
