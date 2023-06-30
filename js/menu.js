const abrirMenu = document.querySelector("#btn-abrir-menu");
const cerrarMenu = document.querySelector("#btn-cerrar-menu");
const menu = document.querySelector("#menu-mobile");

abrirMenu.addEventListener("click", () => {
	menu.classList.add("filtro-container-visible");
});

cerrarMenu.addEventListener("click", () => {
	menu.classList.remove("filtro-container-visible");
});
btnCategorias.forEach((btn) =>
	btn.addEventListener("click", () => {
		menu.classList.remove("filtro-container-visible");
	})
);
