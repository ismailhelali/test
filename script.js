// Import the data from File.js
import products from './File.js';

// Select DOM elements
const clientSelect = document.getElementById('client-select');
const productTable = document.getElementById('product-table').getElementsByTagName('tbody')[0];

// Populate the dropdown list with unique client names
const uniqueClients = [...new Set(products.map(product => product.client))];

uniqueClients.forEach(client => {
    const option = document.createElement('option');
    option.textContent = client;
    clientSelect.appendChild(option);
});

// Function to update the product table based on the selected client
function updateProductTable(selectedClient) {
    // Filter products based on the selected client
    const filteredProducts = products.filter(product => product.client === selectedClient);

    // Clear the current table
    productTable.innerHTML = '';

    // Populate the table with filtered products
    filteredProducts.forEach(product => {
        const row = productTable.insertRow();
        row.innerHTML = `
            <td>${product.date}</td>
            <td>${product.type}</td>
            <td>${product.client}</td>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
        `;
    });
}

// Event listener for client selection
clientSelect.addEventListener('change', () => {
    const selectedClient = clientSelect.value;
    updateProductTable(selectedClient);
});

// Initial table population with the first client (or you can choose a default client)
if (uniqueClients.length > 0) {
    updateProductTable(uniqueClients[0]);
}
