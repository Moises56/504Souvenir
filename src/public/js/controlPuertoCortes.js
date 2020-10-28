
var productos = [{
    nombreProductos: 'Canastas de Junco',
    urlImagen: '/img/img/imgPuertoCortes/img1.jpg',
    vendedor: 'Carlos H.',
    calificacion: 2,
    ciudad: 'PuertoCortes',
    precio: 60

},
{
    nombreProductos: 'Tortilleras',
    urlImagen: '/img/img/imgPuertoCortes/img2.jpg',
    vendedor: 'Brenda A.',
    calificacion: 1,
    ciudad: 'PuertoCortes',
    precio: 120

},
{
    nombreProductos: 'Mascarilla con diseño',
    urlImagen: '/img/img/imgPuertoCortes/img3.jpg',
    vendedor: 'Rita H.',
    calificacion: 3,
    ciudad: 'PuertoCortes',
    precio: 350

},
{
    nombreProductos: 'Frutas de Croché',
    urlImagen: '/img/img/imgPuertoCortes/img4.jpg',
    vendedor: 'Cristal T.',
    calificacion: 4,
    ciudad: 'PuertoCortes',
    precio: 800

},
{
    nombreProductos: 'Destapador',
    urlImagen: '/img/img/imgPuertoCortes/img5.jpg',
    vendedor: 'Carlos H.',
    calificacion: 3,
    ciudad: 'PuertoCortes',
    precio: 80

},
{
    nombreProductos: 'Caracol',
    urlImagen: '/img/img/imgPuertoCortes/img6.jpg',
    vendedor: 'Cristal T.',
    calificacion: 4,
    ciudad: 'PuertoCortes',
    precio: 1200

},
{
    nombreProductos: 'Maracas',
    urlImagen: '/img/img/imgPuertoCortes/img7.jpg',
    vendedor: 'Cristal T.',
    calificacion: 3,
    ciudad: 'SanPedroSula',
    precio: 240

},
{
    nombreProductos: 'Muñequita de Junco',
    urlImagen: '/img/img/imgPuertoCortes/img8.jpg',
    vendedor: 'Carlos H.',
    calificacion: 3,
    ciudad: 'PuertoCortes',
    precio: 100

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

    document.getElementById('productosPuertoCortes').innerHTML +=
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