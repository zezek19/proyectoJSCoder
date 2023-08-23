const mostrarCarrito = () => {
  modalContainer.innerHTML = "";

  if (carrito.length > 0) {
    modalContainer.style.display = "flex";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
   <h1 class="modal-header-title"> Carrito.</h1>
   `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className = "modal-button";

    modalButton.addEventListener("click", () => {
      modalContainer.style.display = "none";
    });

    modalHeader.append(modalButton);

    carrito.forEach((producto) => {
      let carritoContent = document.createElement("div");
      carritoContent.className = "modal-content";
      carritoContent.innerHTML = `
    <img src=" ${producto.image}">
    <h3> ${producto.modelo}</h3>
    <p> ${producto.precio}</p>
    <p> Cantidad: ${producto.cantidad}
    `;

      modalContainer.append(carritoContent);

      let eliminar = document.createElement("span");

      eliminar.innerText = "❌";
      eliminar.className = "eliminar";
      carritoContent.append(eliminar);

      eliminar.addEventListener("click", eliminarProducto);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `total a pagar: $USD ${total}`;
    modalContainer.append(totalBuying);
  }
};

verCarrito.addEventListener("click", mostrarCarrito);



const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) =>{
      return carritoId !== foundId;
    });

    mostrarCarrito();
  };
