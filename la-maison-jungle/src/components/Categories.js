
import { plantList } from '../datas/plantList'

function Categories({categories, filterCategory, setFilteredPlantList}) {
    
    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        filterCategory(selectedCategory);
    };

    return (
        <div>
            <select onChange={handleCategoryChange}>
            {/* <option value="">Toutes les catégories</option> */}
            {categories.map((cat) => (
                <option key={cat} value={cat}>
                    {cat}
                </option>
            ))}
            </select>
            <button onClick={() => setFilteredPlantList(plantList)}>Renitialisé</button>

        </div>
        
    );
}

export default Categories;