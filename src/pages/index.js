import React from "react"
import { Button } from '../components/button'
import { Text } from '../components/input'
import style from "styled-components"

const IndexWrapper = style.div`
	display:flex;
	flex-direction:column;
	width:50%;
	margin: 0 auto;
`
const Title = style.p`
	text-align:center;
`

function Index() {
	return(
        <IndexWrapper>
        	<Title>Log in</Title>
	        <Text placeholder = "First name" type = "text" />
	        <Text placeholder = "Last name" type = "text" />
	        <Text placeholder = "Password" type = "password"/>
	        <Button name="send"/>
        </IndexWrapper>
		);
    
}
export default Index;

