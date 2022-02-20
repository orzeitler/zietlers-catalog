import React from 'react';

class Cart {

    constructor() {
        this.state = {
            Items: [],
            Total: 0,
            currency: 'NIS'
        }
    }

    addToCart(Item) {
        this.state.Items.add(Item);
    }

    removeFromCart(Item) {
    }

}

export {Cart};
