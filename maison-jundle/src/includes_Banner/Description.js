import React from "react";



const Description = () => {
    var text = 'Ici achetez toutes les plantes dont vous avez toujours rêvé'
    var emojis = "🤑🤑🤑"
    return (<p>{text.slice(0, 11) + emojis}</p>);
}

export default Description  