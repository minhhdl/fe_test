import moment from 'moment';

const week = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const getWeekDays = () => {
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    console.log(moment().weekday(week[i]).format('ddd'));
    weekDays.push(moment().weekday(week[i]));
  }
  return weekDays;
};

export default getWeekDays;
