
// On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
// const scaleValue = props.scaleValue et
// const careType = props.careType
// careType et scaleValue ce sont des props

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? '☀️' : '💧'
    var careText = careType === 'light' ? ' de lumière' : ' d\'arrosage';

    const plantRequire = (range) => {
        var rangeText = '';
        switch (range){
            case 1: 
                rangeText = 'peu';
                break;
            case 2:
                rangeText = 'modérement';
                break;
            case 3:
                rangeText = 'beaucoup';
                break;
            default:
        }
        
        alert('Cette plante requiert '+ rangeText  + careText)
    }
    
    return (
        <div onClick = {() => plantRequire(scaleValue)}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
    
}
    
export default CareScale