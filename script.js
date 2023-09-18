// Import the product data from the external file "products.js"
// Make sure products.js is in the same directory as this script
import { products } from './products.js';

// Function to populate the table with product data
function populateTable() {
    const productTable = document.getElementById('productTable');
    const tbody = document.getElementById('tableBody');

    // Loop through the products and add rows to the table
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.date}</td>
            <td>${product.type}</td>
            <td>${product.client}</td>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
        `;
        tbody.appendChild(row);
    });
}

// Call the populateTable function when the page loads
window.addEventListener('load', populateTable);

