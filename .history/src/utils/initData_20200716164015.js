import generateSafeId from './generateSafeId';

const initialData = {
  1: [
    {
      id: generateSafeId(),
      title: 'Chest Day - with Arm exercises',
      exercises: [
        {
          id: generateSafeId(),
          title: 'Bench Press Medium Grip',
          sets: 3,
          setsDetail: '50 lb x 5, 60 lb x 5, 70 lb x 5',
        },
      ],
    },
  ],
  2: [
    {
      id: generateSafeId(),
      title: 'Leg Day',
      exercises: [],
    },
    {
      id: generateSafeId(),
      title: 'Arm Day',
      exercises: [],
    },
  ],
};

export default (weekDays) => {
  const data = {};
  weekDays.map((day, index) => {
    data[day.format('YYYY-MM-DD')] = initialData[index] || [];
  });
};
