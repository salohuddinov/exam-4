const categoryMenuToggleBtn = document.querySelector("header button");
const categoriesMenuDropdown = document.querySelector(".categories-menu");


categoryMenuToggleBtn.addEventListener("click", () => {
    categoriesMenuDropdown.classList.toggle("hidden");
});

const productsRow = document.querySelector(".products-row");


let discountProducts = products.filter((pr) => pr.discount).slice(-4);

let newProducts = products.slice(-4);

let popularProducts = products
    .toSorted((a, b) => a.rating - b.rating)
    .slice(-4);