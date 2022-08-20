import React from 'react'
import { HeaderProdudo, Ordem } from './Produtos.styled'
import CardProdutos from '../CardProdutos/CardProdutos'


export default class Produtos extends React.Component {

	updateOrder = (ev) => {
		this.setState
		   ({order: ev.target.value})
	   }

	render() {
		return (
			<div>
				<HeaderProdudo>
					<Ordem>
						<p>Quantidade de produtos: {this.props.produto.length}</p>
						<label for="order">Ordenar por: </label>
						<select 
						name="order"
						value={this.props.order}
						onChange={this.updateOrder}
						>
							<option value="cresc">Crescente</option>
							<option value="desc">Decrescente</option>
						</select>
					</Ordem>
					<CardProdutos
						produto={this.props.produto}
						ordernar={this.props.order}
						addCarrinho={this.props.addCarrinho}
					/>
				</HeaderProdudo>
			</div>
		)
	}
}
