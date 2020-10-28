
var productos = [{
    nombreProductos: 'Camiseta',
    urlImagen: '/img/img/imgRoatan/img1.jpg',
    vendedor: 'Joseph S.',
    calificacion: 3,
    ciudad: 'Roatan',
    precio: 250

},
{
    nombreProductos: 'Cuadro Tortuga',
    urlImagen: '/img/img/imgRoatan/img2.jpg',
    vendedor: 'Allison S.',
    calificacion: 2,
    ciudad: 'Roatan',
    precio: 100

},
{
    nombreProductos: 'Delfín de Madera',
    urlImagen: '/img/img/imgRoatan/img3.jpg',
    vendedor: 'Mario R.',
    calificacion: 5,
    ciudad: 'Roatan',
    precio: 200

},
{
    nombreProductos: 'Forro de Cuero',
    urlImagen: '/img/img/imgRoatan/img4.jpg',
    vendedor: 'Erick N.',
    calificacion: 4,
    ciudad: 'Roatan',
    precio: 520

},
{
    nombreProductos: 'Maracas',
    urlImagen: '/img/img/imgRoatan/img5.jpg',
    vendedor: 'Humberto I.',
    calificacion: 3,
    ciudad: 'Roatan',
    precio: 100

},
{
    nombreProductos: 'Mujer Tallada',
    urlImagen: '/img/img/imgRoatan/img6.jpg',
    vendedor: 'Patricia.',
    calificacion: 4,
    ciudad: 'Roatan',
    precio: 460

},
{
    nombreProductos: 'Placa Metálica',
    urlImagen: '/img/img/imgRoatan/img7.jpg',
    vendedor: 'Luis E.',
    calificacion: 5,
    ciudad: 'Roatan',
    precio: 350

},
{
    nombreProductos: 'Vasos Metálicos',
    urlImagen: '/img/img/imgRoatan/img8.jpg',
    vendedor: 'Sheryn S.',
    calificacion: 4,
    ciudad: 'Roatan',
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

    document.getElementById('productosRoatan').innerHTML +=
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