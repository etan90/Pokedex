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
  
  return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }
  };
})();

pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll());
