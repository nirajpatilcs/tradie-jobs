import React, { useState } from "react";
import Button from "../Button";
import EditJobModal from "../EditJobModal";
import JobDetailsModal from "../JobDetailsModal";
import './index.css'

interface Props {
    id: number;
    name: string;
    contact: string; 
    status: string; 
    date?: Date; 
    time: string, 
}

const JobCard: React.FC<Props> = (props) => {
    const [showEditJob, setShowEditJob] = useState(false); 
    const [showJobDetails, setShowJobDetails] = useState(false); 
    const [statusOptionValue, setStatusOptionValue] = useState(props.status); // ability to edit status of job
    const [notes, setNotes] = useState<string[]>([]); 


    //show edit job modal
    const toggleEditModal = () => {
        setShowEditJob(curr => !curr); 
    }

    //show notes and job details
    const toggleJobDetailModal = ()  => {
        setShowJobDetails(curr => !curr); 
    }

    const submitForm = (status: string) => {
        setStatusOptionValue(status); 
        toggleEditModal(); 
    }

    return (
        <div className="job-card">
            <div className="job-card-content">
                <p className="job-id"> { props.id  ? '0'+props.id : props.id } </p>
                <p className="job-date-time">Job Created: {props.time} </p>
                <div className="job-client">
                    <p className="job-name">{props.name} </p>
                    <p className="job-contact"> {props.contact} </p>
                </div>
                <p className="job-status"> {statusOptionValue} </p>
            </div>

            <div className="job-actions">
                <Button name ='view job/notes' handleClick={toggleJobDetailModal} />
                <Button name ='edit job' handleClick={toggleEditModal}/>
            </div>

            {showEditJob && <EditJobModal submitForm={submitForm}/>}
            {showJobDetails && <JobDetailsModal jobContent = {props} notes={notes} setNotes={setNotes}/>}
            
        </div>

    )
}

export default JobCard; 
