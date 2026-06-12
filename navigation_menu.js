const menubtn = document.getElementById("menubtn");
const navmenu = document.getElementById("nav");
const closeBtn = document.getElementById("closeBtn");

menubtn.addEventListener("click", function(e) {
    e.stopPropagation();
    navmenu.classList.toggle("show");
});

closeBtn.addEventListener("click", function(e) {
	e.stopPropagation();
	navmenu.classList.remove("show");
});

document.addEventListener("click", (e) => {
	if (!navmenu.classList.contains("show")) return;

	const clickedInsideSidebar = navmenu.contains(e.target);
	const clickedMenuButton = menubtn.contains(e.target);

	if (clickedMenuButton) return;

	if (!clickedInsideSidebar) {
		navmenu.classList.remove("show");
		return;
	}

	const isLink = e.target.closest("a");
	const isButton = e.target.closest("button");

	if (!isLink && !isButton) {
		navmenu.classList.remove("show");
	}
});
