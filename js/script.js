let carrito = "";
let nuevaOperacion = false;

let item = prompt("Ingrese el nombre del item que desea comprar (Mountain Bike, Electric Bike, Racing Bike, Daily Use, Bmx");
let cantidad = Number(prompt(`Ingrese la cantidad de ${item} que desea comprar:`))

function hacerCarrito (item, cantidad) {
    do {
        seleccionarItem(item, cantidad)
            nuevaOperacion = confirm("¿Desea agregar otro item al carrito?")

            if (nuevaOperacion) {
                item = prompt("Ingrese el nombre del producto que desea comprar (Mountain Bike, Electric Bike, Racing Bike, Daily Use, Bmx");
                cantidad = parseInt(prompt(`Ingrese la cantidad de ${item} que desea comprar:`));
            }
        
    } while(nuevaOperacion);

    console.log("Items en el carrito:");
    console.log(carrito);
}

function seleccionarItem(item, cantidad){

    switch (item.toUpperCase()) {
        case "MOUNTAIN BIKE":
            carrito += `Mountain Bike + Cantidad: ${cantidad} + Precio Total: ${115000 * cantidad} pesos\n`;
            break;
        case "ELECTRIC BIKE":
            carrito += `Electric Bike + Cantidad: ${cantidad} + Precio Total: ${260000 * cantidad} pesos\n`;
            break;
        case "RACING BIKE":
            carrito += `Racing Bike + Cantidad: ${cantidad} + Precio Total: ${1400000 * cantidad} pesos\n`;
            break;
        case "DAILY USE":
            carrito += `Daily Use + Cantidad: ${cantidad} + Precio Total: ${80000 * cantidad} pesos\n`;
            break;
            case "BMX":
            carrito += `Bmx + Cantidad: ${cantidad} + Precio Total: ${110000 * cantidad} pesos\n`;
            break;
        default:
            alert("El producto ingresado no está disponible.");
            break;
    }
}

hacerCarrito(item, cantidad);

