import React from "react";
import Button from "../Button";
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
 return (
    <div className="job-card">
        <div className="job-card-content">
            <p className="job-id"> { props.id  ? '0'+props.id : props.id } </p>
            <p className="job-date-time">Job Created: {props.time} </p>
            <div className="job-client">
                <p className="job-name">{props.name} </p>
                <p className="job-contact"> {props.contact} </p>
            </div>
            <p className="job-status"> {props.status} </p>
        </div>

        <div className="job-actions">
            <Button name ='notes' />
            <Button name ='edit job' />
        </div>
        
        
    </div>

 )
}

export default JobCard; 

//unique job identifier 
// status: 'scheduled' , 'active, 'invoicing' , 'to priced' , 'completed' 
// creation date and time
// name, contact details 
// make notes fo rthe job, trade can have multiple notes 