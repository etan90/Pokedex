let pokemonRepository = (function () {
  let repository = [
    {
      name: 'Charmander',
      height: 2,
      types: ['fire']
    },
    {
      name: 'Bulbasaur',
      height: 2.04,
      types: ['grass', 'poison']
    },
    {
      name: 'Charmeleon',
      height: 3.07,
      types: ['fire']
    }
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return repository;
  }
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    buttonEvent(button, pokemon);
  }
  function showDetails(pokemon){
    console.log(pokemon);
  }
  function buttonEvent(button, pokemon) {
    button.addEventListener('click', function () {
      showDetails(pokemon);
    })
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
