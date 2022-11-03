import BackButton from "components/common/BackButton";
import * as S from "./Header.style";

function Header({ title, header }) {
  return (
    <S.Wrapper>
      <S.HeaderStyle>
        {!header && <BackButton />}
        {title}
      </S.HeaderStyle>
    </S.Wrapper>
  );
}

export default Header;
