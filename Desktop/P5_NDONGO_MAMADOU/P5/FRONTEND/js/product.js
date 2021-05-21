var image = document.querySelector("#lenses__container div.left > div.main > img")




fetch('http://localhost:3000/api/cameras')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  const products = document.getElementById('lenses__container')
  for(photo of data) {
    console.log(photo);
    lenses__container.innerHTML += `
<div class="details container-md" id="lenses__container"> 
      <div class="left">
        <div class="main">
          <img src="${ photo.imageUrl }" alt="">
        </div>
       
      <div class="right">
        <span>Appareils</span>
        <h1>${ photo.name }</h1>
        <div class="price">${ photo.price/100 }</div>
        <form>
          <div>
            <select>
              <option value="Select Size" >Options</option>
              <option value="1">${ photo.lenses }</option>
              <option value="2">42</option>
              <option value="3">52</option>
              <option value="4">62</option>
            </select>
            <span><i class='bx bx-chevron-down'></i></span>
          </div>
        </form>

        <form class="form">
          <input type="number" value="${ photo.lenses }" min="${ photo.lenses }">
          <a href="panier.html" class="addCart">Ajouter au panier</a>
        </form>
        <h3>Product Detail</h3>
        <p>${ photo.description }</p>
      </div>
    </div>
    `
}
})