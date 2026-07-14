let pokelist = [];
let int = 1;
let pokemon = [];

fetch("names.json")
    .then((res) => res.json())
    .then((data) => { pokelist = data; })


function randomize(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

function generate() {
    pokemon = [];
    int = parseInt(document.getElementById("count").value);
    const dupes = new Set();

    while (pokemon.length < int) {
        let r = randomize(0, 233);
        if (dupes.has(r)) continue;
        dupes.add(r);

        let n = pokelist.find(p => p.id === r);
        if (n) pokemon.push(n);

        display();
    }
}

function isShiny() {
    let r = randomize(1, 312);
    if (r == 1) return true;
    else return false;
}

function display() {
    const containerEl = document.getElementById("pokedisplay");
    containerEl.style.visibility = "visible";
    containerEl.replaceChildren();

    for (let p of pokemon) {
        const pokeEl = document.createElement("div");
        pokeEl.classList.add("pokeitem");

        const pokeimg = new Image(128, 128);
        if (isShiny()) pokeimg.src = "images/shiny/" + p.id + ".png";
        else pokeimg.src = "images/" + p.id + ".png";
        pokeEl.appendChild(pokeimg);

        const pokename = document.createElement("p");
        pokename.textContent = p.name;
        pokename.classList.add("poketxt");
        pokeEl.appendChild(pokename);

        containerEl.appendChild(pokeEl);
    }
}
