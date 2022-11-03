import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const HeaderStyle = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 450px;
  height: 3rem;

  border-bottom: 1px solid black;
  font-size: 17px;
  font-weight: 700;
  line-height: 21;
  color: ${(props) => props.theme.BLACK};
`;

export { Wrapper, HeaderStyle };
