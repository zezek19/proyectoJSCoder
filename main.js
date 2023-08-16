const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");


let productos = [
    {modelo:"Iphone 12",precio: 400, memoria: "128gb", image:"https://ipadizate.com/hero/2023/01/iPhone-12.1672750506.5387.jpg?width=768&aspect_ratio=16:9&format=nowebp"},
    {modelo:"Iphone 12 Pro", precio: 500, memoria: "128gb", image:"https://i.blogs.es/560203/1366_2000/500_500.jpeg"},
    {modelo:"Iphone 12 Pro Max",precio: 600, memoria: "256gb", image:"https://i.blogs.es/ef7571/1366_2000/840_560.jpeg"},
    {modelo:"Iphone 13",precio: 700,memoria: "256gb", image:"https://cdn.arstechnica.net/wp-content/uploads/2021/09/iPhone-13-Pro-Max-back-640x351.jpeg"},
  ];
  
  
  let carrito = [];


  productos.forEach((producto)=>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${producto.image}">
    <h3>${producto.modelo}</h3>
    <p class="price">${producto.precio}</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    
     content.append(comprar);


     comprar.addEventListener("click", () => {
      carrito.push({
        modelo : producto.modelo,
        image: producto.image,
        precio: producto.precio,
        memoria: producto.memoria,
      });

      /* TRANSFORMAR EL OBJETO EN FORMA DE STRING */
      localStorage.setItem("productos", JSON.stringify(carrito));
      console.log(localStorage.getItem("productos"));

      /* VOLVEMOS A TRANSFORMARLO DE STRING A JSON */
      let json = JSON.parse(localStorage.getItem("productos"));
      console.log(json);
     });
  });


verCarrito.addEventListener("click", () => {
   const modalHeader = document.createElement("div");
   modalHeader.className = "modal-header"
   modalHeader.innerHTML = `
   <h1 class="modal-header-title"> Carrito.</h1>
   `
   modalContainer.append(modalHeader);

   const modalButton = document.createElement("h1");
   modalButton.innerText ="x";
   modalButton.className = "modal-button";

   modalHeader.append(modalButton);


   carrito.forEach((producto)=>{
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
    <img src=" ${producto.image}">
    <h3> ${producto.modelo}</h3>
    <p> ${producto.precio}</p>
    `;

    modalContainer.append(carritoContent);

   });
   
   const total = carrito.reduce((acc,el) => acc + el.precio,0);

   const totalBuying = document.createElement("div");
   totalBuying.className = "total-content";
   totalBuying.innerHTML = `total a pagar: $USD ${total}`;
   modalContainer.append(totalBuying)
  });


































// const PRODUCTOS = [ ];

// function sumarPrecio(productos) {
//     if (productos == 1) {
//         precio += IPHONE;
//         console.log(precio);
//     } else if (productos == 2) {
//         precio += MACBOOK;
//         console.log(precio);
//     } else {
//         precio += APPLEWATCH;
//         console.log(precio);
//     }
// }

// producto =  prompt("Que desea comprar?(1-iphone 2-macbook 3-applewatch / otro numero para finalizar compra): ")   ;

// while (producto==1 || producto== 2 || producto== 3) {
//     sumarPrecio(producto);
//     producto = prompt("Que desea agregar?(1-iphone 2-macbook 3-applewatch / otro numero para finalizar compra): ");

// }

// alert("Gracias por comprar, el precio de su compra es de: $" + precio );
