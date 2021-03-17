
const topContainer = document.querySelector('.lenses__container')

fetch('http://localhost:3000/api/cameras')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  const products = document.getElementById('products')
  for(camera of data) {
    console.log(camera);
    products.innerHTML += `
    <div class="details container-md">
    <div class="left">
      <div class="main">
        <img src="${ camera.imageUrl }" alt="">
      </div>
     
    <div class="right">
      <span>Appareils</span>
      <h1>${ camera.name }</h1>
      <div class="price">${ camera.price/100 }</div>
      <form>
        <div>
          <select>
            <option value="Select Size" selected disabled>Options</option>
            <option value="1">32</option>
            <option value="2">42</option>
            <option value="3">52</option>
            <option value="4">62</option>
          </select>
          <span><i class='bx bx-chevron-down'></i></span>
        </div>
      </form>

      <form class="form">
        <input type="text" placeholder="1">
        <a href="panier.html" class="addCart">Ajouter au panier</a>
      </form>
      <h3>${ camera.description }</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima delectus nulla voluptates nesciunt
        quidem laudantium, quisquam voluptas facilis dicta in explicabo, laboriosam ipsam suscipit!</p>
    </div>
  </div>
            `   
            lenses.forEach(arg =>{
            lensesContainer.innerHTML +=`
            <form>
            <select>
            ${photo.lenses}
            </select>
            <span><i class='bx bx-chevron-down'></i></span>
        </form>
                `
            }) 
    }catch(err){
        throw new Error(`Well something wrong happend\n ${err}`)
    }
}

function getButton(){

    const shopBtn = document.querySelector('.shop-button')
    const _id = shopBtn.dataset.id
    const getPaniers = JSON.parse(localStorage.getItem('paniers'))

    let clickedOne
    if(getPaniers !== null){
        clickedOne = getPaniers.find(arg => arg._id === _id)
    }

    if(clickedOne){
        panierBtn.innerHTML = "Ajouté au panier !"
        panierBtn.disabled = true
    }
    else{
        shopBtn.addEventListener('click', ()=> {
            shopBtn.innerHTML = "Ajouté au panier !"
            panierBtn.disabled = true
            let price = +panierBtn.dataset.price
            console.log(price)
            let targetItem = {...Storage.getproducts(_id), count : 1 , added :true}
            panier = [...JSON.parse(localStorage.getItem('paniers')), targetItem]
            Storage.saveCart(panier)
            let totalItem = JSON.parse(localStorage.getItem('totalItem'))
            let totalPrice = JSON.parse(localStorage.getItem('totalPrice'))
            totalPrice += price 
            totalItem += 1
            localStorage.setItem('totalItem', JSON.stringify(totalItem))
            localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
            counter.innerHTML = +counter.innerHTML + 1
        })
    }
}


function setTotalItem(){
    let totalItem = localStorage.getItem('totalItem')
    if (totalItem){
        counter.innerHTML= totalItem
    }
   return totalItem
}



class Storage {
    static getproducts(id){
        const products = JSON.parse(localStorage.getItem('cameras'))
        return products.find(arg => arg._id === id)
    }
    static saveCart(cart){
        const panier = JSON.stringify(cart)
        localStorage.setItem('paniers', panier)
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    if(!localStorage.getItem('paniers')){
        localStorage.setItem('paniers', JSON.stringify([]))
    }
    fetchOne()
    .then(()=> {
        setTotalItem()
        getButton()
    })
})

    