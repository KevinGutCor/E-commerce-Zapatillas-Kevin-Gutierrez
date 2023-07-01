let productosEnLS = localStorage.getItem("productos-de-carrito");
productosEnLS = JSON.parse(productosEnLS);

// Seción del carrito
const contenidoCarritoVacio = document.querySelector("#carrito-text-vacio");
const contenedorDeProductos = document.querySelector("#conteniedor-de-carrito");
const contenidoCarritoPago = document.querySelector("#carrito-pago");
const contenidoCarritoCompra = document.querySelector(
	"#carrito-compra-realizada"
);
//Btns del carrito
let btnEliminarProductos = document.querySelectorAll(".btn-elimiar-producto");
const btnVaciar = document.querySelector("#btn-vaciar-carrito");
const contTotal = document.querySelector("#total-carrito");
const btnComprar = document.querySelector("#btn-comprar-carrito");
// Formulario de compra
const formularioDeCompra = document.querySelector("#formulario-de-compra");
const cancelarFormulario = document.querySelector("#btn-cancelar-compra");
const finalizarFormulario = document.querySelector("#btn-finalizar-compra");
const formularioFinal = document.querySelector("#formulario-final");

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
	Toastify({
		text: "Producto Eliminado",
		duration: 2000,
		close: true,
		gravity: "top", // `top` or `bottom`
		position: "left", // `left`, `center` or `right`
		stopOnFocus: true, // Prevents dismissing of toast on hover
		style: {
			background: "linear-gradient(to left, #040404, #605b5b",
		},
		onClick: function () {}, // Callback after click
	}).showToast();

	const idBoton = e.currentTarget.id;
	const index = productosEnLS.findIndex((producto) => producto.id === idBoton);

	productosEnLS.splice(index, 1);
	cargarProductosCarrito();

	localStorage.setItem("productos-de-carrito", JSON.stringify(productosEnLS));
}

btnVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
	Swal.fire({
		title: "¿Esta seguro?",
		icon: "question",
		iconColor: "#626262",
		html: "Se le eliminaran todos los productos",
		showCancelButton: true,
		focusConfirm: false,
		confirmButtonColor: "#f72c2c",
		cancelButtonColor: "#2954ff",
		confirmButtonText: "Si",
		cancelButtonText: "No",
		allowOutsideClick: true,
	}).then((result) => {
		if (result.isConfirmed) {
			productosEnLS.length = 0;
			localStorage.setItem(
				"productos-de-carrito",
				JSON.stringify(productosEnLS)
			);
			cargarProductosCarrito();
		}
	});
}
function actualizarTotal() {
	const totalCulculado = productosEnLS.reduce(
		(acc, producto) => acc + producto.precio * producto.cantidad,
		0
	);
	contTotal.innerText = `$${totalCulculado}`;
}

btnComprar.addEventListener("click", (e) => {
	e.preventDefault();
	formularioDeCompra.classList.add("formulario-visible");
});

cancelarFormulario.addEventListener("click", (e) => {
	e.preventDefault();
	formularioDeCompra.classList.remove("formulario-visible");
});

// finalizar compra
formularioFinal.addEventListener("submit", finalDeCompra);

function finalDeCompra(e) {
	e.preventDefault();

	const nombre = document.querySelector("#nombre").value;
	const apellido = document.querySelector("#apellido").value;
	const email = document.querySelector("#email").value;
	const telefono = document.querySelector("#telefono").value;
	const cuidad = document.querySelector("#inputCity").value;
	const calle = document.querySelector("#calle").value;

	Swal.fire({
		position: "center-center",
		icon: "success",
		title: "Compra Finalizada",
		showConfirmButton: false,
		timer: 1500,
	});

	const compraRealizadaDatos = document.querySelector(
		"#carrito-compra-realizada"
	);
	compraRealizadaDatos.innerHTML = `
	<p> Gracias por la compra "${nombre}" </p>
	<p>El pedido llegara en un plazo de 24hs a 48hs a "${cuidad}, ${calle}". </p>
	<p>Nos comunicaremos mediarte "${email}" o "${telefono}". </p>
	`;

	formularioDeCompra.classList.remove("formulario-visible");
	compraCarrito();
}

function compraCarrito() {
	productosEnLS.length = 0;
	localStorage.setItem("productos-de-carrito", JSON.stringify(productosEnLS));
	contenidoCarritoVacio.classList.add("disabled");
	contenedorDeProductos.classList.add("disabled");
	contenidoCarritoPago.classList.add("disabled");
	contenidoCarritoCompra.classList.remove("disabled");
}
