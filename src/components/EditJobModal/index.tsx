import React, { useState } from "react";
import Button from "../Button";
import './index.css'

interface Props {
    submitForm: (status: string) => void; 
}

const EditJobModal: React.FC<Props> = (props) => {
    const [newStatusVal, setNewStatusVal] = useState<string>("Scheduled"); 

    //gets new status value form dropdown 
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNewStatusVal(e.target.value); 
        console.log(e.target.value); 
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <select className="status-select" name="statusList" id="statusList" onChange={onChange}>
                    <option value="scheduled">Scheduled</option>
                    <option value="active">Active</option>
                    <option value="invoicing">Invoicing</option>
                    <option value="to priced">to priced</option>
                    <option value="completed">completed</option>
                </select>
                <Button name={'submit'} handleClick={()=>props.submitForm(newStatusVal)}/>
            </div>
        </div>

    )
}

export default EditJobModal; 