// require('./tarjeta');

var productos = [{
        nombreProductos: 'producto1',
        urlImagen: '/img/img/img3.jpg',
        vendedor: 'vendedor1',
        calificacion: 1,
        ciudad: 'Tegucigalapa',
        precio: 150

    },
    {
        nombreProductos: 'producto2',
        urlImagen: '/img/img/img4.jpg',
        vendedor: 'vendedor2',
        calificacion: 2,
        ciudad: 'Copan',
        precio: 150

    },
    {
        nombreProductos: 'producto3',
        urlImagen: '/img/img/img5.jpg',
        vendedor: 'vendedor3',
        calificacion: 3,
        ciudad: 'Roatan',
        precio: 110

    },
    {
        nombreProductos: 'producto4',
        urlImagen: '/img/img/img36.jpg',
        vendedor: 'vendedor4',
        calificacion: 4,
        ciudad: 'Tegucigalapa',
        precio: 250

    },
    {
        nombreProductos: 'producto5',
        urlImagen: '/img/img/img13.jpg',
        vendedor: 'vendedor5',
        calificacion: 5,
        ciudad: 'Copan',
        precio: 150

    },
    {
        nombreProductos: 'producto6',
        urlImagen: '/img/img/img22.jpg',
        vendedor: 'vendedor6',
        calificacion: 4,
        ciudad: 'Tela',
        precio: 100

    },
    {
        nombreProductos: 'producto7',
        urlImagen: '/img/img/img21.jpg',
        vendedor: 'vendedor7',
        calificacion: 3,
        ciudad: 'Copan',
        precio: 50

    },
    {
        nombreProductos: 'producto7',
        urlImagen: '/img/img/img33.jpg',
        vendedor: 'vendedor7',
        calificacion: 3,
        ciudad: 'Copan',
        precio: 50

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

        document.getElementById('productos').innerHTML +=
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