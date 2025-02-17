import { Category } from '../Category'
const categories = [
	{
		id: 1,
		title: 'Supplementos',
		imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
	},
	{
		id: 2,
		title: 'Whey',
		imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
	},
	{
		id: 3,
		title: 'Creatina',
		imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
	},
	{
		id: 4,
		title: 'Vitaminas',
		imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
	},
	{
		id: 5,
		title: 'Acessórios',
		imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
	}
]
export function Categories() {
	return (
		<div>
			{categories.map((category) => {
				return <Category category={category} key={category.title} />
			})}
		</div>
	)
}
