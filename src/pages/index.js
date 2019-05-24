import React from "react"
import { Button } from '../components/button'
import { Text } from '../components/input'

function Index() {
	return(
        <div>
        <p>index page</p>
        <Button name="send"/>
        <Button name="click"/>
        <Text value="" placeholder="type" type="text"/>
        </div>
		);
    
}
export default Index;

