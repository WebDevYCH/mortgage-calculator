 import styled from "styled-components";

export const BlockContainer = styled.div`
  padding: 60px 207px 150px 207px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;   
 

  & .block {
    width: 47%;

    & .label_input {
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      $ .input-box {
        color:black !important;
      }
    }

    & .btngroup {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 930px) {
    padding: 60px 20px 60px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & .block {
      width: 100%;
      margin-bottom: 2vw;

      .btngroup {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 30px;
      }
    }
  }
`;
