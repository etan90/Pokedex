let pokemonRepository = (function () {
  let pokemonList = [
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

  //prints out Pokemon's name and height. Height above '3' is considered big.
  pokemonList.forEach((pokemon) => pokemon.height > 3 ?
  document.write('<p>' + pokemon.name + ' ' + '(height: ' + pokemon.height + ') = This is big! </p>'):
  document.write('<p>' + pokemon.name + ' ' + '(height: ' + pokemon.height + ') </p>'))

  function add(pokemon) {
    if (typeof pokemon === 'object' && 'name' in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log(`Pokemon is not valid!`);
    }
  };

  function getAll() {
    return pokemonList;
  };

  return {
    add: add,
    getAll: getAll,
  };
})();

pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll());
