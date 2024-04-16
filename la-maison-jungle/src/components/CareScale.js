
// On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
// const scaleValue = props.scaleValue et
// const careType = props.careType
// careType et scaleValue ce sont des props

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}
    
export default CareScale