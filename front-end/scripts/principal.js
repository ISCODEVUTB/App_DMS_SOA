const cartas = document.getElementById('cartas')
const container_tabla_footer = document.getElementById('container-footer')
const template_cartas = document.getElementById('template-cartas').content
const template_final = document.getElementById('template-final').content
const template_tabla = document.getElementById('template-tabla').content
const pintar_footer = document.getElementById('pintar-footer')
const fragment = document.createDocumentFragment()

let carrito = {}

document.addEventListener("DOMContentLoaded", () => {
  fetchData()
})

cartas.addEventListener('click', e =>{
  addcarrito(e);
})

container_tabla_footer.addEventListener('click', e => {
  baccion(e);
})

const fetchData = async () => {
  try {
      const res = await fetch('https://endpoints-service.herokuapp.com/inventario/')
      const data = await res.json();
      paintCard(data)
  } catch (error) {
      console.log(error);
  }
}

const paintCard = data => {
  data.forEach(producto => {
      template_cartas.querySelector('span').textContent = producto.detail
      template_cartas.querySelector('h4').textContent = producto.title
      template_cartas.querySelector('h5').textContent = producto.sale_price
      template_cartas.querySelector('p').textContent = producto.author
      template_cartas.querySelector('img').setAttribute("src",producto.url_i)
      template_cartas.querySelector('.icono-carrito').dataset.id = producto.id

      const clone = template_cartas.cloneNode(true)
      fragment.appendChild(clone)
  });
  cartas.appendChild(fragment)
}


const addcarrito = e => {

  if(e.target.classList.contains('icono-carrito')){
    setcarrito(e.target.parentElement);
  }
  e.stopPropagation()
}

const setcarrito = objeto =>{
  const producto={
    id: objeto.querySelector('.icono-carrito').dataset.id,
    title: objeto.querySelector('h4').textContent,
    sale_price: objeto.querySelector('h5').textContent,
    cantidad : 1
  }

  if(carrito.hasOwnProperty(producto.id)){
    producto.cantidad = carrito[producto.id].cantidad + 1
  }

  carrito[producto.id] = {...producto}
  painCart()


}

const painCart = () => {
  console.log(carrito);
  container_tabla_footer.innerHTML = ''
  Object.values(carrito).forEach(producto => {
    template_tabla.querySelector('th').textContent = producto.id
    template_tabla.querySelectorAll('td')[0].textContent = producto.title
    template_tabla.querySelectorAll('td')[1].textContent = producto.cantidad
    template_tabla.querySelector('.btn-info').dataset.id = producto.id
    template_tabla.querySelector('.btn-danger').dataset.id = producto.id
    template_tabla.querySelector('span').textContent = producto.sale_price * producto.cantidad

    const clone = template_tabla.cloneNode(true)
    fragment.appendChild(clone)
  })
  container_tabla_footer.appendChild(fragment)

  paintFooter()
}

const paintFooter = () => {
  pintar_footer.innerHTML = ''
  if(Object.keys(carrito).length === 0){
    pintar_footer.innerHTML = `
    <th scope="row" colspan="5">Agregar</th>
    `
    return
  }

  const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad,0)
  const nPrecio = Object.values(carrito).reduce((acc, {cantidad,sale_price}) => acc + cantidad * sale_price,0)
  
  template_final.querySelectorAll('td')[0].textContent = nCantidad
  template_final.querySelector('span').textContent = nPrecio

  const clone = template_final.cloneNode(true)
  fragment.appendChild(clone)
  pintar_footer.appendChild(fragment)

  const vaciar = document.getElementById('vaciar-carrito')
  
  vaciar.addEventListener('click', () => {
    console.log(nPrecio);

    if(nPrecio === 102000){
      window.location.href = "https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=227181084-38c75dd2-5c3a-46b5-a814-baa90e165802"
    } else if(nPrecio === 64000){
      window.location.href = "https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=227181084-9e33ea94-ce7e-435c-bd55-8ee45b92d019"
    } else if(nPrecio === 227000){
      window.location.href = "https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=227181084-cca03a91-0c8b-473d-b3be-d65febaa6db7"
    }  else if (nPrecio != 102000 || nPrecio != 64000 || nPrecio != 227000 ){
      alert("Error FAILED-CONNECTION")
    }
    
    
  })
}

const baccion = e => {
  if(e.target.classList.contains('btn-info')) {
    const producto = carrito[e.target.dataset.id]
    producto.cantidad = carrito[e.target.dataset.id].cantidad + 1
    carrito[e.target.dataset.id] = {...producto}
    painCart()
  }

  if(e.target.classList.contains('btn-danger')){
    const producto = carrito[e.target.dataset.id]
    producto.cantidad = carrito[e.target.dataset.id].cantidad - 1
    if(producto.cantidad === 0){
      delete carrito[e.target.dataset.id]
    }
    painCart()

  }
  e.stopPropagation()
}