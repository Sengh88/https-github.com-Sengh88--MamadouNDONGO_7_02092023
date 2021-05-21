var removeCartItems = document.getElementsByClassName('remove')
console.log(removeCartItems);
for (var i = 0; i < removeCartItems.length; i++) {
    var remove = removeCartItems[i]
    remove.addEventListener('click', function(event) {
       var removeClicked = event.target
       removeClicked.childE
    })
}

    // ------- AFFICHAGE DES PRODUITS DU PANIER-----------//


    const positionElement = document.querySelector('#container-md cart')
    console.log(positionElement);

    // ---------- Si le PANIER est VIDE AFFICHER Le Panier est vide-------//
    