import { initHomePage } from "./home.js";
import { initCartPage } from "./cart.js";
import { initProductsPage } from "./products.js";

export function loadPage(pageName) {
    fetch(`pages/${pageName}.html`)
        .then(res => res.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;

            if (pageName === "home") initHomePage();
            if (pageName === "cart") initCartPage();
            if (pageName === "products") initProductsPage();
        });
}
window.loadPage=loadPage;
window.onload = () => loadPage("cart");




