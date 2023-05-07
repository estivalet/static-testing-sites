import data from "./data.json" assert { type: "json" };
console.log(data[0]);
localStorage.setItem("pokemons", JSON.stringify(data));

function addPokemonCard(i, data) {
  return `

<div class="col mb-5">
    <div class="card h-100">
    <!-- Sale badge-->
    <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
    <!-- Product image-->
    <img
        class="card-img-top"
        id="test-img"
        src="imgs/${data["name"]}.png"
        alt="..."
    />
    <!-- Product details-->
    <div class="card-body p-4">
        <div class="text-center">
        <!-- Product name-->
        <a href="#" onclick="detail(${i})"><h5 class="fw-bolder">${data["name"]}</h5></a>
        <!-- Product price-->
        ${data["price"]}
        </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
    </div>
    </div>
</div>

    `;
}

for (let i = 0; i < 25; i++) {
  document.getElementById("row").innerHTML += addPokemonCard(i, data[i]);
}
