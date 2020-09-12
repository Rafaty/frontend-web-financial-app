
// Simple Datatable

var labels = {
    placeholder: "Pesquisar...",
    perPage: "{select} <label> Por página</label>",
    noRows: "Nenhum registro cadastrado",
    info: "Mostrando de {start} até {end} de {rows} registros",
}

var table = document.querySelector('#table');
var dataTableClient = new simpleDatatables.DataTable(table,{
    labels: labels,

});




