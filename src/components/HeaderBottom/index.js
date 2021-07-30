import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #000000;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  & .link {
    font-family: AvenirNext Medium;
    text-decoration: underline;
    :hover{
      opacity: 0.5;
    }
  }

  & .link:hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    display:none;
  }
`;

function HeaderBottom() {
  return (
    <Container>
      The 1st platform for mortgage calculator in U.S. Start with our mortgage
      calculator to get the best options. &nbsp;
      <div className="link">Mortgage Calculator</div>
    </Container>
  );
}

export default HeaderBottom;
