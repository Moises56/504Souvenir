//global
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');

//Divs
var pro1DIV = document.getElementById("pro1DIV");
var pro2DIV = document.getElementById("pro2DIV");
var pro3DIV = document.getElementById("pro3DIV");

//informacion
var prod1 = [{
        name: 'pro1',
        price: 1
    },
    {
        name: 'pro2',
        price: 1
    },
    {
        name: 'pro3',
        price: 1
    },
    {
        name: 'pro4',
        price: 1
    },
    {
        name: 'pro5',
        price: 1
    }
];

var prod2 = [{
        name: 'pro1',
        price: 1
    },
    {
        name: 'pro2',
        price: 1
    },
    {
        name: 'pro3',
        price: 1
    },
    {
        name: 'pro4',
        price: 1
    },
    {
        name: 'pro5',
        price: 1
    }
];

var prod3 = [{
        name: 'pro1',
        price: 1
    },
    {
        name: 'pro2',
        price: 1
    },
    {
        name: 'pro3',
        price: 1
    },
    {
        name: 'pro4',
        price: 1
    },
    {
        name: 'pro5',
        price: 1
    }
];

//HTML
function HTMLpro1Product(con) {
    let URL = `img/productos/pro1${con}.webp`;
    let btn = `btnPro1${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <p class="card-text">${PRO1[con-1].name}</p>
                    <p class="card-text">Precio: ${PRO1[con-1].price}.00</p>
                    <div class="d-flex justify-content-beteween align-items-center">
                     <div class="brn-group">
                        <button type="button" onclick="cart2('${PRO1[con-1].name}','${PRO1[con-1].price}','${URL}','${con}',${btn})" class="btn btn-sm btn-outline-secondary">Agregar Al Carrito</button>
                     </div>
                    <small class="text-muted">Envio Gratis</small>
                 </div>
               </div>
            </div>
       </div>
    `;
};
functionHTMLpro2Product(con) {
    let URL = `img/productos/pro2${con}.webp`;
    let btn = `btnPro2${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <p class="card-text">${PRO2[con-1].name}</p>
                    <p class="card-text">Precio: ${PRO2[con-1].price}.00</p>
                    <div class="d-flex justify-content-beteween align-items-center">
                      <div class="brn-group">
                        <button type="button" onclick="cart2('${PRO2[con-1].name}','${PRO2[con-1].price}','${URL}','${con}',${btn})" class="btn btn-sm btn-outline-secondary">Agregar Al Carrito</button>
                     </div>
                    <small class="text-muted">Envio Gratis</small>
                 </div>
               </div>
            </div>
       </div>
    `;
};

function HTMLpro3Product(con) {
    let URL = `img/productos/pro3${con}.webp`;
    let btn = `btnPro3${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <p class="card-text">${PRO3[con-1].name}</p>
                    <p class="card-text">Precio: ${PRO3[con-1].price}.00</p>
                    <div class="d-flex justify-content-beteween align-items-center">
                      <div class="brn-group">
                        <button type="button" onclick="cart2('${PRO3[con-1].name}','${PRO3[con-1].price}','${URL}','${con}',${btn})" class="btn btn-sm btn-outline-secondary">Agregar Al Carrito</button>
                     </div>
                    <small class="text-muted">Envio Gratis</small>
                 </div>
               </div>
            </div>
       </div>
    `;
};

//?Animaciones
function animation() {
    const toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000
    });
    toast({
        type: 'success',
        title: 'Añadido Al Carrito de Compras'
    });
};

//Carrito Funtion
function cart(name, price, url, con, btncart) {
    var item = {
        name: name,
        price: price,
        url: url
    }
    cartItems.push(intem);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display = "none";
    animation();

};

function cart2(name, price, url, con, btncart) {
    var item = {
        name: name,
        price: price,
        url: url
    }
    cartItems.push(intem);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display = "none";
};

//render
// function render(){

// }

(() => {
    for (let index = 1; index <= 6; index++) {
        pro1DIV.innerHTML += `${HTMLpro1Product(index)}`;
    }
    for (let index = 1; index <= 3; index++) {
        pro2DIV.innerHTML += `${HTMLpro2Product(index)}`;
        pro2DIV.innerHTML += `${HTMLpro3Product(index)}`;
    }
    if (localStorage.getItem("cart") == null) {

    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML = `[${products.length}]`;
    }
})();