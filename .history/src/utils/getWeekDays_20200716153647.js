import moment from 'moment';

const getWeekDays = () => {
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    weekDays.push(moment().weekday(i));
  }
  return weekDays;
};

export default getWeekDays;
