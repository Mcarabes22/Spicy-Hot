
let carrito = [];
let nuevaOperacion = false;

const productos = [
    {
        nombre: "Mountain Bike",
        precio: 115000,
    },
    {
        nombre: "Electric Bike",
        precio: 260000,
    },
    {
        nombre: "Racing Bike",
        precio: 1400000,
    },
    {
        nombre: "Daily Use",
        precio: 80000,
    },
    {
        nombre: "BMX",
        precio: 110000,
    },
];

function hacerCarrito() {
    do {
        const item = prompt(
            "Ingrese el nombre del item que desea comprar:\n(Mountain Bike, Electric Bike, Racing Bike, Daily Use, BMX)"
        );

        
        const nombreProducto = item.toUpperCase();
        const cantidad = parseInt(prompt(`Ingrese la cantidad de ${item} que desea comprar:`), 10);

        const productoEncontrado = buscarProducto(nombreProducto);

        if (productoEncontrado) {
            carrito.push({
                nombre: productoEncontrado.nombre,
                cantidad: cantidad,
                precioTotal: productoEncontrado.precio * cantidad,
            });
        } else {
            alert("El producto ingresado no está disponible.");
        }

        nuevaOperacion = confirm("¿Desea agregar otro item al carrito?");
    } while (nuevaOperacion);

    console.log("Items en el carrito: ");
    console.log(carrito);

    mostrarPrecioPorItem();
    calcularTotalCompra();
}

function buscarProducto(nombre) {
    return productos.find((producto) => producto.nombre.toUpperCase() === nombre);
}

function mostrarPrecioPorItem() {
    console.log("Precio por item:");
    carrito.forEach((item) => {
        console.log(`${item.nombre}: ${item.precioTotal}`);
    });
}

function calcularTotalCompra() {
    let totalCompra = 0;
    carrito.forEach((item) => {
        totalCompra += item.precioTotal;
    });
    console.log("Total de la compra:", totalCompra);
}

hacerCarrito();



