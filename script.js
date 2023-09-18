// Function to load data from File.js
function loadData(callback) {
    fetch('File.js')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error loading data:', error));
}

// Function to populate the client dropdown
function populateClientDropdown(products) {
    const clientDropdown = document.getElementById('clientDropdown');
    const clients = [...new Set(products.map(product => product.client))]; // Get unique clients

    // Create options for each client
    clients.forEach(client => {
        const option = document.createElement('option');
        option.value = client;
        option.textContent = client;
        clientDropdown.appendChild(option);
    });
}

// Function to display products based on selected client
function displayProducts(products) {
    const selectedClient = document.getElementById('clientDropdown').value;
    const productListDiv = document.getElementById('productList');
    
    if (!selectedClient) {
        productListDiv.innerHTML = ''; // Clear the product list
        return;
    }

    const filteredProducts = products.filter(product => product.client === selectedClient);

    // Create an HTML list to display products
    const productListHTML = filteredProducts.map(product => `
        <div class="product">
            <p>Date: ${product.date}</p>
            <p>Type: ${product.type}</p>
            <p>Name: ${product.name}</p>
            <p>Quantity: ${product.quantity}</p>
        </div>
    `).join('');

    productListDiv.innerHTML = productListHTML;
}

// Load data and initialize the page
loadData(data => {
    // Assuming data from File.js is an array of objects
    populateClientDropdown(data);
    document.getElementById('clientDropdown').addEventListener('change', () => {
        displayProducts(data);
    });
});
