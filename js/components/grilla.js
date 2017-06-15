'use strict';
const SearchItem = (dato, update) => {
   const col=$('<div class="col-sm-3 pokemon"></div>');


  while (dato.entry_number.toString().length<3){
        dato.entry_number = '0'+dato.entry_number;
  }
   const imgPok=$('<img class="img-pokemon" src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+dato.entry_number+'.png ">');
   const divOpcion=$('<div class="opcion-pokemon" ></div>');
   const pokebola=$('<img class="iconos-pokedex" src="icon/pokeball_gray.png" alt="">');
   const corazon=$('<img class="iconos-pokedex" src="icon/valentines-heart.png" alt="">');
   const data=$('<img class="iconos-pokedex" src="icon/data.png" alt="">');
   const nombre=$('<p class="text-center">'+dato.pokemon_species.name+'</p>');

   col.append(imgPok);
   col.append(divOpcion);
   divOpcion.append(pokebola);
   divOpcion.append(corazon);
   divOpcion.append(data);
   col.append(nombre);

    imgPok.on('click', (e) => {
        e.preventDefault();
        state.selectedPokemon = pokemon;
        update();
    });
    console.log(col);
    return col;
}

const Grilla = (update) => {
  const contenedor=$('<div class="container"></div>');
  const row=$('<div class="row"></div>');
  const col=$('<div class="col-sm-12 flex"></div>');
  const input =$('<input class="text-center" type="text" name="" value="">');
  const boton=$('<button class="btn btn-lg btn-success" type="button" name="button">A-Z</button>');
  const divBusqueda=$('<div class="row"></div>');

  contenedor.append(row);
  contenedor.append(divBusqueda);
  row.append(col);
  col.append(input);
  col.append(boton);

  input.on('keyup', (e) => {
        divBusqueda.empty();
        const resultado = filterByDistrict(state.pokemons.pokemon_entries, input.val());

        resultado.forEach((e) => {
            divBusqueda.append(SearchItem(e, update));
            console.log(e);
        });
    });
    return contenedor;
}
