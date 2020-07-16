import moment from 'moment';

const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const getWeekDays = () => {
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    weekDays.push(moment().day(week[i]));
  }
  return weekDays;
};

export default getWeekDays;
