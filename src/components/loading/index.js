import React from "react";
import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/core";
import {LoadingContainer} from './style'

const override = css`
  border-radius: 5px;
  
`;

function Loading() {
  return (
    <LoadingContainer>
      <div className='title'>Loading...</div>
    <BarLoader
      css={override}
      height="5px"
      width={250}
      color={"#37383C"}
      loading={true}
    />
    </LoadingContainer>
  );
}

export default Loading;
