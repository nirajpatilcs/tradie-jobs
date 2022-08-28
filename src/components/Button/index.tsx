import React from "react";
import './index.css';

interface Props {
    name: string; 
}

const Button: React.FC<Props> = (props) => {
    return (
        <button> {props.name} </button>
    ) 
}

export default Button; 