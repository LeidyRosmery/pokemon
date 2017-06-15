'use strict';
const filterByDistrict = (stations, query) => {
    const busqueda = stations.filter((elemento) => {
        return (elemento.pokemon_species.name.indexOf(query) != -1);
    });
    return busqueda;

}
  //console.log(state.pokemons.pokemon_entries[8].pokemon_species.name);
