import React, { useState } from "react"
import style from "styled-components"
import {Button} from '../components/button'
import Input from '../components/input'


const RegisterWrapper = style.div`
	

`
const Title = style.p`
	text-tansform:uppercase;
`


function Register() {
	let errors = [];
	const requiredField = ["firstName","lastName", "email", "password", "rePassword"]
	const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", rePassword: "" });
	const handelInputChange = ({target: {name, value} }) => {
		/*console.log({e, target: e.target})
		const { name, value } = e.target*/
		setFormData({ ...formData, [name]: value })
	}
    console.log(formData)
    const validateForm = (requiredField) => {
	    requiredField.map((field, i) => {
	      	if (!formData[field]) {
	        	errors[i] = `${field} cannot be empty`;
	      	}
	    });
	    return errors.length > 0;
  	};
  	console.log(errors)
	return(
		<RegisterWrapper>
			<Title>Create account</Title>
			<Input type="text" placeholder="Firstname" name="firstName" onChange={handelInputChange} value={formData.firstName}/>
			<Input type="text" placeholder="Lastname" name="lastName" onChange={handelInputChange} value={formData.lastName}/>
			<Input type="email" placeholder="Email" name="email" onChange={handelInputChange} value={formData.email}/>
			<Input type="password" placeholder="Password" name="password" onChange={handelInputChange} value={formData.password}/>
			<Input type="password" placeholder="Retype password" name="rePassword" onChange={handelInputChange} value={formData.rePassword}/>
			<Button name="Signup" disabled={validateForm(requiredField)}/>
		</RegisterWrapper>

	);
}
export default Register;