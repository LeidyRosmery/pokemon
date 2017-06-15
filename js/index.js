'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root)));
 /*if (state.selectedPokemon == null) {
    wrapper.append(Grilla( _ => {
      render(root);
    }));
  } else {
    wrapper.append(detallePokemon( _ => {
      render(root);
    }));
  }*/
  root.append(wrapper);
}

const state = {
  pokemons: null,
  selectedPokemon: null
};
// inicializndo ready

$( _ => {
  getJSON("http://pokeapi.co/api/v2/pokedex/1/", (err, json) => {
    if (err) { return alert(err.message);}
    state.pokemons = json;
    const root = $('.root');
    render(root);
    console.log(state.pokemons.pokemon_entries[8].pokemon_species.name);
  });
});
