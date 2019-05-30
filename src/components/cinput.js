import React from "react"
import style from "styled-components"


const Input = style.input`
	padding:10px;
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

function Text({type, value, success, warning, danger, label, message, ...props}) {
	return(
		<div>
			{label && <Label>{label}</Label>}
			<Input type = {type} value = {value} success={success} warning={warning} danger={danger} {...props}>

		</div>
		)
}

export {Text}