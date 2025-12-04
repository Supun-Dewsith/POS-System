import { inventoryData, customerData } from "./data.js";

export function initProductsPage() {

    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', loadItems);

    loadItems();
    setupAddItemButton();
    itemCodeStup();
    submitButtonSetup();

}


function loadItems() {
    const itemCotainer = document.getElementById('item-container');
    const typed = searchBar.value.toLowerCase();
    if (!itemCotainer) {
        console.log("not found");
        return;
    }

    let itemsHTML = '';

    inventoryData.forEach(item => {
        if (item.name.toLowerCase().startsWith(typed)) {
            itemsHTML += createItemCardHTML(item);
        }
    });

    if (itemsHTML === '') {
        itemsHTML += '<p class="h5 col-12 text-center">No items found...</p>';
    }

    //itemCotainer.insertAdjacentHTML('beforeend', itemsHTML);
    itemCotainer.innerHTML = itemsHTML;
}

function removeItem(code) {
    const submitNewItemButton = document.getElementById('submit-new-item');
    const itemCode = document.getElementById('new-item-code');
    const isConfirmed = confirm("Are you sure you want to remove the selected item?");
    if (isConfirmed) {
        let i = 0;
        inventoryData.forEach(item => {
            if (item.code === code) {
                inventoryData.splice(i, 1);
            }
            i++;
        });
        loadItems();

        //controlle save button
        itemCode.classList.remove('is-invalid');
        submitNewItemButton.disabled = false;
        submitNewItemButton.classList.remove('button-disabled')
        inventoryData.forEach(item => {
            if (item.code === itemCode.value) {
                itemCode.classList.add('is-invalid');
                submitNewItemButton.disabled = true;
                submitNewItemButton.classList.add('button-disabled');
                return;
            }
        });
    }

}
window.removeItem = removeItem;

function setupAddItemButton() {
    const addButton = document.getElementById('add-Item-button');
    const formContainer = document.getElementById('new-item-form-container');

    if (!addButton || !formContainer) {
        console.error("Missing 'add Customer' button or add item container.")
    }

    addButton.addEventListener('click', () => {
        if (formContainer.style.display === 'none') {
            formContainer.style.display = 'block';
        } else {
            formContainer.style.display = 'none';
        }
    });
}

function itemCodeStup() {
    const submitNewItemButton = document.getElementById('submit-new-item');
    const itemCode = document.getElementById('new-item-code');
    itemCode.addEventListener('input', () => {
        //controlle save button
        itemCode.classList.remove('is-invalid');
        submitNewItemButton.disabled = false;
        submitNewItemButton.classList.remove('button-disabled')
        inventoryData.forEach(item => {
            if (item.code === itemCode.value) {
                itemCode.classList.add('is-invalid');
                submitNewItemButton.disabled = true;
                submitNewItemButton.classList.add('button-disabled');
                return;
            }
        });
    });
}

function submitButtonSetup() {
    const submitNewItemButton = document.getElementById('submit-new-item');
    const itemCode = document.getElementById('new-item-code');

    submitNewItemButton.addEventListener('click', () => {
        const itemName = document.getElementById('new-item-name');
        const itemprice = document.getElementById('new-item-price');
        const imagePath = document.getElementById('new-item-img');

        if (!itemName || !itemCode || !itemprice || !imagePath) {
            console.error('missing element!');
            return;
        }

        const newItem = { name: itemName.value, code: itemCode.value, price: itemprice.value, image: imagePath.value, alt: itemName.value };
        inventoryData.push(newItem);
        loadItems();

        //controlle save button
        itemCode.classList.remove('is-invalid');
        submitNewItemButton.disabled = false;
        submitNewItemButton.classList.remove('button-disabled')
        inventoryData.forEach(item => {
            if (item.code === itemCode.value) {
                itemCode.classList.add('is-invalid');
                submitNewItemButton.disabled = true;
                submitNewItemButton.classList.add('button-disabled');
                return;
            }
        });

    });

}

function createItemCardHTML(item) {

    const cardClass = `product-card-${item.id}`;

    const styleBlock =
        `<style>
            .${cardClass} {
                border: 2px solid transparent ; 
                border-color: rgba(239, 239, 239, 1);
                transition: border 0.05s ease-in-out; 
            }
            /* Apply orange border on hover */
            .${cardClass}:hover {
                border: 2px solid #ff9900 !important; 
            }
            .${cardClass}:active{
                transform:scale(0.98);
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;
            }
        </style>`;


    return `
${styleBlock}
<a class="custom-col-itemContainer text-decoration-none " role="button" style="cursor: pointer;" onclick="removeItem('${item.code}')">
    <div class="card p-3 h-100 shadow-sm position-relative ${cardClass}">
        <!-- Main flex container for the card content -->
        <div class="d-flex flex-column h-100">
            
            <!-- 1. Text Area (Wider due to new col classes) -->
            <div class="mb-2" style="max-width: 100%; overflow: hidden;"> 
                <h6 class="card-title mb-0 text-truncate text-nowrap" style="max-width: 100%; font-size: 1.1rem;">
                    ${item.name}
                </h6>
                <p class="card-subtitle text-muted mb-1 small text-break" style="font-size: 0.8rem;">
                    ${item.code}
                </p>
            </div>
            
            <div class="w-full mt-2 d-flex justify-content-center" style="min-height: 5rem;">
                <img src="${item.image}" 
                     class="img-fluid rounded" 
                     alt="${item.alt}"
                     style="max-height: 5rem; width: auto;"
                     onerror="this.onerror=null; this.src='https://placehold.co/150x80/6c757d/ffffff?text=Missing'">
            </div>

            <div class="mt-auto pt-3 w-full d-flex justify-content-between align-items-center border-top">
                <p class="card-text font-weight-bold h5 mb-0">$ ${item.price}</p>
                <span class="badge py-2 px-3" style="color:green;">In Stock</span>
            </div>
        </div>
    </div>
</a>
    `;

}

