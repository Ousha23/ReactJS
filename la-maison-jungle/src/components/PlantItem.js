import CareScale from "./CareScale";
import '../styles/PlantItem.css';


function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}
//------------V1 on peut détailler les props dans la définition de la fonction 
function PlantItem({ cover, name, water, light }) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}
//-----------V2 on détaille à l'interieur de la fonction
// const PlantItem = (props) => {
//     return (
//                 <li key={props.id} className='lmj-plant-item' onClick = {() => handleClick(props.name)}>
//                     <img className='lmj-plant-item-cover' src={props.cover} alt={`${props.name} cover`} />
// 			        {props.name}
//                     <CareScale careType='water' scaleValue={props.water} />
//                     <CareScale careType='light' scaleValue={props.light} />
//                 </li>
//             )
// }


export default PlantItem;
                    