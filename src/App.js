import React from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Filtros from './Components/Filtros/Filtros'
import Carrinho from './Components/Carrinho/Carrinho'
import Produtos from './Components/Produtos/Produtos'
import styled from 'styled-components'

// const ContainerGeral = styled.div``
// const ContainerHeader = styled.header`
// 	display: flex;
// 	justify-content: space-around;
// 	background-color: pink;
// `
// const ContainerBody = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// `
// const ContainerFiltrosInterno = styled.div`
// 	border: 1px solid black;
// 	margin-right: 0%;
// 	margin-left: 2%;
// 	margin-top: 2%;
// 	padding-bottom: 15%;
// `
// const InputFiltros = styled.input`
// 	margin-right: 100%;
// `
// const ContainerProdutos = styled.div`
// 	display: flex;
// 	gap: 20px;
// 	padding-top: 2%;
// `
// const ContainerProdutoIndividual = styled.div`
// 	border: 1px solid black;
// 	height: 65vh;
// 	width: 14vw;
// 	text-align: center;
// `
// const ImagemProdutos = styled.img`
// 	height: 35%;
// 	width: 100%;
// `
// const InputContainerCarrinho = styled.div`
// 	border: 1px solid black;
// 	margin-right: 2%;
// 	margin-left: 2%;
// 	margin-top: 2%;
// 	padding-bottom: 15%;
// `
// const ConteinerCarrinho = styled.div`
// 	margin-left: 22px;
// 	margin-right: 30px;
// `
// const ContainerFooter = styled.footer`
// 	background-color: pink;
// 	text-align: center;
// `
// const ImagemFooter = styled.img`
// 	height: 40px;
// 	width: 40px;
// `
const Main = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	width: 100%;
	height: 100%;
	min-height: 100vh;
`
class App extends React.Component {
	state = {
		listaProdutos: [
			{
				id: 1,
				name: 'Foguete da Missão Apollo 11',
				value: 300999,
				imageUrl: 'https://azeheb.com.br/blog/wp-content/uploads/2016/05/f%C3%ADsica-dos-foguetes.jpg',
			},
			{
				id: 2,
				name: ' Nave Escalibul 388',
				value: 400899,
				imageUrl: 'https://services.meteored.com/img/article/spacedream-argentina-naves-cruceros-espaciales-turismo-espacial-spacex-elon-musk-1645029018049_768.jpg',
			},
			{
				id: 3,
				name: 'Ônibus Espacial A3564',
				value: 940300,
				imageUrl: 'https://www.inovacaotecnologica.com.br/noticias/imagens/020175100118-onibus-espacial.jpg',
			},
			{
				id: 4,
				name: 'Conjunto Viagem Espacial com Oku Baby',
				value: 500,
				imageUrl: 'https://ae01.alicdn.com/kf/Hc89f50fb5c6341128eca72a930e0238f8/Quebra-cabe-as-2021-brinquedos-ticos-modelo-de-espa-o-lan-adeira-esta-o-espacial-s.jpg_Q90.jpg_.webp',
			},
			{
				id: 5,
				name: 'Pelucias Estronalticas Kids Lunatics',
				value: 1500,
				imageUrl: 'https://ae01.alicdn.com/kf/Hc9b34e5ddccc456eb69c7404cff01e00u/Brinquedo-de-pel-cia-astronauta-e-nave-espacial-recheado-macio-tipo-fic-o-cient-fica-boneca.jpg_Q90.jpg_.webp',
			},
			{
				id: 6,
				name: 'Asteroide precioso de Plutão 380k',
				value: 30900,
				imageUrl: 'http://s3-sa-east-1.amazonaws.com/mundogum/wp-content/uploads/2014/09/5cdc5503f2823ab9fb38b6c3812e200d.jpg',
			},
			{
				id: 7,
				name: 'Meteoro Lunar com chuvas ateróicas',
				value: 12500,
				imageUrl: 'https://i.pinimg.com/236x/78/6c/ff/786cffb9e0a4ddafde7b520dd45b2409--rocks-and-minerals-cobalt.jpg',
			},
			{
				id: 8,
				name: 'Meteoro em eclosão em base de mágma pulada',
				value: 15800,
				imageUrl: 'https://i.pinimg.com/736x/0f/39/60/0f3960b49e85b68572f5224b55752fd1--beautiful-rocks-gem-stones.jpg',
			},
			{
				id: 9,
				name: 'Viagem interespacial Terra para Lua',
				value: 50500,
				imageUrl: 'https://tm.ibxk.com.br/2021/07/14/14195621703468.jpg?ims=1200x675',
			},
			{
				id: 10,
				name: 'Passeio interestrelar Vialactia 1009',
				value: 20400,
				imageUrl: 'https://gooutside.com.br/wp-content/uploads/sites/3/2020/06/empresa-desenvolve-balao-para-fazer-turismo-espacial.png',
			},
			{
				id: 11,
				name: 'Viagem multiplanetária Terra, Lua , Vênus e Marte ',
				value: 150000,
				imageUrl: 'https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=MjZlKGl7tZo4kd74Z+b+t+uFIyu7Hou2XFkEaDGiOt0+t28vxVzxGvksKkvBLqGN/DYbZUkYx+iwnbyNcTC6vf5V+Bfrg+0SJT8SN4s3qgUt65Q=',
			},
			{
				id: 12,
				name: 'Camisa "Turma dos Lunaticos"',
				value: 200,
				imageUrl: 'https://ae01.alicdn.com/kf/Hefadd21ca0c04b8d958b31e4891a5c97W/Camiseta-com-estampa-de-lua-e-terra-camiseta-masculina-do-espa-o-x-codificador-espa-oso.jpg_Q90.jpg_.webp',
			},
			{
				id: 13,
				name: 'Camisa "Puzzle Galaxy"',
				value: 150,
				imageUrl: 'https://m.media-amazon.com/images/I/61Y4N9loCwL._AC_SX385_.jpg',
			},
			{
				id: 14,
				name: 'Camisa "Occupy Mars"',
				value: 250,
				imageUrl: 'https://www.ofertaviva.com.br/photo/camiseta-masculina-de-espaco-x-camiseta-com-estampa-casual-100-algodao-tesla-para-homens.jpg',
			},
			{
				id: 15,
				name: 'Camisa Planetas',
				value: 250,
				imageUrl: 'https://img.elo7.com.br/product/zoom/316BC1C/camiseta-planetas-espaco-cosmos-camisa-estampada-full-print-cosmos.jpg',
			},
			{
				id: 16,
				name: 'Trage Espacial Orange Nasa WZ300',
				value: 10500,
				imageUrl: 'https://qph.fs.quoracdn.net/main-qimg-190b248dabcd6d7403dc8ab0dffec6cf-pjlq',
			},
			{
				id: 17,
				name: 'Trage Lunático EF240 Edward Mark',
				value: 15800,
				imageUrl: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/04/107198735873800.jpg',
			},
			{
				id: 18,
				name: 'Trage multiplanetário EW3400 Nasa Revolution',
				value: 30100,
				imageUrl: 'https://mundoconectado.com.br/uploads/2021/01/04/16843/traje-spacex.jpg',
			},
			{
				id: 19,
				name: 'Satélite Elio Mark BH3450 1980',
				value: 20500,
				imageUrl: 'https://qph.fs.quoracdn.net/main-qimg-9e1c9012b7dbcafa67438cd414201d10-lq',
			},
			{
				id: 20,
				name: 'Satélite Strukze Britril 4590 1950',
				value: 18400,
				imageUrl: 'https://super.abril.com.br/wp-content/uploads/2021/11/Teste-de-missil-russo-explode-satelite.jpg',
			},
			{
				id: 21,
				name: 'Viaturas espaciais Nasa VXW320',
				value: 2999,
				imageUrl: 'https://ae01.alicdn.com/kf/He86fa8fd2f8b4dea9fd15ff6044c9793R/Brinquedo-de-blocos-de-constru-o-modelo-lua-avi-o-espa-onave-espacial-tijolos-de-constru.jpg_Q90.jpg_.webp',
			},
		],
		carrinho: [],
		order:"cresc"
	}

 	addCarrinho = (id) => {
		const adicionaCarrinho = this.state.listaProdutos.filter((item) => {
			return item.id === id
		})
		const armazenaCarrinho = [...this.state.carrinho, adicionaCarrinho[0]]
		this.setState({ carrinho: armazenaCarrinho })
	}
	removerProduto = (indice) => {
		const removeProduto = this.state.carrinho.filter((item, posicao) => {
			return posicao !== indice
		})
		this.setState({ carrinho: removeProduto })
	}
	render() {
		return (
			<div>
				<Header />
				<Main>
					<Filtros />
					<Produtos
						produto={this.state.listaProdutos}
						ordernar={this.state.order}
						addCarrinho={this.addCarrinho}
					/>
					<Carrinho
						listaCarrinho={this.state.carrinho}
						removerProduto={this.removerProduto}
					/>
				</Main>
				<Footer />
			</div>
		)
	}
}

export default App
