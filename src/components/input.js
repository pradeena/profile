import React from "react"
import style from "styled-components"

const StyledInput = style.input`
    padding:10px;
    border-color: ${({success,warning,danger}) => success ? 'green' : warning ? 'orange' : danger ? 'red' : "#f0f0f0" };
    width:100%;
    box-sizing: border-box;
    border-radius: 0.3rem;
    color: #333;
    font-size: 1rem;
    border-width: 1px;
    border-style: solid;

`
const Label = style.p`
	color: #838383;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 8px;
`
const Message = style.p`
	color: ${({success,warning,danger}) => success ? 'green' : warning ? 'orange' : danger ? 'red' : "black" };
`
const InputWrapper = style.div`
    width: 100%;
    margin: 0px 0px 30px 0px
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
