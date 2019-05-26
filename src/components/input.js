import React from "react"
import style from "styled-components"

const Input = style.input`
    padding:10px;
    margin:10px 0;
    /* border-color: ${(props) => props.success ? 'green' : none }; */
    border-color: ${({success}) => success ? 'green' : none };
`


function Text({ type, placeholder, value, success, ...props }) {
    return(
       <Input type={type} placeholder={placeholder} value={value} success={success} {...props} />
     );
}

export {Text}
