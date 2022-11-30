const url = 'https://endpoints-service.herokuapp.com/inventario/';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState == 4 && this.status == 200){
        const data = JSON.parse(this.response);
        console.log(data);
        const html = document.querySelector("#tabla-container");

        const tpl = data.map((docs) => `<tr>
        <th id="id-doc">${docs.id}</th>
        <td><img class="imageneslibros" src="${docs.url_i}" alt=""></td>
        <td id="nomb">${docs.title}</td>
        <td id="pcom">${docs.purchase_price}</td>
        <td >${docs.sale_price}</td>
        <td >${docs.amount}</td>
        <td><button type="button" id="boton-eliminar" onclick="borrar()" data-id="${docs.id}" class="boton-eliminar">Eliminar</button></td>
      </tr>`);
    html.innerHTML = tpl;

    }
}

xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', url);
xhr.send();


