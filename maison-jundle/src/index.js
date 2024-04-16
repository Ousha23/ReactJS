import React from 'react'
import ReactDOM from 'react-dom/client'
import Banner from './Banner';
import Cart from './Cart';

// console.log(Header);

// const Description = () => 
//     <p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<div><Header /><Description /></div>);

// on peut aussi utiliser les Fragments, si on veut wrapper deux composants dans un seul parent sans que le parent apparaisse dans le DOM

root.render(<React.Fragment><Banner /><Cart /></React.Fragment>)