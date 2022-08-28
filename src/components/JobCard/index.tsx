import React, { useState } from "react";
import Button from "../Button";
import EditJobModal from "../EditJobModal";
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
    const [statusOptionValue, setStatusOptionValue] = useState(props.status); // ability to edit status of job

    //show edit job modal; 
    function toggleEditModal() {
        setShowEditJob(curr => !curr); 
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
                <Button name ='notes' />
                <Button name ='edit job' handleClick={toggleEditModal}/>
            </div>

            {showEditJob && <EditJobModal submitForm={submitForm}/>}
            
        </div>

    )
}

export default JobCard; 

//unique job identifier 
// status: 'scheduled' , 'active, 'invoicing' , 'to priced' , 'completed' 
// creation date and time
// name, contact details 
// make notes fo rthe job, trade can have multiple notes 