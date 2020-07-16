import React from 'react';
import moment from 'moment';
import List from './components/List';
import getWeekDays from './utils/getWeekDays';

function App() {
  console.log(moment().weekdays().format('DD MM YYYY'));
  return (
    <div className="App">
      <List></List>
    </div>
  );
}

export default App;
