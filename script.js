let pokelist = [];
let int = 1;
let pokemon = [];

fetch("names.json")
    .then((res) => res.json())
    .then((data) => { pokelist = data; })


function randomize() {
    min = Math.ceil(1);
    max = Math.floor(228);

    return Math.floor(Math.random() * (max - min)) + min;
}

function generate() {
    pokemon = [];

    int = parseInt(document.getElementById("count").value);

    for (let i = 0; i < int; i++) {
        let r = randomize();
        let n;

        for (let p of pokelist) {
            if (p.id == r) n = p;
        }

        pokemon.push(n);
    }

    display();
}

function display() {
    const containerEl = document.getElementById("pokedisplay");
    containerEl.style.visibility = "visible";
    containerEl.replaceChildren();

    for (let p of pokemon) {
        const pokeEl = document.createElement("div");
        pokeEl.classList.add("pokeitem");

        const pokeimg = new Image(128, 128);
        pokeimg.src = "images/" + p.id + ".png";
        pokeEl.appendChild(pokeimg);

        const pokename = document.createElement("p");
        pokename.textContent = p.name;
        pokename.classList.add("poketxt");
        pokeEl.appendChild(pokename);

        containerEl.appendChild(pokeEl);
    }
}