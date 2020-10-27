
var productos = [{
    nombreProductos: 'Sombrero de tucán',
    urlImagen: '/img/img/imgAmapala/img1.png',
    vendedor: 'Silvia M.',
    calificacion: 3,
    ciudad: 'Amapala',
    precio: 150

},
{
    nombreProductos: 'Hamaca',
    urlImagen: '/img/img/imgAmapala/img2.jpg',
    vendedor: 'Sofia F.',
    calificacion: 5,
    ciudad: 'Amapala',
    precio: 300

},
{
    nombreProductos: 'Pulsera con diseño de iglesia',
    urlImagen: '/img/img/imgAmapala/img3.png',
    vendedor: 'Sofia F.',
    calificacion: 4,
    ciudad: 'Amapala',
    precio: 120

},
{
    nombreProductos: 'Set de 4 pulseras con diseño',
    urlImagen: '/img/img/imgAmapala/img4.png',
    vendedor: 'Silvia M.',
    calificacion: 2,
    ciudad: 'Amapala',
    precio: 400

},
{
    nombreProductos: 'Baúl tallado de madera',
    urlImagen: '/img/img/imgAmapala/img5.jpg',
    vendedor: 'Silvia M.',
    calificacion: 3,
    ciudad: 'Amapala',
    precio: 700

},
{
    nombreProductos: 'Casa miniatura',
    urlImagen: '/img/img/imgAmapala/img6.jpg',
    vendedor: 'Sofia F.',
    calificacion: 4,
    ciudad: 'Amapala',
    precio: 250

},
{
    nombreProductos: 'Collar de caracolas',
    urlImagen: '/img/img/imgAmapala/img7.png',
    vendedor: 'Silvia M.',
    calificacion: 3,
    ciudad: 'Amapala',
    precio: 180

},
{
    nombreProductos: 'Set de adornos de barro ',
    urlImagen: '/img/img/imgAmapala/img8.jpg',
    vendedor: 'Sofia F.',
    calificacion: 3,
    ciudad: 'Amapala',
    precio: 300

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

    document.getElementById('productosAmapala').innerHTML +=
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