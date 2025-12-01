document.addEventListener('DOMContentLoaded', loadItems);

let inventoryData = [
    { name: 'Water (100ml)', code: '#0112', price: '0.85', image: 'assets/img/Untitled.jpeg', alt: 'Water Bottle' },
    { name: 'Apple Juice (250ml)', code: '#0205', price: '1.99', image: 'assets/img/Untitled-1.jpeg', alt: 'Apple Juice Carton' },
    { name: 'Sandwich (Ham)', code: '#0330', price: '4.50', image: 'assets/img/Untitled-2.jpeg', alt: 'Ham Sandwich' },
    { name: 'Cola (250ml)', code: '#0415', price: '1.25', image: 'assets/img/Untitled-3.jpeg', alt: 'Can of Cola' },
    { name: 'Chocolate Bar (Milk)', code: '#0522', price: '1.50', image: 'assets/img/5.jpeg', alt: 'Milk Chocolate Bar' },
    { name: 'Bag of Chips (Salted)', code: '#0601', price: '1.10', image: 'assets/img/06.jpeg', alt: 'Salted Chips Bag' },
    { name: 'Coffee (Instant)', code: '#0745', price: '3.99', image: 'assets/img/07.jpeg', alt: 'Instant Coffee Jar' },
    { name: 'Tea Bags (English Breakfast)', code: '#0880', price: '2.50', image: 'assets/img/08.jpeg', alt: 'Tea Box' },
    { name: 'Milk (1L)', code: '#0910', price: '1.80', image: 'assets/img/09.jpeg', alt: 'Milk Carton' },
    { name: 'Bread (Whole Wheat)', code: '#1055', price: '2.20', image: 'assets/img/10.jpeg', alt: 'Loaf of Bread' },
    { name: 'Yogurt (Strawberry)', code: '#1133', price: '0.99', image: 'assets/img/11.jpeg', alt: 'Strawberry Yogurt Cup' },
    { name: 'Eggs (Dozen)', code: '#1270', price: '3.15', image: 'assets/img/12.jpeg', alt: 'Egg Carton' },
    { name: 'Orange Juice (1L)', code: '#1305', price: '2.49', image: 'assets/img/13.jpeg', alt: 'Orange Juice Bottle' },
    { name: 'Tuna Can (In Oil)', code: '#1460', price: '1.75', image: 'assets/img/14.jpeg', alt: 'Tuna Can' },
    { name: 'Pasta (Spaghetti)', code: '#1590', price: '1.30', image: 'assets/img/15.jpeg', alt: 'Spaghetti Bag' },
    { name: 'Tomato Sauce (Jar)', code: '#1620', price: '2.85', image: 'assets/img/16.jpeg', alt: 'Tomato Sauce Jar' },
    { name: 'Cereal (Oats)', code: '#1711', price: '4.20', image: 'assets/img/17.jpeg', alt: 'Oatmeal Box' },
    { name: 'Butter (250g)', code: '#1844', price: '2.99', image: 'assets/img/18.jpeg', alt: 'Butter Stick' },
    { name: 'Cheese (Cheddar Block)', code: '#1902', price: '5.50', image: 'assets/img/19.jpeg', alt: 'Cheddar Cheese Block' },
    { name: 'Soup (Chicken Noodle)', code: '#2077', price: '1.65', image: 'assets/img/20.jpeg', alt: 'Can of Soup' },
    { name: 'Banana (Single)', code: '#2150', price: '0.45', image: 'assets/img/21.jpeg', alt: 'Single Banana' },
    { name: 'Grapes (Red, 500g)', code: '#2299', price: '3.70', image: 'assets/img/22.jpeg', alt: 'Bag of Grapes' },
    { name: 'Detergent (Laundry)', code: '#2318', price: '6.99', image: 'assets/img/23.jpeg', alt: 'Laundry Detergent Bottle' },
    { name: 'Soap (Bar)', code: '#2435', price: '0.75', image: 'assets/img/24.jpeg', alt: 'Bar of Soap' },
    { name: 'Toothpaste (Mint)', code: '#2562', price: '1.99', image: 'assets/img/25.jpeg', alt: 'Toothpaste Tube' },
    { name: 'Shampoo (Volume)', code: '#2604', price: '3.50', image: 'assets/img/26.jpeg', alt: 'Shampoo Bottle' },
    { name: 'Paper Towels (Roll)', code: '#2788', price: '2.10', image: 'assets/img/27.jpeg', alt: 'Roll of Paper Towels' },
    { name: 'Light Bulb (LED)', code: '#2807', price: '4.99', image: 'assets/img/28.jpeg', alt: 'LED Light Bulb' },
    { name: 'Batteries (AA Pack)', code: '#2913', price: '5.20', image: 'assets/img/29.jpeg', alt: 'AA Battery Pack' },
    { name: 'Pet Food (Dog, Small Bag)', code: '#3041', price: '8.50', image: 'assets/img/30.jpeg', alt: 'Small Bag of Dog Food' }
];

let customerData = [];

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', loadItems);


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
<a class="col-9 col-sm-5 col-md-3 col-lg-2 text-decoration-none " role="button" style="cursor: pointer;" onclick="loadSelectedItems('${item.name}','${item.code}','${item.price}','${item.image}','${item.alt}')">
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


let selectedItems = [];

function createSelectedItemCard(item) {

    const styleBlock2 =
        `<style>
            .buttonL {
                color: orange;
                padding: 4px 11px;
                transition: all 0.2s ease;
            }
            .buttonL:hover {
                background-color: orange !important;
                color: white;
            }
            .buttonR {
                color: orange;
                padding: 4px 10px;
                transition: all 0.2s ease;
            }
            .buttonR:hover {
                background-color: orange !important;
                color: white;
            }
        </style>`;

    return `
    ${styleBlock2}
    <div class="d-flex mt-0">
                            <div class="col-1">
                                <button class="btn rounded-3 bg-light ms-2 h2 h-75 w-100" onclick="removeFromSelectedItems('${item.code}')">
                                    <p class="h2" style="">-</p>
                                </button>
                            </div>
                            <div class="col-11 pe-3">
                                <div
                                    class=" rounded-3 ms-3 d-flex flex-row align-items-center justify-content-between bg-light h-75">
                                    <div class="col-6 d-flex align-items-center">
                                    <img src="${item.image}" alt="Item Image"
                                        style="width: 50px; height: 50px; border-radius: 5px;" class="ms-2">
                                    <p class="mt-3 ms-4">${item.name}</p>
                                    </div>
                                    <div class="input-group quantity-selector col-4" style="width: 110px;">
                                        <button class="btn btn-outline-secondary buttonL"
                                            style="background-color:rgb(209, 209, 209); " id="button-minus-${item.code}">-</button>
                                        <input type="text" id="itemCount-${item.code}" class="item-count form-control text-center"
                                            style="border: 0px; padding-left:10px;" value=${item.count}>
                                        <button class="btn btn-outline-secondary buttonR"
                                            style="background-color:rgb(209, 209, 209);" id="button-plus-${item.code}">+</button>
                                    </div>
                                    <div class="pe-3 col-2">
                                        <p class="card-text font-weight-bold h5 mb-0">$ ${item.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`;
};


const selectedItenContainer = document.getElementById('selected-items-container');

function loadSelectedItems(name, code, price, image, alt) {
    let selectedItemHtml = '';

    const item = { name: name, code: code, price: price, image: image, alt: alt, count: 1 };

    let isContained = false;
    selectedItems.forEach(item => {
        if (item.code === code) {
            isContained = true;
        }
    });

    if (!isContained) {
        selectedItems.push(item);
    }
    let i = 0;
    selectedItems.forEach(item => {
        selectedItemHtml += createSelectedItemCard(item);
        i++;
    });
    updatePaymentDetails();
    if (selectedItemHtml === '') {
        selectedItemHtml += `<p  class="h5 col-12 text-center">Selected items will apear here...</p>`;
    }
    //selectedItenContainer.innerHTML = '';
    //selectedItenContainer.insertAdjacentHTML('beforeend', selectedItemHtml);
    //const previousHtml = selectedItemHtml.innerHTML;
    selectedItenContainer.innerHTML = selectedItemHtml;

    selectedItems.forEach(item => {
        updateCount(item.code);
    });
}


function removeFromSelectedItems(code) {
    selectedItems = selectedItems.filter(item => item.code !== code);

    let selectedItemHtml = '';

    selectedItems.forEach(item => {
        selectedItemHtml += createSelectedItemCard(item);
    });

    if (selectedItemHtml === '') {
        selectedItemHtml += `<p  class="h5 col-12 text-center" >Selected items will apear here...</p>`;
    }
    selectedItenContainer.innerHTML = selectedItemHtml;

    selectedItems.forEach(item => {
        updateCount(item.code);
    });
    updatePaymentDetails();


}

function updateCount(itemCode) {
    const minusButton = document.getElementById(`button-minus-${itemCode}`);
    const plusButton = document.getElementById(`button-plus-${itemCode}`);
    const countInput = document.getElementById(`itemCount-${itemCode}`);

    const targetItem = selectedItems.find(item => item.code === itemCode);
    if (!targetItem) return;

    let count = targetItem.count;

    plusButton.addEventListener('click', () => {
        count++;
        countInput.value = count;
        targetItem.count = count;
        updatePaymentDetails();
    });

    minusButton.addEventListener('click', () => {
        if (count > 1) {
            count--;
            countInput.value = count;
            targetItem.count = count;
            updatePaymentDetails();
        }
    });


}


//clear Button
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {

    const isConfirmed = confirm("Are you sure you want to clear all selected items?");
    if (isConfirmed) {
        selectedItems = [];
        selectedItemHtml = '';
        selectedItems.forEach(item => {
            selectedItemHtml += createSelectedItemCard(item);
        });

        if (selectedItemHtml === '') {
            selectedItemHtml += `<p  class="h5 col-12 text-center" >Selected items will apear here...</p>`;
        }
        selectedItenContainer.innerHTML = selectedItemHtml;
        updatePaymentDetails();
    }

});

document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('pay-button');
    const formContainer = document.getElementById('new-customer-form-container');


    if (!addButton || !formContainer) {
        console.error("Missing 'Add Customer' button or form container.");
        return;
    }

    addButton.addEventListener('click', () => {
        if (formContainer.style.display === 'none') {
            formContainer.style.display = 'block';
        } else {
            formContainer.style.display = 'none';
        }
    });
});

const submitButton = document.getElementById('submit-new-customer');
const nameInput = document.getElementById('new-customer-name');
const gmailInput = document.getElementById('new-customer-gmail');

submitButton.addEventListener('click', function () {
    const newName = nameInput.value.trim();
    const newGmail = gmailInput.value.trim();

    let isExist = false;
    let i = 0;
    customerData.forEach(customer => {
        if (customer.gmail === newGmail) {
            isExist = true;

            const now = new Date();
            const nextOrderId = 'O' + (customerData.length + 1).toString().padStart(4, '0');
            const date_time = now.toLocaleString();

            let selectedItemCodes=[];
            selectedItems.forEach(item=>{
                selectedItemCodes.push({itemCode:item.code,itemCount:item.count});
            });

            const newOrder = {
                orderId: nextOrderId,
                date: date_time,
                total: totalCost,
                items: selectedItemCodes
            };
            customerData[i].orders.push(newOrder);
            updateOrderIdLabel(nextOrderId);
        }
        i++;
        
    });

    
    if (!isExist) {
        if (newGmail && newName) {
            const nextId = 'C' + (customerData.length + 1).toString().padStart(4, '0');
            const newCustomer = {
                name: newName,
                id: nextId,
                gmail: newGmail,
                orders: []
            };

            const now = new Date();
            const nextOrderId = 'O' + (customerData.length + 1).toString().padStart(4, '0');
            const date_time = now.toLocaleString();

            let selectedItemCodes=[];
            selectedItems.forEach(item=>{
                selectedItemCodes.push({itemCode:item.code,itemCount:item.count});
            });

            const newOrder = {
                orderId: nextOrderId,
                date: date_time,
                total: totalCost,
                items: selectedItemCodes
            };

            newCustomer.orders.push(newOrder)
            customerData.push(newCustomer);
            updateOrderIdLabel(nextOrderId);
        }
    }
    //test log
    console.log(customerData);
});

let totalCost = 0;
function updatePaymentDetails() {
    const subtotal = document.getElementById('subtotal');
    const discount = document.getElementById('discount');
    const salseTax = document.getElementById('salse-tax');
    const total = document.getElementById('total');

    let val = 0;
    selectedItems.forEach(item => {
        val += item.price * item.count;
    });

    let dis = 0.05;
    let st = 0.05;
    subtotal.textContent = '$' + val.toFixed(2);
    discount.textContent = '$' + (val * dis).toFixed(2);
    salseTax.textContent = '$' + (val * st).toFixed(2);
    totalCost=val + val * dis + val * st;
    total.textContent = '$' + totalCost.toFixed(2);

}

function updateOrderIdLabel(orderId){
const orderIdLabel = document.getElementById('order-id');
    orderIdLabel.textContent = 'Order Number : '+orderId;
}


