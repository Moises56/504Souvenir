var productos = [{
    nombreProductos: 'Aves de Barro',
    urlImagen: '/img/img/imgComayagua/img1.jpg',
    vendedor: 'Joseph S.',
    calificacion: 3,
    ciudad: 'Comayagua',
    precio: 250

},
{
    nombreProductos: 'Botella Decorada',
    urlImagen: '/img/img/imgComayagua/img2.jpg',
    vendedor: 'Allison S.',
    calificacion: 2,
    ciudad: 'Comayagua',
    precio: 150

},
{
    nombreProductos: 'Cofre de Madera',
    urlImagen: '/img/img/imgComayagua/img3.jpg',
    vendedor: 'Meren O.',
    calificacion: 5,
    ciudad: 'Comayagua',
    precio: 350

},
{
    nombreProductos: 'Queco de Barro',
    urlImagen: '/img/img/imgComayagua/img4.jpg',
    vendedor: 'Erick N.',
    calificacion: 2,
    ciudad: 'Comayagua',
    precio: 120

},
{
    nombreProductos: 'Guitarras',
    urlImagen: '/img/img/imgComayagua/img5.jpg',
    vendedor: 'Humberto I.',
    calificacion: 7,
    ciudad: 'Comayagua',
    precio: 430

},
{
    nombreProductos: 'Iguana de Barro',
    urlImagen: '/img/img/imgComayagua/img6.jpg',
    vendedor: 'Patricia R.',
    calificacion: 4,
    ciudad: 'Comayagua',
    precio: 460

},
{
    nombreProductos: 'Pimienteros',
    urlImagen: '/img/img/imgComayagua/img7.jpg',
    vendedor: 'Luis E.',
    calificacion: 5,
    ciudad: 'Comayagua',
    precio: 350

},
{
    nombreProductos: 'Pintura Oleo',
    urlImagen: '/img/img/imgComayagua/img8.jpg',
    vendedor: 'Sheryn S.',
    calificacion: 4,
    ciudad: 'Comayagua',
    precio: 350

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

    document.getElementById('productosComayagua').innerHTML +=
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