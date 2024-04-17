import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import { useState } from 'react'

function ShoppingList({ cart, updateCart }) {
	const [filteredPlantList, setFilteredPlantList] = useState(plantList);
	const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    );
    const filterCategory = (selectedCategory) => {
        if (selectedCategory === '') {
            setFilteredPlantList(plantList); // Si aucune catégorie n'est sélectionnée, afficher toutes les plantes
        } else {
            const filteredPlants = plantList.filter((plant) => plant.category === selectedCategory);
            setFilteredPlantList(filteredPlants); // Filtrer la liste des plantes en fonction de la catégorie sélectionnée
        }
    };
	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories 
				categories={categories} 
				filterCategory={filterCategory} 
				setFilteredPlantList={setFilteredPlantList}
			/>
			<ul className='lmj-plant-list'>
				{filteredPlantList.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList