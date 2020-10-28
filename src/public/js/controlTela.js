var productos = [{
    nombreProductos: 'Atrapasueños de Plumas',
    urlImagen: '/img/img/imgTela/img1.jpg',
    vendedor: 'Ester R.',
    calificacion: 5,
    ciudad: 'Tela',
    precio: 250

},
{
    nombreProductos: 'Bolso de Tela',
    urlImagen: '/img/img/imgTela/img2.jpg',
    vendedor: 'Allison S.',
    calificacion: 4,
    ciudad: 'Tela',
    precio: 200

},
{
    nombreProductos: 'Árbol de Coral',
    urlImagen: '/img/img/imgTela/img3.jpg',
    vendedor: 'Sherlyn S.',
    calificacion: 5,
    ciudad: 'Tela',
    precio: 370

},
{
    nombreProductos: 'Cofre de Junco',
    urlImagen: '/img/img/imgTela/img4.jpg',
    vendedor: 'Erick N.',
    calificacion: 2,
    ciudad: 'Tela',
    precio: 100

},
{
    nombreProductos: 'Collar de Alambre',
    urlImagen: '/img/img/imgTela/img5.jpg',
    vendedor: 'Meren O.',
    calificacion: 5,
    ciudad: 'Tela',
    precio: 150

},
{
    nombreProductos: 'Llaveros de Madera',
    urlImagen: '/img/img/imgTela/img6.jpg',
    vendedor: 'Patricia.',
    calificacion: 3,
    ciudad: 'Tela',
    precio: 80

},
{
    nombreProductos: 'Morral de Cuero',
    urlImagen: '/img/img/imgTela/img7.jpg',
    vendedor: 'Luis E.',
    calificacion: 5,
    ciudad: 'Tela',
    precio: 480

},
{
    nombreProductos: 'Sirena de Madera',
    urlImagen: '/img/img/imgTela/img8.jpg',
    vendedor: 'Sheryn S.',
    calificacion: 5,
    ciudad: 'Tela',
    precio: 320

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

    document.getElementById('productosTela').innerHTML +=
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