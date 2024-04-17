import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import { useState } from 'react'
import '../styles/Layout.css'

function App() {
	const [cart, updateCart] = useState([])
	const [category, filterCategory] = useState([])
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} category={category} filterCategory={filterCategory} />
			</div>
			<Footer />
		</div>
	)
}


//---------- Déléguez le contrôle : les formulaires non contrôlés dans App
// return <form onSubmit={handleSubmit}>
//     <input type='text' name='my_input' defaultValue='Tapez votre texte' />
//     <button type='submit'>Entrer</button>
// </form>
// function handleSubmit(e) {
//     e.preventDefault()
//     alert(e.target['my_input'].value)
// }
export default App