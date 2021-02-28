// Initialiser le container
let container = document.getElementById("cam_container");

// Récupération de l'api
fetch('http://localhost:3000/api/cameras')
.then(response => response.json())
.then(cameras => {
    // Récupération des appareils
    for(let i = 0; i < cameras.length; i++){
        // Création de la div 
        let divcontainer = document.createElement("div");
        divcontainer.classList.add("bordure");
        divcontainer.classList.add("col-lg-5");
        container.appendChild(divcontainer);

        //Ajout de l'image
        let imgCamera = document.createElement("img");
        imgCamera.classList.add("card-img");
        imgTeddy.setAttribute('src', cameras[i].imageUrl);
        divcontainer.appendChild(imgCamera);

        // Ajout du h2
        let h2Camera = document.createElement("h2");
        h2Camera.classList.add("card-title");
        h2Camera.innerHTML = cameras[i].name;
        divcontainer.appendChild(h2Teddy);

        //création du lien vers le produit
        let linkCamera = document.createElement("a");
        linkCamera.classList.add("btn");
        linkCamera.classList.add("btn__centre");
        linkCamera.href = "html/produit.html?id_ourson="+cameras[i]._id;
        linkCamera.innerHTML = " Détails du produit";
        divcontainer.appendChild(linkTeddy);
    }
}).catch(error => console.log(error))
