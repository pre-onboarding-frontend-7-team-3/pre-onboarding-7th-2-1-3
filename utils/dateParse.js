const DateParse = (date) => {
  const NEW_DATE = new Date(date);
  let day = ["일", "월", "화", "수", "목", "금", "토"];

  return {
    month: Number(NEW_DATE.getMonth()) + 1,
    date: Number(NEW_DATE.getDate()),
    day: day[NEW_DATE.getDay()],
  };
};

export default DateParse;
