import React from "react"
import style from "styled-components"
import { Button } from '../components/button'
import Card from '../components/card'
import Input  from '../components/input'

const SignUpWrapper = style.div`
	display:flex;
	flex-direction:column;
	align-items:center;
`

function SignUp() {
	return(
		<SignUpWrapper>
			<Card>
				<Input type="text" placeholder="SignUp"/>
				<Input type = "password" placeholder="Password"/>
				<Button primary name="Sign up" />
			</Card>
		</SignUpWrapper>
	)
	
}

export default SignUp;


