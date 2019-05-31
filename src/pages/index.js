import React from "react"
import { Button } from '../components/button'
import Input from '../components/input'
import style from "styled-components"

const IndexWrapper = style.div`
	display:flex;
	flex-direction:column;
	width:50%;
	margin: 0 auto;
`
const Title = style.p`
	text-align:center;
	font-size: 25px;
`

function Index() {
	return(
        <IndexWrapper>
        	<Title>Log in</Title>
	        <Input placeholder = "First name" type = "text" success message="successful" label="First name"/>
	        <Input placeholder = "Last name" type = "text" success label="Last name"/>
	        <Input placeholder = "Email" type = "email"  danger message="try again" label="Email"/>
	        <Input placeholder = "Password" type = "text"  warning message="error" label="Password"/>
	        <Input placeholder = "Retype Password" type = "password" label="Retype Password" />
	        <Button name="send"/>
	        <Button name="send" primary />
        </IndexWrapper>
		);
    
}
export default Index;

