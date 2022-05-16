let pokemonList = [
  {
    name: 'Charmander',
    height: 2,
    types: ['fire']
  },
  {
    name: 'Bulbasaur',
    height: 2.4,
    types: ['grass', 'poison']
  },
  {
    name: 'Charmeleon',
    height: 3.7,
    types: ['fire']
  }
];

for (let i = 0; i < pokemonList.length; i++) {
   document.write(pokemonList[i].name + ' ' + '(height: ' + pokemonList[i].height + ') | ');
 }
