import React from "react"
import style from "styled-components"

const Input = style.input`
	padding:10px;

`


function Text({ type, placeholder, value, ...props }) {
	return(
         <Input type={type} placeholder={placeholder} value={value} {...props} />
		);
}

export {Text}
