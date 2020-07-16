import moment from 'moment';

const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const getWeekDays = () => {
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    console.log(moment().weekday(week[i]).format('ddd'));
    weekDays.push(moment().weekday(week[i]));
  }
  return weekDays;
};

export default getWeekDays;
