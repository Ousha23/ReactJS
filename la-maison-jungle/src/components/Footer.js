import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
	const handleChange = (event) => {
        setInputValue(event.target.value);
    };
	const checkValue = () => {
		!inputValue.includes('@')  ? alert ('Attention, il n\'y a pas d\'@, ceci n\'est pas une adresse valide') : alert('adress email valide ' +inputValue);
	}
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<form>
				<input type='text'
                    value={inputValue}
                    onChange={handleChange}
                    onBlur={checkValue}>
				</input>
			</form>
		</footer>
	)
}

export default Footer