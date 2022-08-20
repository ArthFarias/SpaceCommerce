import React from 'react'
import { ContainerFiltrosInterno, InputFiltros } from './Filtros.styled'

export default class Filtros extends React.Component {
	render() {
		return (
			<ContainerFiltrosInterno>
				<h2>Filtros</h2>
				<p>Valor minimo:</p>
				<InputFiltros></InputFiltros>
				<p>Valor máximo:</p>
				<InputFiltros></InputFiltros>
				<p>buscar por nome:</p>
				<InputFiltros></InputFiltros>
			</ContainerFiltrosInterno>
		)
	}
}
