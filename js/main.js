let productos = [];

fetch("./js/productos.json")
	.then((response) => response.json())
	.then((json) => {
		productos = json;
		cargarProductos(productos);
	});

// Treamos botones de html
const contenedorProductos = document.querySelector("#contenedor-productos");
const btnCategorias = document.querySelectorAll(".btn-categorias");
const barraBuscador = document.querySelector("#barra-buscador");
let btnAgregados = document.querySelectorAll(".agregar-producto");
const numCarrito = document.querySelector("#num-carrito");

document.addEventListener("DOMContentLoaded", () => {
	cargarProductos(productos);
	buscarProductos();
});

// Sección mostrar los productos
function cargarProductos(filtroElegido) {
	contenedorProductos.innerHTML = "";

	filtroElegido.forEach((producto) => {
		const div = document.createElement("div");
		div.classList.add("cartas");
		div.innerHTML = `
				<img class="cartas-img" src="${producto.imagen}" alt="${producto.titulo}"/>
				<div class="cartas-content">
					<h2 class="cartas-title">${producto.titulo}</h2>
					<p class="cartas-categoria">${producto.descripcion}</p>
					<div class="cartas-precio-btn">
						<p class="cartas-precio">$ ${producto.precio}</p>
						<button  id="${producto.id}" class="cartBtn agregar-producto">
							<svg
								class="cart"
								fill="white"
								viewBox="0 0 576 512"
								height="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
							</svg>
							ADD TO CART
						</button>
					</div>
				</div>
				`;

		contenedorProductos.appendChild(div);
	});

	renovarBotonesAgregados();
}

// Sección de barra de busqueda
function buscarProductos() {
	barraBuscador.addEventListener("input", (e) => {
		limpiarHTML();
		const buscarText = e.target.value.toLowerCase().trim();

		const mostrarFiltrado = productos.filter(
			(producto) =>
				producto.categoria.genero.toLowerCase().includes(buscarText) ||
				producto.titulo.toLowerCase().includes(buscarText)
		);

		mostrarFiltrado.length ? cargarProductos(mostrarFiltrado) : noResultado();
	});
}

function limpiarHTML() {
	while (contenedorProductos.firstChild) {
		contenedorProductos.removeChild(contenedorProductos.firstChild);
	}
}

// Si no hay resultados de busqueda mostrara un msj
function noResultado() {
	const noResultado = document.createElement("div");
	noResultado.classList.add("no-resultado");
	noResultado.textContent = "No hay resultados de busqueda";
	contenedorProductos.appendChild(noResultado);
}

// Sección de activación de categorias
btnCategorias.forEach((button) => {
	button.addEventListener("click", (e) => {
		btnCategorias.forEach((button) => button.classList.remove("active"));
		e.currentTarget.classList.add("active");

		if (e.currentTarget.id != "todos") {
			const productosBoton = productos.filter(
				(productos) => productos.categoria.id === e.currentTarget.id
			);
			cargarProductos(productosBoton);
		} else {
			cargarProductos(productos);
		}
	});
});

function renovarBotonesAgregados() {
	btnAgregados = document.querySelectorAll(".agregar-producto");
	btnAgregados.forEach((boton) =>
		boton.addEventListener("click", agregarACarrito)
	);
}

// Array de productos
let productosDeCarrito;

let productosEnLS = localStorage.getItem("productos-de-carrito");

if (productosEnLS) {
	productosDeCarrito = JSON.parse(productosEnLS);
	actualizarNumCarrito();
} else {
	productosDeCarrito = [];
}

function agregarACarrito(e) {
	Toastify({
		text: "Producto agregado",
		duration: 3000,
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
	const productoAgregado = productos.find(
		(producto) => producto.id === idBoton
	);

	if (productosDeCarrito.some((producto) => producto.id === idBoton)) {
		const index = productosDeCarrito.findIndex(
			(producto) => producto.id === idBoton
		);
		productosDeCarrito[index].cantidad++;
	} else {
		productoAgregado.cantidad = 1;
		productosDeCarrito.push(productoAgregado);
	}

	actualizarNumCarrito();

	localStorage.setItem(
		"productos-de-carrito",
		JSON.stringify(productosDeCarrito)
	);
}

// Actualizar numero de productos en el carrito
function actualizarNumCarrito() {
	let newNum = productosDeCarrito.reduce(
		(acc, producto) => acc + producto.cantidad,
		0
	);
	numCarrito.innerText = newNum;
}
