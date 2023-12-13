let favoriDiv = document.querySelector(".fav");

const favorits = JSON.parse(localStorage.getItem("favs"))
console.log(favorits);

function drawCards(){
    favorits.forEach(el => {
        favoriDiv.innerHTML += `
        <div class="card" style="width: 18rem">
        <img src="${el.userphoto}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${el.name}</h5>
          <h5 class="card-title">${el.surname}</h5>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        `; 
    });
}

drawCards()