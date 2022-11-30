const url = 'https://endpoints-service.herokuapp.com/inventario/';

const xhr = new XMLHttpRequest();


function onRequestHandler() {
    if(this.readyState == 4 && this.status == 200){
        const data = JSON.parse(this.response);
        console.log(data);
        const html = document.querySelector("#cartas");

        const tpl = data.map((docs) => `<div class="card">
        <div class="card-header">
          <img  id = "libro" src="${docs.url_i}" />
        </div>
        <div class="card-body">
          <span class="tag tag-teal">${docs.detail}</span>
          <h4>
            ${docs.title}
          </h4>
          <p>
            Escrito por ${docs.author}
          </p>
          <div class="user">
            <a class="fa fa-shopping-cart icono-carrito-1" href="sesion.html" carrito-compra"></a>
            <div class="user-info-1">
              <h5>$${docs.sale_price}</h5>
            </div>
          </div>
        </div>
      </div>`);
    html.innerHTML = tpl;
  }
    }



xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', url);
xhr.send();