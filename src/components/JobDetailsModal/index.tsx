import React, { useRef, useState } from "react";
import Button from "../Button";
import './index.css'

interface job {
    id: number;
    name: string;
    contact: string; 
    status: string; 
    time: Date, 
}

interface Props {
    jobContent: job; 
    notes: string[]; 
    setNotes: (params: any) => any; 
    toggle: () => void; 
}

const JobDetailsModal: React.FC<Props> = (props) => {

    const inputNoteRef = useRef<HTMLInputElement>(null); 
    const [newNote, setNewNote] = useState<string>(''); 
    const [editMode, setEditMode ] = useState(false); 
    const [updateNote, setUpdateNote] = useState<number>(0); 

    const editNote = (i: number) => {
        inputNoteRef.current?.focus(); 
        setNewNote(props.notes[i]); 
        setEditMode(true); 
        setUpdateNote(i); 
    }

    const handleUpdate = () => {

        //update notes 
        let newNotes = [...props.notes]; 
        newNotes[updateNote] = newNote; 
        props.setNotes(newNotes); 

        //clear input field 
        setNewNote(''); 
        setEditMode(false); 
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
                <button className="close-btn" onClick={props.toggle}>x</button>
                <div className="job-details">
                    <h3>Job Details</h3>
                    <p className="jobid"><span> ID: </span> {props.jobContent.id}</p>
                    <p className="jobname"><span> Name:  </span>{props.jobContent.name}</p>
                    <p className="jobcontact"><span>  Contact:</span> {props.jobContent.contact} </p>
                    <p className="jobcurrstatus"><span>Current Status: </span>  {props.jobContent.status}</p>
                    <p className="jobdate"> <span>Creation Date/Time: </span> {props.jobContent.time.toString()} </p> 
                </div>

                <div className="job-notes">
                    <div className="curr-notes">
                        <h2> Notes</h2> 
                        {displayNotes}
                    </div>

                    <input type='text' value={newNote} onChange={handleChange} ref={inputNoteRef} ></input> 
                    {editMode ? <Button name="Update" handleClick={handleUpdate}/> : <Button name="Add" handleClick={onClick}/> }

                </div>

                
            </div> 
        </div> 
    )
}

export default JobDetailsModal; 