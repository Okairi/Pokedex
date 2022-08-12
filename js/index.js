let ramdonId = Math.floor(Math.random() * 100);
//variables
let nombrePokemon = document.getElementById("nombre-pokemon");
let pokemonImage = document.getElementById("pokemon-image-principal");
let heightPokemon = document.getElementById("height-pokemon");
let idPokemon = document.getElementById("id-pokemon");
let weightPokemon = document.getElementById("weight-pokemon");
let typePokemon = document.getElementById("type-pokemon");
let levelPokemon = document.getElementById("level-pokemon");
let habilityPokemon = document.getElementById("hability-pokemon");

const options = { method: "GET" };
//peticion api
const getPokemons = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${ramdonId}`,
    options
  );
  const data = await response.json();
  return data;
};
getPokemons().then((data) => console.log(data));

const load = window.addEventListener("load", function () {
  getPokemons().then(
    ({
      name,
      sprites,
      height,
      id,
      weight,
      types,
      abilities,
      base_experience,
    }) => {
      nombrePokemon.innerHTML = name;
      pokemonImage.src = sprites.front_default;
      heightPokemon.innerHTML = height;
      idPokemon.innerHTML = id;
      weightPokemon.innerHTML = weight + " kg";
      typePokemon.innerHTML = types[0].type.name;
      habilityPokemon.innerHTML = abilities[0].ability.name;
      levelPokemon.innerHTML = base_experience;
    }
  );
});
