import * as S from "./CarDetail.style";
import DateParse from "utils/dateParse";

const CarDetailItem = ({ name, description, date, amount }) => {
  return (
    <S.TextWrapper>
      <S.AttributeSubCategory>{name}</S.AttributeSubCategory>
      {description && <S.SubAttribute>{description}</S.SubAttribute>}
      {date && (
        <S.SubAttribute>{`${DateParse(date).month}월 ${
          DateParse(date).date
        }일 (${DateParse(date).day}) 부터`}</S.SubAttribute>
      )}
      {amount && (
        <S.SubAttribute>월 {amount.toLocaleString("ko-KR")} 원</S.SubAttribute>
      )}
    </S.TextWrapper>
  );
};

export default CarDetailItem;
