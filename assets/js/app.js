import { initCustomerPage } from "./customer.js";
import { initCartPage } from "./cart.js";
import { initProductsPage } from "./products.js";

export function loadPage(pageName) {
    fetch(`pages/${pageName}.html`)
        .then(res => res.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;

            if (pageName === "customer") initCustomerPage();
            if (pageName === "cart") initCartPage();
            if (pageName === "products") initProductsPage();
        });
}
window.loadPage=loadPage;
window.onload = () => loadPage("cart");




