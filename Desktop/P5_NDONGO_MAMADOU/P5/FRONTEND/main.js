let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'appareil1',
        tag: 'camera',
        price: 400,
        inCart:0,
    },

    {
        name: 'appareil2',
        tag: 'camera',
        price: 400,
        inCart:0,
    },

    {
        name: 'appareil3',
        tag: 'camera',
        price: 400,
        inCart:0,
    },

    {
        name: 'appareil4',
        tag: 'camera',
        price: 400,
        inCart:0,
    },

    {
        name: 'appareil5',
        tag: 'camera',
        price: 400,
        inCart:0,
    },


]
for (let i=0; 1 < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })

}

function onLoadCardNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.MenuItems a').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers)
    
    if( productNumbers ) {
        localStorage.setItem('cartNumbers' , productNumbers +1);
        document.querySelector('.MenuItems a').textContent = productNumbers + 1;
    } else{
        localStorage.setItem('cartNumbers' , 1);
        document.querySelector('.MenuItems a').textContent = 1;
    }

    setItems(product);
    
}

function setItems(product) {
    let cartItems = localStorage.getItem('producsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems += null) {
        if(cartItems[product.tag] !== undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart != 1;
    }else {
        product.inCart = 1;
        cartItems = {
            [product.tag] : product
    }
   
    }
    
    localStorage.setItem('productInCart', JSON.stringify
    (cartItems));
}

function totalCost(product) {
    localStorage.setItem('totalCost', product.price)
}
onLoadCardNumbers()