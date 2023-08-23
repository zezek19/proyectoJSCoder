const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProductos = async () => {
  const response = await fetch("data.json");
  const data = await response.json();
  console.log(data);


  data.forEach((producto) => {
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
      const repeat = carrito.some(
        (reapetProduct) => reapetProduct.id === producto.id
      );
  
      if (repeat) {
        carrito.map((prod) => {
          if (prod.id === producto.id) {
            prod.cantidad++;
          }
        });
      } else {
        carrito.push({
          id: producto.id,
          modelo: producto.modelo,
          cantidad: producto.cantidad,
          image: producto.image,
          precio: producto.precio,
          memoria: producto.memoria,
        });
      }
    });
  });
};

getProductos();



// SET ITEM
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
