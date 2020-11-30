let carrito = {}

const detectarBotones = (note) => {
    const botones = document.querySelectorAll('.price')

    botones.forEach(btn => {
        btn.addEventListener('click', () => {
            // console.log('Hello Click')
            console.log(btn.dataset.id)
            const producto = data.find(item => item.id === parseInt(btn.dataset.id))
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