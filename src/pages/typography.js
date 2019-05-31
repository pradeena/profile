import React from "react"
import style from "styled-components"
import Input from "../components/input"
import Card from "../components/card"

const InputWrapper = style.div`
	display:flex;
	flex-direction:column;
`



function Typography() {
	return(
		<InputWrapper>
			<Card>
				<Input type="Username" placeholder="Input" label="Name" message="This field is required" danger/>
				<Input type="name" placeholder="Success" success />
				<Input type="name" placeholder="Rich field" />
			</Card>
		</InputWrapper>
	)
}

export default Typography;