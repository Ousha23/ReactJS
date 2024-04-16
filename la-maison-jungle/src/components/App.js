import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

function App() {
    return (
    <div>
        <Banner />
        <Cart />
        <ShoppingList />
        <Footer />

    </div>)


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