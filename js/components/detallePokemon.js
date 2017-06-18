'use strict';
const detallePokemon= (update) => {
const modalFade=$('<div class="modal fade" id="ventana1"></div>');
const divDialog=$('<div class="modal-dialog"></div>');
modalFade.append(divDialog);
const divContenido=$('<div class="modal-content"></div>');
divDialog.append(divContenido);
const divHeader=$('<div class="modal-header"></div>');
divContenido.append(divHeader);
const cerrar=$('<button type="button" class="close" data-dismiss="modal" aria-hidden="true" name="button">&times;</button>');
divHeader.append(cerrar);
const titulo=$('<h4 class="modal-title">Encabezado de nuestra ventana</h4>');
divHeader.append(titulo);
const modalBody=$('<div class="modal-body"></div>');
divContenido.append(modalBody);
const row1=$('<div class="row"></div>');
modalBody.append(row1);
const col1=$('<div class="col-xs-4"></div>');
row1.append(col1);
const col2=$('<div class="col-xs-8"></div>');
row1.append(col2);
const imagen=$('<img class="img-responsive" src="img/015.png" alt="">');
col1.append(imagen);
const detalle=$(' <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>');
col2.append(detalle);
console.log("funcion");
  return modalFade;
}
