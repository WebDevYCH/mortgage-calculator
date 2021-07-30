import styled from "styled-components";
import { siderImg1, siderImg3 } from "../../assets";

export const SiderBarHeader = styled.div`
    min-height: 50px;
    position: fixed;
    width: 100%;
    background-color: white;
    padding: 15px 18px 15px 22.2px;
    justify-content: space-between;
    & .closeBtn{
        float: right;
        width: 20px;
        : hover{
            opacity: 0.5;
        }
    }
    @media(min-width: 450px){
        max-width: 440px;
    }
`;

export const SiderBarBody = styled.div`

    .block{
        cursor: pointer;
        padding:30px 30px;
        width: 100%;
        float: left;
        text-align: left;

        .title{
            padding: 15px 0 0 0;
            font-family: AvenirNext Medium;
            font-size: 20px;
            font-weight: 600;
        }

        .content{
            padding:15px 0 0 0;
            font-family: AvenirNext Regular;
            font-size: 16px;
        }
    }

    .block:hover{
        opacity: 0.5;
    }
    #firstblock{
        margin-top:50px;
    }
    #secondblock{
        padding-top: 34px;
    }
`;

export const CircleIcon = styled.div`
  border-radius: 50px;
`;