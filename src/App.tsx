import React, { useEffect, useState } from 'react';
import JobCard from './components/JobCard';
import jobData from './assets/jobsData'; 

function App() {

  let jobs = jobData; 
  const [sort, setSort] = useState<string>('ID'); 

  //gets sorting order
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value); 
  }

  let displayJobs; 

  const updateDisplayJobs = () => {
    if(sort === 'dateAsc') {
      jobs = jobs.sort(
        (jobA, jobB) => Number(jobA.date) - Number(jobB.date),
      ); 
    } else if(sort === 'dateDec') {
      jobs = jobs.sort(
        (jobA, jobB) => Number(jobB.date) - Number(jobA.date),
      );      
    } else {
      jobs = jobs.sort(
        (jobA, jobB) => Number(jobA.id) - Number(jobB.id),
      );
    } 

    displayJobs = jobs.map((job, key) => {
    return (
      <JobCard key={key} id={job.id} name={job.name} contact={job.contact} status={job.status} time={job.date}/>
    )
  })
  }

  updateDisplayJobs(); 
  
  useEffect(() => {
    updateDisplayJobs(); 
  }, [sort])



  return (
    <div className="App">
      <h1 className='title'>Welcome back</h1>
      <div className="nav"> 
        <p>sort</p>
        <select name="sort" id="sort" onChange={onChange}>
          <option value="id" selected>ID</option>
          <option value="dateAsc">Date ascending </option>
          <option value="dateDec">Date descending </option>
        </select>
      
      </div>
      <div className="jobs-container">
        {displayJobs}
      </div>
       
    </div>
  );
}

export default App;
