    
    //création du nouveau client
    event.preventDefault();
    let newClient = new Client (
        document.querySelector('#firstName').value,
        document.querySelector('#lastName').value,
        document.querySelector('#address').value,
        document.querySelector('#city').value,
        document.querySelector('#email').value,
    );

    // Création de l'objet résultat
    let resultat = {
        contact : {
            firstName : newClient.firstName,
            lastName : newClient.lastName,
            address : newClient.address,
            city : newClient.city,
            email : newClient.email
        },
        products : productsId
    }
    
    // Apelle de fetch avec order
    fetch('http://localhost:3000/api/cameras/order', {
        method: 'POST',
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify (resultat)
    })
        //réponse du serveur
        .then(response => response.json())
        .then(response => {
            localStorage.clear();
                let objCommande = {
                    idCommande : response.orderId,
                    prixTotal : totalPanier
                }
                let commande = JSON.stringify(objCommande);
                localStorage.setItem('commande', commande);
                window.location = 'commande.html';
            });  
})





