import React from "react"
import style from "styled-components"

const StyledInput = style.input`
    padding:10px;
    /*margin:10px 0;*/
    /*border-color: ${(props) => props.success ? 'green' : "unset" }; */
    border-color: ${({success,warning,danger}) => success ? 'green' : warning ? 'orange' : danger ? 'red' : "unset" };
    width:100%;
    box-sizing: border-box;
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
const InputWrapper = style.div`
    width: 100%;
    margin: 10px 0;
`

function Input({ success, warning, danger, label, message, ...props }) {
    return(
    	<InputWrapper>
    		{label && <Label>{label}</Label>}
       		<StyledInput success={success} warning={warning} danger={danger} {...props} />
    		{message && <Message success={success} warning={warning} danger={danger}>{message}</Message>}
        </InputWrapper>
    );
}

export default Input;
