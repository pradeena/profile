import React from "react"
import style from "styled-components"

const StyleButton=style.button`
color: white;
background:blue;
padding:20px;
`

function Button(props) {
	return(
       <StyleButton>{props.name || "string"}</StyleButton> 
	);
}

export {Button}