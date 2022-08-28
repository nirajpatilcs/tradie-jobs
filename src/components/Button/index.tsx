import React from "react";
import './index.css';

interface Props {
    name: string;
    handleClick?:  () => void; 
}

const Button: React.FC<Props> = (props) => {
    return (
        <button type="submit" onClick={props.handleClick}> {props.name} </button>
    ) 
}

export default Button; 