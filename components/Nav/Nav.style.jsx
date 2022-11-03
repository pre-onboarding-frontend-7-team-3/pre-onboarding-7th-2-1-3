import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;

  max-width: 450px;

  padding: 6px 0;
  gap: 10px;

  border-bottom: 1px solid ${(props) => props.theme.BLACK};

  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 400px) {
    justify-content: flex-start;
  }
`;

const NavItemStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  z-index: 10;
`;

const NavButton = styled.button`
  width: 100%;
  height: 27px;

  padding: 5px 18px;

  border-radius: 62px;

  font-size: 14px;
  font-weight: 700;
  line-height: 17px;

  ${({ theme, selectedCategory, idx }) =>
    css`
      background-color: ${idx === selectedCategory ? theme.BLACK : theme.GRAY};
      color: ${idx === selectedCategory ? theme.WHITE : theme.BLACK};
    `}

  cursor: pointer;
`;

export { Wrapper, NavWrapper, NavItemStyle, NavButton };
