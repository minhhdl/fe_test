import React from 'react';
import moment from 'moment';
import List from './components/List';
import getWeekDays from './utils/getWeekDays';

function App() {
  console.log(getWeekDays)());
  return (
    <div className="App">
      <List></List>
    </div>
  );
}

export default App;
