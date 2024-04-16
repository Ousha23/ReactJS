import CareScale from "./CareScale";
import '../styles/PlantItem.css';

//------------V1 on peut détailler les props dans la définition de la fonction 
const PlantItem = ({ id, cover, name, water, light }) => {
    
    // function handleClick(name){
    //     console.log("Ceci est mon clique"+ name)
    // }
    const handleClick = (e) => {
        console.log("Ceci est mon event", e)
    }
    return (
                <li key={id} className='lmj-plant-item' onClick = {handleClick}>
                {/* <li key={id} className='lmj-plant-item' onClick = {() => handleClick()}></li> */}
                    <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			        {name}
                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />
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
                    