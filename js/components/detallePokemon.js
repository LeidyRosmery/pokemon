'use strict';
const detallePokemon = (update) => {
    const modalFade = $('<div class="modal fade" id="ventana1"></div>');
    const divDialog = $('<div class="modal-dialog"></div>');
    modalFade.append(divDialog);
    const divContenido = $('<div class="modal-content"></div>');
    divDialog.append(divContenido);
    const divHeader = $('<div class="modal-header"></div>');
    divContenido.append(divHeader);
    const cerrar = $('<button type="button" class="close" data-dismiss="modal" aria-hidden="true" name="button">&times;</button>');
    divHeader.append(cerrar);
    const titulo = $('<h4 class="modal-title">' + state.selectedPokemon.name + '</h4>');
    divHeader.append(titulo);
    const modalBody = $('<div class="modal-body"></div>');
    divContenido.append(modalBody);
    const row1 = $('<div class="row"></div>');
    modalBody.append(row1);
    const col1 = $('<div class="col-xs-4"></div>');
    row1.append(col1);
    const col2 = $('<div class="col-xs-8"></div>');
    row1.append(col2);
    const divcol=$('<div class="celeste"></div>');
    col2.append(divcol);
    const pokedex=$('<div class="pokedex"></div>');
    col1.append(pokedex);
    const imagen = $('<img class="img-pokemon" src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + state.selectedPokemon.entry_number + '.png ">')
    pokedex.append(imagen);
    const estructura= $(' <img class="estructura" src="img/pokmon.png" alt="">')
    pokedex.append(estructura);
    const caracteristicas=$('<div class="caracteristicas">');
    pokedex.append(caracteristicas);
    const opciones=$('<div class="opcion-pokemon" >');
    caracteristicas.append(opciones);

      const pokebola=$('<img class="iconos-pokedex" src="icon/pokeball_gray.png" alt="">');
      const corazon=$('<img class="iconos-pokedex" src="icon/valentines-heart.png" alt="">');
      const data=$('<img class="iconos-pokedex" src="icon/data.png" alt="">');
     opciones.append(pokebola);
     opciones.append(corazon);
      opciones.append(data);

    const debilidades = [];

    $.getJSON("http://pokeapi.co/api/v2/pokemon-species/" + state.selectedPokemon.entry_number, (response) => {
        var textDescripciom = $("<p class='descripcion'> Descripcion :" + response.flavor_text_entries[3].flavor_text + "</p>");
        col2.append(textDescripciom);
        var categoria = $("<p class='categoria'> Categoria :" + response.genera[2].genus + "</p>");
        divcol.append(categoria);
    });
    $.getJSON("http://pokeapi.co/api/v2/pokemon/" + state.selectedPokemon.entry_number, (response) => {
        var peso = $("<p class='peso'> Peso : " + response.weight + "</p>");
        divcol.append(peso);
        var habilidad = $("<p class='habilidad'> Habilidad :" + response.abilities[0].ability.name + "</p>");
        divcol.append(habilidad);

        response.types.forEach(function(e) {
            var tipos = $("<p class='tipos'> Tipos :" + e.type.name + "</p>");
            col2.append(tipos);
            debilidades.push(e.type.url);
            console.log(debilidades);
        });
        var peso = $("<p class='altura'>Altura :" + response.height + "</p>");
        divcol.append(peso);
        const repetido = [];
    });

    debilidades.forEach(function(e) {
        console.log('hola1');
        $.getJSON(e, (response) => {
            console.log('hola2');
            response.damage_relations.double_damage_from.forEach(function(elemento) {
                console.log('hola3');
                if ((repetido.indexOf(elemento.name)) == -1) {
                    var debilidad = $("<p class='debilidad'> debilidades :" + elemento.name + "</p>");
                    col2.append(debilidad);
                    repetido.push(elemento.name);
                    console.log(repetido.length);
                }
            });
        });
    });



    cerrar.on('click',(e) => {
      e.preventDefault();
      state.selectedPokemon = null;
      update();
    })

    return modalFade;
}
