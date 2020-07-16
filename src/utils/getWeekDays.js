import moment from 'moment';

const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const getWeekDays = () => {
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    weekDays.push(
      moment().day(week[i]).hour(0).minute(0).second(0).millisecond(0),
    );
  }
  return weekDays;
};

export default getWeekDays;
