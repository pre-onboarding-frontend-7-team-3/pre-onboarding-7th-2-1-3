import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-height: 800px;

  overflow-y: scroll;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 95%;
  max-width: 450px;

  background-color: ${(props) => props.theme.WHITE};
`;

export const ImageWrapper = styled.div`
  width: 100vw;
  height: 200px;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const OverviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 90px;

  padding: 10px 0;
`;

export const OverviewStart = styled.div``;

export const OverviewEnd = styled.div`
  display: flex;
  align-items: flex-end;

  font-size: 17px;
  font-weight: 400;
  line-height: 21px;
`;

export const BrandText = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;

export const NameText = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
`;

export const AttributeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100px;
  width: 100%;
`;

export const AttributeCategory = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  padding: 15px;

  font-size: 17px;
  font-weight: 700;
  line-height: 21px;

  color: ${(props) => props.theme.WHITE};
  background-color: ${(props) => props.theme.BLUE};
`;

export const TextWrapper = styled.div`
  display: flex;

  width: 100%;

  padding: 10px;
`;

export const AttributeSubCategory = styled.div`
  display: flex;
  align-content: center;

  width: 100%;

  font-size: 17px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;

export const SubAttribute = styled(AttributeSubCategory)`
  justify-content: flex-end;

  font-family: Inter;
  font-size: 17px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: right;
`;
