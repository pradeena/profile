import React from "react"
import style from "styled-components"

const StyleButton=style.button`
	color: ${(props) => props.primary ? 'black': 'white'};
	background: ${(props) => props.primary ? 'white': 'blue' };
    padding: 20px;
    width: 100%;
`;

function Button(props) {
	return(
       <StyleButton primary={props.primary}>{props.name || "string"}</StyleButton> 
	);
}

export {Button}
