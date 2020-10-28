

var productos = [{
    nombreProductos: 'Pulsera de conchas',
    urlImagen: '/img/img/imgCeiba/img1.jpg',
    vendedor: 'Jimena R.',
    calificacion: 4,
    ciudad: 'La Ceiba',
    precio: 120

},
{
    nombreProductos: 'Utencilios de cocina',
    urlImagen: '/img/img/imgCeiba/img2.png ',
    vendedor: 'Ángel A.',
    calificacion: 5,
    ciudad: 'La Ceiba',
    precio: 380

},
{
    nombreProductos: 'Bolso con diseño blanco',
    urlImagen: '/img/img/imgCeiba/img3.png',
    vendedor: 'Jimena R.',
    calificacion: 4,
    ciudad: 'La Ceiba',
    precio: 260

},
{
    nombreProductos: 'Set de aritos con cadena',
    urlImagen: '/img/img/imgCeiba/img4.png',
    vendedor: 'Jimena R.',
    calificacion: 2,
    ciudad: 'La Ceiba',
    precio: 350

},
{
    nombreProductos: 'Pulsera con caracolas',
    urlImagen: '/img/img/imgCeiba/img5.png',
    vendedor: 'Ángel A.',
    calificacion: 4,
    ciudad: 'La Ceiba',
    precio: 200

},
{
    nombreProductos: 'Bolso con diseño del mar',
    urlImagen: '/img/img/imgCeiba/img6.png',
    vendedor: 'Jimena R.',
    calificacion: 4,
    ciudad: 'La Ceiba',
    precio: 400

},
{
    nombreProductos: 'Camisa multicolor',
    urlImagen: '/img/img/imgCeiba/img7.png',
    vendedor: 'Jimena R.',
    calificacion: 3,
    ciudad: 'La Ceiba',
    precio: 270

},
{
    nombreProductos: 'Set pulseras de color',
    urlImagen: '/img/img/imgCeiba/img8.png',
    vendedor: 'Jimena R.',
    calificacion: 3,
    ciudad: 'La Ceiba',
    precio: 230

}

];

// productos.use('/tarjeta.js');
function generaProductos() {
productos.forEach(function (products) {
   let estrellas = '';

   for(let i=0; i< products.calificacion; i++){
       estrellas += '<i style="color:rgb(255, 145, 0);"    class="fas fa-star"></i>';
   }
   for(let i=0; i< 5-products.calificacion; i++){
    estrellas += '<i class="far fa-star"></i>';
}
//    <i class="far fa-star"></i>

    document.getElementById('productosCeiba').innerHTML +=
        `<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 mt-5">
        <div class="card tarjeta">
            <img class="card-img-top " src="${products.urlImagen}" alt="">
            <div class="card-body contenido price">
            <h5 class="card-title" style="color:rgb(255, 145, 0);">${products.nombreProductos}</h5>
                <span class="card-text">Lps.${products.precio}</span>
                <span class="card-text">${products.vendedor}</span>
                <span class="card-text">Ciudad: ${products.ciudad}</span>
                <div class="">
                    ${estrellas}
                </div>
                <div class="botones">
                    <button>Comprar</button>
                    <button class="btn cart-btn">Agregar</button>
                </div>
            </div>
        </div>
    </div>

    
`;
});
}
generaProductos();



function validarCampoVacio(id) {
let campo = documenetElementById(id);

if (campo.value == '') {
    campo.classList.remove('input-success');
    campo.classList.add('input-error');
} else {
    campo.classList.remove('input-error');
    campo.classList.add('input-success');
}
}



{/* <div class="envoltura">
    <div class="envoltura tarjeta">
        <img src="${products.urlImagen}" alt="">
        <div class="contenido">
            <div class="fila col-2">
                <div class="details">
                    <span>${products.nombreProductos}</span>
                    <p>${products.vendedor}</p>
                    <p>Ciuda: ${products.ciudad}</p>
                </div>
                <div class="price">${products.precio}</div>
            </div>
            <div class="botones">
                <button>Comprar</button>
                <button class="cart-btn">Agregar</button>
            </div>
        </div>
    </div> */}