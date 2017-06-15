'use strict';
const detallePokemon = (data, update) => {
    const item = $('<div class="row"></div>');
    const col1 = $('<div class="col s9"></div>');
    const spanNombre = $('<p><strong>' + (data.name).toUpperCase() + '</strong></p>');
    const span = $('<p>' + data.district + '</p>');
    const spanDireccion = $('<p>' + data.address + '</p>');
    const col2 = $('<div class="col s3 div-map"></div>');
    const iconMap = $('<i class="fa fa-map-marker mapIcon" aria-hidden="true"></i>');

    col1.append(spanNombre);
    col1.append(span);
    col1.append(spanDireccion);
    item.append(col1);

    col2.append(iconMap);
    item.append(col2);
    imgPokemon.on('click', (e) => {
        e.preventDefault();
        state.selectedPokemon = data;
        update();
    });
    return item;
}
