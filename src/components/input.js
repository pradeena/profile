import React from "react"
import style from "styled-components"

const Input = style.input`
    padding:10px;
    /*margin:10px 0;*/
    /*border-color: ${(props) => props.success ? 'green' : "none" }; */
    border-color: ${({success,warning,danger}) => success ? 'green' : warning ? 'orange' : danger ? 'red' : "none" };
    width:100%;
`
const Label = style.p`
	color: #333;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
`
const Message = style.p`
	color: ${({success,warning,danger}) => success ? 'green' : warning ? 'orange' : danger ? 'red' : "black" };
`

function Text({ type, placeholder, value, success, warning, danger, label, message, ...props }) {
    return(
    	<div>
    		{label && <Label>{label}</Label>}
       		<Input type={type} placeholder={placeholder} value={value} success={success} warning={warning} danger={danger} {...props} />
    		{message && <Message success={success} warning={warning} danger={danger}>{message}</Message>}
        </div>
    );
}

export {Text}
