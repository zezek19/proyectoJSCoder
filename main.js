let precio = 0
let producto 
const IPHONE = 500;
const MACBOOK = 1200;
const APPLEWATCH = 200;


function sumarPrecio(productos) {
    if (productos == 1) {
        precio += IPHONE;
        console.log(precio);
    } else if (productos == 2) {
        precio += MACBOOK;
        console.log(precio);
    } else {
        precio += APPLEWATCH;
        console.log(precio);
    }
}


producto =  prompt("Que desea comprar?(1-iphone 2-macbook 3-applewatch / otro numero para finalizar compra): ")   ;

while (producto==1 || producto== 2 || producto== 3) {
    sumarPrecio(producto);
    producto = prompt("Que desea agregar?(1-iphone 2-macbook 3-applewatch / otro numero para finalizar compra): ");

}

alert("Gracias por comprar, el precio de su compra es de: $" + precio );


