const carrito = document.querySelectorAll("#botonComprar");

let carritoItems = JSON.parse(localStorage.getItem("carrito")) || [];


carrito.forEach((element) => {

    element.onclick = agregarCarrito;

});

function agregarCarrito(event){

    const button = event.target;
    const articulo = button.closest(".articulo");
    const articuloTitle = articulo.querySelector(".articuloTitle").textContent;
    const articuloPrecio = articulo.querySelector(".articuloPrecio").textContent;

    // Si el carrito no tiene elementos, no buscar si existe algun articulo
    if(carritoItems.length > 0) {

        // Verificar si el artículo ya está en el carrito
        let existente = carritoItems.find(item => item.title === articuloTitle);

        if (existente) {

            // Si el artículo ya está en el carrito, aumentar la cantidad en 1
            existente.cantidad += 1;

        } else {

            // Si el artículo no está en el carrito, agregarlo con cantidad 1
                let nuevoArticulo = {
                title: articuloTitle,
                precio: articuloPrecio,
                cantidad: 1
            };
            carritoItems.push(nuevoArticulo);
        }
    } else {

        // Si el carrito no tiene productos, directamente agregamos un articulo nuevo
            let nuevoArticulo = {
            title: articuloTitle,
            precio: articuloPrecio,
            cantidad: 1
        };

        carritoItems.push(nuevoArticulo);
    }

    guardarCarritoEnLocalStorage();

    Toastify({
        text: "Producto agregado: " + articuloTitle,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #cdad91, #cdad91)",
        },
        onClick: function(){}
    }).showToast();
}

function guardarCarritoEnLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carritoItems));
}


