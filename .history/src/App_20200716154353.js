import React from 'react';
import moment from 'moment';
import List from './components/List';
import getWeekDays from './utils/getWeekDays';

function App() {
  const weekDays = getWeekDays();
  return (
    <div className="App">
      {weekDays.map((day) => (
        <List date={day}></List>
      ))}
    </div>
  );
}

export default App;
