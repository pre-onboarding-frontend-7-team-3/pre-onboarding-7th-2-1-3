import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 98%;
  max-width: 450px;
  height: 120px;

  border-bottom: 1px solid black;
  background-color: ${(props) => props.theme.WHITE};

  cursor: pointer;
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
`;

export const AttributeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 170px;

  gap: 6px;
`;

export const MainAttribute = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;

  font-size: 14px;
  font-weight: 700;
`;

export const SubAttribute = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;

  font-size: 12px;
  font-weight: 500;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  /* margin-right: -3vw; */
  /* border: 1px solid black; */
  width: 160px;
  height: 100%;
  height: 90px;
  background-image: ${(props) => `url(${props.url})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: -10%;
  top: -12%;
`;
