import styled from 'styled-components';

export const ModalContainer = styled.div`
    max-width: 450px;
    text-align: left;
    display: flex;
    flex-direction: column;
    .sideMenuBtnClose{
        padding:23px 14px 0 0; 
        .closeBtn{
            float: right;
            width: 20px;
            height: 20px;
        }
        .closeBtn:hover{
            opacity: 0.5;
        }
    }

    .modalDialogTitle{
        padding: 30px 30px 0 30px !important;
        font-family: AvenirNext Medium;
        font-size: 20px;
        font-family: 
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000000;
        padding:0px 0px 30px 0px;
    }

    .modalcontent{
        font-family: AvenirNext Regular;
        font-size: 16px;
        padding:15px 30px 0 30px;
    }

    .modalinput{
        padding:15px 30px 0 30px;
        font-size: 16px;
        font-family: AvenirNext Regular;
    }

    .confirmBtn{
        padding: 30px 30px 60px 30px;
    }
`