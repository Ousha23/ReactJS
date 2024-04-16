import { plantList } from "../datas/plantList";
import '../styles/ShoppingList.css';
import PlantItem from "./PlantItem";
import cover from '../assets/cover.jpg'

function ShoppingList() {
    const categories = [];
    plantList.forEach(plant => {
        if (!categories.includes(plant.category)){
            categories.push(plant.category);
        }    
    });
    return (
        <div>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>{category}</li>
                ))}
            </ul>
            {<ul className='lmj-plant-list'>
                {plantList.map((plant, index) => (
                    // <li key={plant.id}>{plant.name} {plant.isBestSale ? <span>🔥</span> : null}</li>
                    <PlantItem key={index} name={plant.name} cover={cover} water={plant.water} light={plant.light}/>
                ))}
            </ul>}
            
        </div>
    )
}

export default ShoppingList

