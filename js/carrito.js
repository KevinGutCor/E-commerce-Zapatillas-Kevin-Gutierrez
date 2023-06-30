
let productosEnLS = localStorage.getItem("productos-de-carrito");
productosEnLS = JSON.parse(productosEnLS);

// Seción del carrito
const contenidoCarritoVacio = document.querySelector("#carrito-text-vacio");
const contenedorDeProductos = document.querySelector("#conteniedor-de-carrito");
const contenidoCarritoPago = document.querySelector("#carrito-pago");
const contenidoCarritoCompra = document.querySelector("#carrito-compra-realizada");
//Btns del carrito
let btnEliminarProductos = document.querySelectorAll(".btn-elimiar-producto");
const btnVaciar = document.querySelector("#btn-vaciar-carrito");
const contTotal = document.querySelector("#total-carrito");
const contComprar = document.querySelector("#btn-comprar-carrito");

function cargarProductosCarrito() {
	if (productosEnLS && productosEnLS.length > 0) {
		contenidoCarritoVacio.classList.add("disabled");
		contenedorDeProductos.classList.remove("disabled");
		contenidoCarritoPago.classList.remove("disabled");
		contenidoCarritoCompra.classList.add("disabled");

		contenedorDeProductos.innerHTML = "";

		productosEnLS.forEach((producto) => {
			const div = document.createElement("div");
			div.classList.add("carrito-container-producto");
			div.innerHTML = `
      <img src="${producto.imagen}" alt="${
				producto.titulo
			}" class="carrito-cont-img"/>
		<div class="carrito-mobile carrito-cont-titulo">
			<span>Titulo:</span>
			<p>${producto.titulo}</p>
		</div>
		<div class="carrito-mobile carrito-producto-cantidad">
			<span>Cantidad:</span>
			<p>${producto.cantidad}</p>
		</div>
		<div class="carrito-mobile carrito-procucto-precio">
			<span>Precio:</span>
			<p>$${producto.precio}</p>
		</div>
		<div class="carrito-mobile carrito-peoducto-subtotal">
			<span>Subtotal:</span>
			<p>$${producto.precio * producto.cantidad}</p>
		</div>
		<div id="${
			producto.id
		}" class="carrito-mobile btn-elimiar-producto carrito-producto-btn-vaciar">
			<button class="button btn-sect-carrito">
				<svg viewBox="0 0 448 512" class="svgIcon">
					<path
						d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
					></path>
				</svg>
			</button>
		</div>`;

			contenedorDeProductos.appendChild(div);
		});
	} else {
		contenidoCarritoVacio.classList.remove("disabled");
		contenedorDeProductos.classList.add("disabled");
		contenidoCarritoPago.classList.add("disabled");
		contenidoCarritoCompra.classList.add("disabled");
	}
	renovarBtnEliminarProducto();
	actualizarTotal();
}

cargarProductosCarrito();

function renovarBtnEliminarProducto() {
	btnEliminarProductos = document.querySelectorAll(".btn-elimiar-producto");
	btnEliminarProductos.forEach((boton) => {
		boton.addEventListener("click", eliminarDeCarrito);
	});
}

function eliminarDeCarrito(e) {
	const idBoton = e.currentTarget.id;
	const index = productosEnLS.findIndex(producto => producto.id === idBoton);

	productosEnLS.splice(index, 1);
	cargarProductosCarrito();

	localStorage.setItem("productos-de-carrito", JSON.stringify(productosEnLS));
}

btnVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
	productosEnLS.length = 0;
	localStorage.setItem("productos-de-carrito", JSON.stringify(productosEnLS));
	cargarProductosCarrito();
}
function actualizarTotal() {
	const totalCulculado = productosEnLS.reduce(
		(acc, producto) => acc + producto.precio * producto.cantidad,
		0
	);
	contTotal.innerText = `$${totalCulculado}`;
}
contComprar.addEventListener("click", compraCarrito);
function compraCarrito() {
	productosEnLS.length = 0;
	localStorage.setItem("productos-de-carrito", JSON.stringify(productosEnLS));
	contenidoCarritoVacio.classList.add("disabled");
	contenedorDeProductos.classList.add("disabled");
	contenidoCarritoPago.classList.add("disabled");
	contenidoCarritoCompra.classList.remove("disabled");
}