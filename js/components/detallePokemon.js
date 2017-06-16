
'use strict';
const detallePokemon= (update) => {
const divModal=$('<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel"></div>');
const divDialog=$('<div class="modal-dialog" role="document"></div>');
divModal.append(divDialog);
const divContenido=$('<div class="modal-content"></div>');
divDialog.append(divContenido);
const divHeader=$('<div class="modal-header"></div>');
divContenido.append(divHeader);
const titulo=$('<h4 class="modal-title" id="gridSystemModalLabel">Pikachu</h4>');
divHeader.append(titulo);
const cerrar=$('<button class="close" data-dismiss="modal" arial-label="Close"></button>');
divHeader.append(cerrar);

const modalBody=$('<div class="modal-body"></div>');
divContenido.append(modalBody);
const row1=$('<div class="row"></div>');
modalBody.append(row1);
const col1=$('<div class="col-sm-4 imagen"></div>');
row1.append(col1);
const imagen=$('<img class="img-responsive" src="img/015.png" alt="">');
col1.append(imagen);
const col2=$('<div class="col-sm-8 descripcion"></div>');
row1.append(col2);
const detalle=$(' <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>');
col2.append(detalle);
console.log("funcion");
  return divModal;
}
