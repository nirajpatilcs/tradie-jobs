import React, { useRef, useState } from "react";
import Button from "../Button";
import './index.css'

interface job {
    id: number;
    name: string;
    contact: string; 
    status: string; 
    date?: Date; 
    time: string, 
}

interface Props {
    jobContent: job; 
    notes: string[]; 
    setNotes: (params: any) => any; 
}

const JobDetailsModal: React.FC<Props> = (props) => {

    const inputNoteRef = useRef<HTMLInputElement>(null); 
    const [newNote, setNewNote] = useState<string>(''); 

    const editNote = (i: number) => {
        console.log(i); 
    }

    //map all the notes 
    let displayNotes; 
    if(props.notes.length === 0 ) {
        displayNotes = <p>No notes</p>; 
    } else {
        displayNotes = props.notes.map((note, i ) => {
            return (
                <div key={i} className="job-note">
                    <p > {note} </p>
                    <button onClick={()=>editNote(i)}>edit</button>
                </div>
                
            )
        })
    }
    
    const onClick = () => {
        const appendNotes = props.notes.concat(newNote); 
        props.setNotes(appendNotes)
        setNewNote(''); 
        
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewNote(e.target.value); 
    }

    return (
        <div className="modal ">
            <div className="modal-content job-details-modal">
                <div className="close-btn">x</div>
                <div className="job-details">
                    <h3>Job Details</h3>
                    <p className="jobid"><span> ID: </span> {props.jobContent.id}</p>
                    <p className="jobname"><span> Name:  </span>{props.jobContent.name}</p>
                    <p className="jobcontact"><span>  Contact:</span> {props.jobContent.contact} </p>
                    <p className="jobcurrstatus"><span>Current Status: </span>  {props.jobContent.status}</p>
                    <p className="jobdate"> <span>Creation Date/Time: </span> {props.jobContent.time} </p> 
                </div>

                <div className="job-notes">
                    <div className="curr-notes">
                        <h2> Notes</h2> 
                        {displayNotes}
                    </div>

                    <input type='text' value={newNote} onChange={handleChange} ref={inputNoteRef} ></input> 
                    <Button name="Add" handleClick={onClick}></Button>

                </div>

                
            </div> 
        </div> 
    )
}

export default JobDetailsModal; 