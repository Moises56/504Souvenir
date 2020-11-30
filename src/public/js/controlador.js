// require('./tarjeta');

var modeloProductos = [{
        nombreProductos: 'Carrito de madera',
        urlImagen: '/img/img/imgPrin/img1.png',
        vendedor: 'Elena M.',
        calificacion: 2,
        ciudad: 'Tegucigalapa',
        precio: 150

    },
    {
        nombreProductos: 'Pulsera y aritos',
        urlImagen: '/img/img/imgPrin/img2.png',
        vendedor: 'Marcos H.',
        calificacion: 3,
        ciudad: 'Omoa',
        precio: 300

    },
    {
        nombreProductos: 'Concha con diseño',
        urlImagen: '/img/img/imgPrin/img3.jpg',
        vendedor: 'Cesar P.',
        calificacion: 3,
        ciudad: 'Roatan',
        precio: 550

    },
    {
        nombreProductos: 'Chal tejido',
        urlImagen: '/img/img/imgPrin/img4.jpg',
        vendedor: 'Rita C.',
        calificacion: 4,
        ciudad: 'Tegucigalapa',
        precio: 250

    },
    {
        nombreProductos: 'Zapatos con diseño',
        urlImagen: '/img/img/imgPrin/img5.jpg',
        vendedor: 'Rebeca K.',
        calificacion: 5,
        ciudad: 'Comayagua',
        precio: 300

    },
    {
        nombreProductos: 'Cartera Multicolor',
        urlImagen: '/img/img/imgPrin/img6.jpg',
        vendedor: 'Sofia P.',
        calificacion: 4,
        ciudad: 'Tela',
        precio: 190

    },
    {
        nombreProductos: 'Set de aritos',
        urlImagen: '/img/img/imgPrin/img7.jpg',
        vendedor: 'Cristal Y.',
        calificacion: 3,
        ciudad: 'Copán',
        precio: 180

    },
    {
        nombreProductos: 'Cuadro tallado',
        urlImagen: '/img/img/imgPrin/img8.jpg',
        vendedor: 'Rigo J.',
        calificacion: 3,
        ciudad: 'Danlí',
        precio: 480

    }

];

// productos.use('/tarjeta.js');
function generaProductos() {
    modeloProductos.forEach(function (products) {
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

//?CARRITO COMPRAS

let carrito = {}
const detectarBotones = (modeloProductos) => {
    const botones = document.querySelectorAll('.botones button')

    botones.forEach(btn => {
        btn.addEventListener('click', () => {
             console.log('Hello Click')
            console.log(btn.dataset.id)
            const producto = modeloProductos.find(item => item.id === parseInt(btn.dataset.id))
            //console.log(producto)
            producto.cantidad = 1
            if (carrito.hasOwnProperty(producto.id)) {
                // console.log('existe')
                // producto.cantidad ++
                producto.cantidad = carrito[producto.id].cantidad + 1
                
            }
            carrito[producto.id] = {...producto}
            console.log(carrito)
            pintarCarrito()

        })
    })
    //console.log(botones)
}

const items = document.querySelector('#items')

const pintarCarrito = () => {
    // console.log(Object.values(carrito))

    items.innerHTML = ''

    const template = document.querySelector('#template-carrito').content
    const fragment = document.createDocumentFragment()

    Object.values(carrito).forEach(producto => {
       // console.log(producto)
        template.querySelector('th').textContent = producto.id
        template.querySelectorAll('td')[0].textContent = producto.title
        template.querySelectorAll('td')[1].textContent = producto.cantidad
        template.querySelector('span').textContent = producto.precio*producto.cantidad
    
        //Botones + -
        template.querySelector('.btn-info').dataset.id = producto.id
        template.querySelector('.btn-danger').dataset.id = producto.id

        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })

    items.appendChild(fragment)

    pintartFooter()
    accionBotones()
}

const footer = document.querySelector('#footer-carrito')
const pintartFooter = () => {
    footer.innerHTML = ''
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío con innerHTML</th>`
        return
    }

    const template = document.querySelector('#template-footer').content
    const fragment = document.createDocumentFragment()

    //sumar cantidad & sumar totales
    const  nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
    const nPrecio =  Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad*precio, 0)

    template.querySelectorAll('td')[0].textContent = nCantidad
    template.querySelector('span').textContent = nPrecio

    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
        carrito = {}
        pintarCarrito() //pintar nuevamente el carrito
    })

    // console.log(nPrecio)
}


const accionBotones = () => {
    const botonesAgregar =document.querySelectorAll('#items .btn-info')
    const botonesEliminar =document.querySelectorAll('#items .btn-danger')

    botonesAgregar.forEach(btn => {
        btn.addEventListener('click', () => {
            // console.log('agregando...')
            console.log(btn.dataset.id)
            const producto = carrito[btn.dataset.id]
            producto.cantidad ++
            carrito[btn.dataset.id] = {...producto}
            pintarCarrito()

        })
    })

    botonesEliminar.forEach(btn => {
        btn.addEventListener('click', () => {
            // console.log('Eliminando...')
            console.log(btn.dataset.id)
            const producto = carrito[btn.dataset.id]
            producto.cantidad --
            if(producto.cantidad === 0){
                delete carrito[btn.dataset.id]
            }else{
                carrito[btn.dataset.id] = {...producto}
            }
            pintarCarrito()

        })
    })
}