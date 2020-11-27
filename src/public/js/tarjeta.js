let contador = 0;
//si se hace clic en agregar al carrito, btn
$('.cart-btn').on('click', function () {
    let carrito = $('.nav-cart');
    // encontrar la imagen de esa tarjeta en el que el usuario hace clic en el botón
    let imgArrastre = $(this).parent('.botones').parent('.contenido').parent('.tarjeta').find("img").eq(0);

    if (imgArrastre) {
        // duplicar la imagen
        var imgclonar = imgArrastre.clone().offset({
            top: imgArrastre.offset().top,
            left: imgArrastre.offset().left
        }).css({
            'opacity': '0.8',
            'position': 'absolute',
            'height': '150px',
            'width': '150px',
            'z-index': '100'
        }).appendTo($('body')).animate({
            'top': carrito.offset().top + 20,
            'left': carrito.offset().left + 30,
            'width': 75,
            'height': 75
        }, 1000, 'easeInOutExpo');

        setTimeout(function () {
            contador++;
            $(".nav-cart .count-item").text(contador);
        }, 1500);

        imgclonar.animate({
            'width': 0,
            'height': 0
        }, function () {
            $(this).detach()
        });
    }
});





// module.exports = carrito;

