import { inventoryData,customerData } from "./data.js";

export function initCustomerPage(){
    loadCustomers();
    setupAddCustomerButton();
}

function loadCustomers() {
    const customerContainer = document.getElementById('customer-container');
    let customerHtml = '';
    let i = 0;
    customerData.forEach(customer => {
        customerHtml += createCustomerContainer(customer, i);
        i++;
        console.log('gggg' + i)
    });

    customerContainer.innerHTML = customerHtml;
    for (let i = 0; i < customerData.length; i++) {
        loadOrders(i);
        console.log('cccccc' + i)
    }
}


function loadOrders(i) {
    const orderContainer = document.getElementById('orders-container');
    const orderButton = document.getElementById(`Orders-button-${i}`);

    orderButton.addEventListener('click', () => {
        let orderHtml = '';
        customerData[i].orders.forEach(order => {
            orderHtml += createOrderContainers(order);
        });
        orderContainer.innerHTML = orderHtml;
        console.log('jjjjj');
    });

}


function createCustomerContainer(customer, i) {
    return `<div class="d-flex mt-0">
                                <div class="col-12 pe-3" style="height: 60px;">
                                    <div class=" rounded-3 ms-3 d-flex flex-row align-items-center bg-light h-100">
                                        <div class="col-4 ps-4">
                                            <p class="font-weight-bold h5 mb-0">Customer Name : ${customer.name}</p>
                                        </div>
                                        <div class=" col-4" style="">
                                            <p class="font-weight-bold h5 mb-0">Customer ID : ${customer.id}</p>
                                        </div>
                                        <div class="pe-4 col-4" style="text-align: end;">
                                            <button class="button ms-2" id="Orders-button-${i}"
                                                style="width: 200px;">
                                                Orders</button>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
}


function createOrderContainers(order) {
    return `<div class="d-flex mt-0">
                            <div class="col-12 pe-3" style="height: 60px;">
                                <div class=" rounded-3 ms-3 d-flex flex-row align-items-center bg-light h-100">
                                    <div class="col-4 ps-4">
                                        <p class="font-weight-bold h5 mb-0">Order ID : ${order.id}</p>
                                    </div>
                                    <div class=" col-4" style="">
                                        <p class="font-weight-bold h5 mb-0">Order Date : ${order.date}</p>
                                    </div>
                                    <div class="pe-4 col-4" style="text-align: end;">
                                        <p class=" font-weight-bold h5 mb-0">Total : $ ${order.total}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`;
}



function setupAddCustomerButton() {
    const addButton = document.getElementById('addCustomer-button');
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
}
