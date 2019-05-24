import React from "react"
import style from "styled-components"

const Input = style.input`
	padding:10px;
	margin:10px 0;

`


function Text({ type, placeholder, value, ...props }) {
	return(
         <Input type={type} placeholder={placeholder} value={value} {...props} />
		);
}

export {Text}
