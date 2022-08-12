//variables    ================================================================>
let ramdonId = Math.floor(Math.random() * 100);
let nombrePokemon = document.getElementById("nombre-pokemon");
let pokemonImage = document.getElementById("pokemon-image-principal");
let heightPokemon = document.getElementById("height-pokemon");
let idPokemon = document.getElementById("id-pokemon");
let weightPokemon = document.getElementById("weight-pokemon");
let typePokemon = document.getElementById("type-pokemon");
let levelPokemon = document.getElementById("level-pokemon");
let habilityPokemon = document.getElementById("hability-pokemon");
//variables del footer ================================================================>
let pokemonRandom1 = document.getElementById("footer__pokemon-random1");
let pokemonRandom2 = document.getElementById("footer__pokemon-random2");
let pokemonRandom3 = document.getElementById("footer__pokemon-random3");
let pokemonRandom4 = document.getElementById("footer__pokemon-random4");

//Peticion api ================================================================>
const options = { method: "GET" };
const getPokemons = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${ramdonId}`,
    options
  );
  const data = await response.json();
  return data;
};
getPokemons().then((data) => console.log(data));
// Load  ======================================================================================>
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
      pokemonImage.src = sprites.other.dream_world.front_default;
      heightPokemon.innerHTML = height / 10 + "m";
      idPokemon.innerHTML = id;
      weightPokemon.innerHTML = weight / 10 + " kg";
      typePokemon.innerHTML = types[0].type.name;
      habilityPokemon.innerHTML = abilities[0].ability.name;
      levelPokemon.innerHTML = base_experience;
    }
  );

  //Pokemons random footer ================================================================>
  const getPokemonsRandom = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${ramdonId}`,
      options
    );
    const data = await response.json();
    return data;
  };

  getPokemonsRandom().then((data) => {
    pokemonRandom1.innerHTML = data.name;
    pokemonRandom2.innerHTML = data.name;
    pokemonRandom3.innerHTML = data.name;
    pokemonRandom4.innerHTML = data.name;
    console.log("random footer ", data);
  });
});
