'use strict';
const filterByPokemon = (pokemon, query) => {
    const busqueda = pokemon.filter((elemento) => {
        return (elemento.pokemon_species.name.indexOf(query) != -1);
    });
  //  state.selectedPokemon = busqueda;
    return busqueda;

}
