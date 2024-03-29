
fetch('./data.json')
    .then(response => response.json())
    .then(productosData => {

        const productos = productosData;


const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');


botonesAgregarCarrito.forEach(boton => {
    boton.addEventListener('click', () => {
        const nombre = boton.getAttribute('data-nombre');
        const precio = boton.getAttribute('data-precio');


        swal.fire({
            title: '¡Agregado al Carrito!',
            text: `${nombre} se ha agregado al carrito por ${precio}`,
            icon: 'success'
        });
    });
});

// Obtener los elementos del DOM
const agregarFormularios = document.querySelectorAll('.producto-contenedor form');
agregarFormularios.forEach(form => {
    form.addEventListener('submit', agregarAlCarrito);
});

// Función para agregar un producto al carrito
function agregarAlCarrito(event) {
    event.preventDefault();
    const form = event.target;
    const nombre = form.dataset.nombre;
    const precio = parseInt(form.dataset.precio, 10);
    const cantidad = parseInt(form.cantidad.value, 10);

    if (isNaN(cantidad) || cantidad <= 0) {
        console.log('Ingrese una cantidad válida.');
        return;
    }

    const productoEncontrado = buscarProducto(nombre);

    if (productoEncontrado) {
        carrito.push({
            nombre: productoEncontrado.nombre,
            cantidad: cantidad,
            precioTotal: productoEncontrado.precio * cantidad,
        });
    } else {
        console.log("El producto ingresado no está disponible.");
    }

    // Actualizar el carrito en el almacenamiento (localStorage)
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Mostrar el carrito actualizado en la consola
    mostrarCarrito();
    calcularTotalCompra();

    // Mostrar precio por item en la consola
    console.log(`Precio por item - ${nombre}: $${productoEncontrado.precio}`);
    console.log(`Total de items seleccionados: ${cantidad}`);
    console.log(`Resultado final: $${productoEncontrado.precio * cantidad}`);
}

// Función para buscar un producto por su nombre
function buscarProducto(nombre) {
    return productos.find(producto => producto.nombre.toUpperCase() === nombre.toUpperCase());
}

// Función para mostrar el contenido del carrito en la consola
function mostrarCarrito() {
    console.log("Contenido del carrito:");
    carrito.forEach(item => {
        console.log(`${item.nombre}: Cantidad: ${item.cantidad}, Precio total: $${item.precioTotal}`);
    });
}

// Función para calcular el total de la compra
function calcularTotalCompra() {
    let totalCompra = 0;
    carrito.forEach(item => {
        totalCompra += item.precioTotal;
    });
    console.log(`Total de la compra: $${totalCompra}`);
}

// Inicializar el carrito desde el almacenamiento (localStorage)
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Mostrar el carrito al cargar la página
mostrarCarrito();
calcularTotalCompra();

})
.catch(error => {
    console.error('Error al cargar los productos:', error);
});





