import React from 'react';
import JobCard from './components/JobCard';

function App() {
  return (
    <div className="App">
      <JobCard id={'1'} name={'niraj'} contact={'022345678'} status={'actives'} time={'10am'}/> 
    </div>
  );
}

export default App;
