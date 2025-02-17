import { CategoryContainer } from './style'
export function Category({ category }) {
	const { title } = category
	return (
		<CategoryContainer>
			<div className="imagem-backgoud" />
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Comprar Agora</p>
			</div>
		</CategoryContainer>
	)
}
