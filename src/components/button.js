import React from "react"
import style from "styled-components"

const StyleButton=style.button`
color: white;
background:blue;
`

function Button(props) {
	return(
       <StyleButton>{props.name || "string"}</StyleButton> 
	);
}

export {Button}