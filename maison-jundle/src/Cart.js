import React from "react";

const Cart = () => {
    var priceMonstera = 8;
    var priceLierre = 10;
    var priceBouquet = 15;

    return (
        <div>
            <h2>Le panier</h2>
            <ul>
                <li>Le Monstera : {priceMonstera}</li>
                <li>Le lierre : {priceLierre}</li>
                <li>Le bouquet de fleurs : {priceBouquet}</li>
            </ul>
            <p>Total du panier : {priceBouquet+priceLierre+priceMonstera}</p>
        </div>
    )
}

export default Cart;