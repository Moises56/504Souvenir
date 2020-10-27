
var productos = [{
    nombreProductos: 'Aritos con diseño',
    urlImagen: '/img/img/imgOmoa/img1.png',
    vendedor: 'Carlos H.',
    calificacion: 2,
    ciudad: 'Omoa',
    precio: 200

},
{
    nombreProductos: 'Pulsera blanca',
    urlImagen: '/img/img/imgOmoa/img2.png',
    vendedor: 'Brenda A.',
    calificacion: 1,
    ciudad: 'Omoa',
    precio: 100

},
{
    nombreProductos: 'Pulsera naranja',
    urlImagen: '/img/img/imgOmoa/img3.png',
    vendedor: 'Rita H.',
    calificacion: 3,
    ciudad: 'Omoa',
    precio: 110

},
{
    nombreProductos: 'Jarrón de pez',
    urlImagen: '/img/img/imgOmoa/img4.png',
    vendedor: 'Cristal T.',
    calificacion: 4,
    ciudad: 'Omoa',
    precio: 270

},
{
    nombreProductos: 'Jarrón ',
    urlImagen: '/img/img/imgOmoa/img5.png',
    vendedor: 'Carlos H.',
    calificacion: 3,
    ciudad: 'Omoa',
    precio: 350

},
{
    nombreProductos: 'Jarrón 2 caras',
    urlImagen: '/img/img/imgOmoa/img6.png',
    vendedor: 'Cristal T.',
    calificacion: 4,
    ciudad: 'Omoa',
    precio: 290

},
{
    nombreProductos: 'Llavero ',
    urlImagen: '/img/img/imgOmoa/img7.png',
    vendedor: 'Cristal T.',
    calificacion: 3,
    ciudad: 'Omoa',
    precio: 75

},
{
    nombreProductos: 'Mapa esculpido',
    urlImagen: '/img/img/imgOmoa/img8.png',
    vendedor: 'Carlos H.',
    calificacion: 3,
    ciudad: 'Omoa',
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

    document.getElementById('productosOmoa').innerHTML +=
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