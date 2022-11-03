import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 800px;
`;

const ErrorComponent = () => {
  return <Wrapper>404 | 페이지를 찾을 수 없습니다.</Wrapper>;
};

export default ErrorComponent;
