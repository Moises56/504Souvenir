
var productos = [{
    nombreProductos: 'Llavero ',
    urlImagen: '/img/img/imgTegu/img1.png',
    vendedor: 'Jimena R.',
    calificacion: 4,
    ciudad: 'Tegucigalpa',
    precio: 120

},
{
    nombreProductos: 'Taza Artesanal',
    urlImagen: '/img/img/imgTegu/img2.png ',
    vendedor: 'Ángel A.',
    calificacion: 5,
    ciudad: 'Tegucigalpa',
    precio: 380

},
{
    nombreProductos: 'Set de Jarrones',
    urlImagen: '/img/img/imgTegu/img3.jpg',
    vendedor: 'Jimena R.',
    calificacion: 4,
    ciudad: 'Tegucigalpa',
    precio: 260

},
{
    nombreProductos: 'Muñeca de trapo',
    urlImagen: '/img/img/imgTegu/img4.png',
    vendedor: 'Jimena R.',
    calificacion: 2,
    ciudad: 'Tegucigalpa',
    precio: 350

},
{
    nombreProductos: 'Yoyo de madera',
    urlImagen: '/img/img/imgTegu/img5.png',
    vendedor: 'Ángel A.',
    calificacion: 4,
    ciudad: 'Tegucigalpa',
    precio: 200

},
{
    nombreProductos: 'Botas tradicional',
    urlImagen: '/img/img/imgTegu/img6.png',
    vendedor: 'Jimena R.',
    calificacion: 4,
    ciudad: 'Tegucigalpa',
    precio: 400

},
{
    nombreProductos: 'Carro de madera',
    urlImagen: '/img/img/imgTegu/img7.png',
    vendedor: 'Jimena R.',
    calificacion: 3,
    ciudad: 'Tegucigalpa',
    precio: 270

},
{
    nombreProductos: 'Chumpa con logo',
    urlImagen: '/img/img/imgTegu/img8.png',
    vendedor: 'Jimena R.',
    calificacion: 3,
    ciudad: 'Tegucigalpa',
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

    document.getElementById('productosTegu').innerHTML +=
        `<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 mt-5">
        <div class="card tarjeta animated fadeInDown">
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