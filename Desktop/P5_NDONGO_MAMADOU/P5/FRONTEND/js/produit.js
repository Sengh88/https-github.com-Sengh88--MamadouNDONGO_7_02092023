// Initialiser le container
let container = document.getElementById("cam_container");
let option = document.getElementById("option");
let container2 = document.getElementById("cam_container2");
let res = document.getElementById('result');
result = parseInt(res.value,10);    
let plus = document.getElementById('plus');
let moins = document.getElementById('moins');

//Récuperer id
let params = new URLSearchParams (document.location.href.split('?')[1]);
let url = params.get("id_ourson");
fetch('http://localhost:3000/api/cameras/'+ url)
.then(response => response.json())
.then(camera => {
    // Création de la div 
    let divcontainer = document.createElement("div");
    divcontainer.classList.add("bordure2");
    container.appendChild(divcontainer);
        
    //Ajout de l'image
    let imgTeddy = document.createElement("img");
    imgCamera.classList.add("card-img2");
    imgCamera.setAttribute('src', camera.imageUrl);
    divcontainer.appendChild(imgCamera);
            
    // Ajout du h2
    let h2Camera = document.createElement("h2");
    h2Camera.classList.add("card-title2");
    h2Camera.innerHTML = cam.name;
    divcontainer.appendChild(h2Camera);

    // Ajout du prix
    let pCamera = document.createElement("p");
    pCamera.classList.add("card-prix");
    pCamera.innerHTML = "Prix : " + " " + cam.price/100 + "€";
    divcontainer.appendChild(pCamera);

    // Ajout de la description
    let descriptionCamera = document.createElement("p");
    descriptionCamera.classList.add("card-description");
    descriptionCamera.innerHTML = cam.description;
    divcontainer.appendChild(descriptionTeddy);

    //Ajout de l'élément option
    let firstoption = document.createElement("option");
    firstoption.setAttribute('disabled', "disabled");
    firstoption.setAttribute('selected', "true");
    firstoption.setAttribute('value', 0 );
    firstoption.textContent = "Sélectionner une lentille";
    option.appendChild(firstoption);
        
    //boucle pour récupérer les lentilles individuellement
    for(let i = 0; i<cam.lenses.length; i++){
        let lensesOption = document.createElement('option');
        option.classList.add("choix");
        option.appendChild(lensesOption);
        lensesOption.setAttribute('value', 1);
        lensesOption.textContent = cam.lenses[i];
    }

    // ajout des quantités
    plus.addEventListener('click', function() {
        if(result >= 1 && result < 99){
        result++;
        document.getElementById('result').value= result;
        }
    });
    moins.addEventListener('click', function() {
        if(result > 1 && result <= 99){
        result--;
        document.getElementById('result').value= result;
        }
    });

    //ajout du bouton pour ajouter l'appareil au panier
    let divcontainer2 = document.createElement("btn");
    teddie_container2.appendChild(divcontainer2);

    let linkPanier = document.createElement("a");
    linkPanier.classList.add("btn");
    linkPanier.classList.add("btn__centre");
    linkPanier.innerHTML = "Ajouter au panier";
    divcontainer2.appendChild(linkPanier);

    // Ecoute de l'évènement valider la commande
    linkPanier.onclick =
        function (){
            let select=document.querySelector('select');
            let choixCouleur = select.selectedIndex;
            if( choixCouleur == 0 ){
                alert('Vous devez personnalisé votre appareil !');
            }else{
                let cameraPanier = {
                    id : cam._id,
                    name : cam.name,
                    price : cam.price,
                    description : cam.description,
                    imageUrl : cam.imageUrl,
                    qty : result
                }
                let cameraPanier = JSON.stringify(cameraPanier);
                localStorage.setItem(cam._id, camPanier);
                alert(message = 'vos articles ont bien été ajouté au panier');
                }
            }    
}).catch(error => console.log(error))

