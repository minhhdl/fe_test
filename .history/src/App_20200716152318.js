import React from 'react';
import moment from 'moment';
import List from 'components/List';

function App() {
  console.log(moment().weekday());
  return (
    <div className="App">
      <List></List>
    </div>
  );
}

export default App;
