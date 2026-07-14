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

    while(pokemon.length < int) {
        const dupes = new Set();
        let n;

        let r = randomize(1, 228);
        if (dupes.has(r)) continue;
        dupes.add(r);

        for (let p of pokelist) {
            if (p.id == r) n = p;
        }

        pokemon.push(n);
    }

    display();
}

function isShiny() {
    let r = randomize(1, 312);
    if(r == 1) return true;
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
        if(isShiny()) pokeimg.src = "images/" + p.id + "shiny.png";
        else pokeimg.src = "images/" + p.id + ".png";
        pokeEl.appendChild(pokeimg);

        const pokename = document.createElement("p");
        pokename.textContent = p.name;
        pokename.classList.add("poketxt");
        pokeEl.appendChild(pokename);

        containerEl.appendChild(pokeEl);
    }
}