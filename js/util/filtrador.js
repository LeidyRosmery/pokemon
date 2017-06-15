'use strict';
const filterByDistrict = (stations, query) => {
    const busqueda = stations.filter((elemento) => {
        return (elemento.pokemon_species.name.indexOf(query) != -1);
    });
    console.log(busqueda);
    return busqueda;

}
filterByDistrict(state.pokemons , 'a');
