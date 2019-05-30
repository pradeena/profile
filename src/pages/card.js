import React from "react"
import { Button } from '../components/button'
import { Text } from '..components/cinput'

const CardWrapper = style.div`
	box-shadow: ${(props => props.primary ? '0 4px 8px 0 rgba(0,0,0,0.2)' : '0 4px 8px 0 rgba(0,0,0,0.9)')};
	display:flex;
	flex-direction:column;
	width:50%;
	margin: 0 auto;
`
const Title = style.p`
	text-align:center;
	font-size: 25px;
`


function Card() {
	return(
		<CardWrapper primary>
			<Title>Sign In</Title>
			<Text type = "text" label = "username" success>
			<Text type = "text" label = "password">
			<Button name = "Log In">
		</CardWrapper>
		)
}

export {Card}