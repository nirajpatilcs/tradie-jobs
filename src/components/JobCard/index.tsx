import React from "react";

interface Props {
    id: string;
    name: string;
    contact: string; 
    status: string; 
    date?: Date; 
    time: string, 
}


const JobCard: React.FC<Props> = (props) => {
 return (
    <div>
       {props.name} 
       {props.status}
    </div>
 )
}

export default JobCard; 

//unique job identifier 
// status: 'scheduled' , 'active, 'invoicing' , 'to priced' , 'completed' 
// creation date and time
// name, contact details 
// make notes fo rthe job, trade can have multiple notes 