'use strict';
const buscarPokemon = (dato, update) => {
   const col=$('<div class="col-sm-2  pokemon">');
  while (dato.entry_number.toString().length<3){
        dato.entry_number = '0'+dato.entry_number;
  }
 const grilla=$('<div class="grilla">');
  col.append(grilla);
 const imgPokemon= $('<img class="img-pokemon" src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+dato.entry_number+'.png ">')
 grilla.append(imgPokemon);
 const estructura= $(' <img class="estructura" src="img/pokmon.png" alt="">')
 grilla.append(estructura);
 const caracteristicas=$('<div class="caracteristicas">');
 grilla.append(caracteristicas);
 const opciones=$('<div class="opcion-pokemon" >');
caracteristicas.append(opciones);
 const nombre=$('<p class="nombre-pokemon">'+dato.pokemon_species.name+'</p>');
 
caracteristicas.append(nombre);
   const enlacePokebola=$('<a class="iconos-pokedex" href="#ventana1" data-toggle="modal" data-pokID='+dato.entry_number+' </a>');
   const pokebola=$('<img class="iconos-pokedex" src="icon/pokeball_gray.png" alt="">');
   const enlaceCorazon=$('<a class="iconos-pokedex" href="#ventana1" data-toggle="modal" </a>');
   const corazon=$('<img class="iconos-pokedex" src="icon/valentines-heart.png" alt="">');
   const enlaceData=$('<a class="iconos-pokedex" href="#ventana1" data-toggle="modal" </a>');
   const data=$('<img class="iconos-pokedex" src="icon/data.png" alt="">');
  opciones.append(enlaceData);
   enlaceData.append(data);
   opciones.append(enlacePokebola);
   enlacePokebola.append(pokebola);
   opciones.append(enlaceCorazon);
   enlaceCorazon.append(corazon);

       pokebola.on('click', (e) => {
        e.preventDefault();
        console.log(e.target.parentNode.dataset.pokid);
        state.selectedPokemon = dato;
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
        const resultado = filterByPokemon(state.pokemons.pokemon_entries, input.val());

        resultado.forEach((e) => {
            divBusqueda.append(buscarPokemon(e, update));
            console.log(e);
        });
    });
    return contenedor;
}
