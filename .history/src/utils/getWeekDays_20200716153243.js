import moment from 'moment';

const getWeekDays = () => {
  const weekDays = moment.weekdaysShort();
  return weekDays;
};

export default getWeekDays;
