import React from 'react'
import {
	ContainerProdutos,
	ContainerProdutoIndividual,
	ImagemProdutos,
} from './CardProdutos.styled'

export default class CardProdutos extends React.Component {
	
	render() {
		const arrayProdutos = this.props.produto.map((dados) => {
			return (
				<ContainerProdutoIndividual key={dados.id}>
					<ImagemProdutos src={dados.imageUrl} />
					<h4>{dados.name}</h4>
					<h1>$ {dados.value}</h1>
					<button
						onClick={() => {
							this.props.addCarrinho(dados.id)
						}}
					>
						Adicionar produto
					</button>
				</ContainerProdutoIndividual>
			)
		})

		return <ContainerProdutos>{arrayProdutos}</ContainerProdutos>
	}
}
