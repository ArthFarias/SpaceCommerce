import React from 'react'
import App from '../../App'
import { ContainerHeader } from './Header.styled'

export default class Header extends React.Component {
	render() {
		return (
			<ContainerHeader>
				<a href="App.js"><h1>Space Store</h1></a>
				<div>
				<a href="App.js"><p>Sign in</p></a>	
				</div>
			</ContainerHeader>
		)
	}
}
