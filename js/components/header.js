'use strict';
const Header = (update) => {
  const header = $("<header></header>");
  const container=$("<div class='container'></div>");
  const title=$('<h1 class="text-center red"> Pokedex </h1>');
  container.append(title);
  header.append(container);
  return header;
}
