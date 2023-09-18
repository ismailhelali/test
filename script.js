// Function to populate the table with product data
function populateTable() {
    const productTable = document.getElementById('productTable');
    const tbody = document.getElementById('tableBody');

    // Define your product data in an array
    const products = [
        {
            date: '08/16/2023',
            type: 'LC',
            client: '7TH GARDEN  ICE:003051951000084',
            name: 'Vinaigre blanc PIK 50 cl',
            quantity: 26
        },
        {
            date: '08/16/2023',
            type: 'LC',
            client: '7TH GARDEN  ICE:003051951000084',
            name: 'Serviette ARAX 30 x 30',
            quantity: 100
        },
        // Add more product entries here
    ];

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
