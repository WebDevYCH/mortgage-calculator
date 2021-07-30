import styled from "styled-components";
import { backImg } from "../../assets";

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width:100% !important;


  & .header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 0px;
  }


  @media (max-width: 900px) {
    overflow: scroll;
    padding-top: 60px;
    & .header {
      display: none;      
    }
  }
`;

export const BlockContainer = styled.div.attrs((props) => ({

}))`
  margin-top: -60px;
  padding: 172px 208px;
  color: #ffffff;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)),url(${backImg});
  background-repeat: no-repeat;
  background-size: cover;

  .block{
    max-width: 500px;
    width: 47%;
    float: left;
    text-align: left;

    .title{
      font-family: AvenirNext Medium;
      font-size: 24px;
      font-weight: 600;
    }

    .content{
      padding:15px 0;
      font-family: AvenirNext Regular;
      font-size: 16px;
    }

    .btn-group{
      padding-top: 0px;
    }

    .privacy{
      padding-top: 15px;
      font-family: AvenirNext Regular;
      font-size: 10px;
    }
  }

  @media(max-width: 1024px){
    .block{
      width: 100%
    }
  }

  @media(max-width: 930px){
  
    padding: 134px 20px;

    .block{
      .title{
        font-family: AvenirNext DemiBold;
        font-size: 20px;
        font-weight: 600;
      }
  
      .content{
        padding:15px 0;
        font-family: AvenirNext Regular;
        font-size: 16px;
      }
  
      .btn-group{
        padding-top: 0px;
      }
  
      .privacy{
        display:none;
      }

      .btn-group{
        flex-direction: column;
      }
    }
  }
`;

export const BlockContainerSecond = styled.div`
  padding: 90px 208px;
  color: #000000;
  background-color: #d4d4d4;

  .block{
    max-width: 500px;
    width: 47%;
    float: left;
    text-align: left;

    .title{
      font-family: AvenirNext Medium;
      font-size: 20px;
    }

    .content{
      padding-top: 15px;
      font-size: 16px;
    }
  }
  @media(max-width: 930px){
    .block{
      width: 100%;
    }
  
    padding: 60px 20px 0px 20px;

    .block{
      .title{
        font-size: 18px;
      }
  
      .content{
        padding-top: 17px;
        font-size: 16px;
      }
    }
  }
`;

export const BlockContainerThird = styled.div`
    padding: 0px 208px 90px 208px;
    color: #000000;
    display: flex;
    justify-content: space-between;
    background-color: #d4d4d4;
    .block{
      max-width: 500px;
      width: 47%;
      float: left;
      text-align: left;

      .title{
        padding:23px 0;
        font-family: AvenirNext Medium;
        font-size: 20px;
      }

      .content{
        padding-top: 15px;
        font-size: 16px;
      }
    }
    @media(max-width: 1024px){
      flex-direction: column;
      .block{
        padding-top: 30px;
        width: 100%
      }
    }
    @media(max-width: 930px){

      padding: 0px 20px 0px 20px;
      .block{
        padding-top:60px;
        .title{
          padding:23px 0 0 0;
          font-size: 18px;
        }

        #contentId{
          padding-bottom: 60px;
        }
      }
    }
`;

export const BlockSecond = styled.div`
  width: 38vw;
  display: flex;
  justify-content: space-between;
  padding-top: 67px;

  & .content-container {
    width: 33vw;
    padding-left: 40px;

    & .title,
    .content {
      text-align: left;
    }

    & .title {
      font-size: 24px;
      font-family: "AvenirNext Medium";
      padding-bottom: 38px;
    }

    & .content {
      font-size: 16px;
      line-height: 2rem;
    }

    .avatarIcon{
      width: 41px;
      height: 37px;
    }
  }

`;

export const CircleIcon = styled.div`
  border-radius: 50px;

`;



