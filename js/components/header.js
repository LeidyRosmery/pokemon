'use strict';
const Header = (update) => {
  const header = $("<header></header>");
  const container=$("<div class='container'></div>");
  const title=$('<h1 class="text-center red"> Pokedex </h1>');
  const contenedor=$('<div class="flex"></div>');
  const input = $("<input class='text-center' type='text'/> ");
  const botton=$('<button class="btn btn-lg btn-success" type="button" name="button">A-Z</button>');

  container.append(title);
  contenedor.append(input);
  contenedor.append(botton);
  container.append(contenedor);
  header.append(container);
  return header;
}
