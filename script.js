// Get the client name from local storage
let clientName = localStorage.getItem('clientName');

if (!clientName) {
    clientName = prompt('Please enter your name or the name of your company:');
    localStorage.setItem('clientName', clientName);
}

// Display the client name in a stylish div
const nameDiv = document.createElement('div');
nameDiv.innerHTML = `Client Name: ${clientName}`;
nameDiv.classList.add('client-name');
document.body.appendChild(nameDiv);

function generateTableRows(products) {
    const table = document.getElementById('product-table');
    table.innerHTML = ''; // clear the table
    products.forEach(product => {
        const row = document.createElement('tr');
        row.className = "active-row";
        row.innerHTML = `
            <td>${product.date}</td>
            <td>${product.type}</td>
            <td>${product.client}</td>
            <td>${product.name}</td>
            <td>
                <input class="inputquantity" type="number" value="${product.quantity}">
            </td>
        `;

        const quantityInput = row.querySelector('input[type="number"]');
        quantityInput.addEventListener('change', () => {
            product.quantity = parseInt(quantityInput.value);
        });

        table.appendChild(row);
    });
}

const searchField = document.getElementById('search-field');
const categorySelect = document.getElementById('category-select');

searchField.addEventListener('input', () => {
    const query = searchField.value.toLowerCase();
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query);
    });
    generateTableRows(filteredProducts);
});

categorySelect.addEventListener('change', () => {
    const category = categorySelect.value;
    const filteredProducts = category ? products.filter(product => product.category === category) : products;
    generateTableRows(filteredProducts);
});

window.onload = () => {
    generateTableRows(products);
};

// Add your additional JavaScript code here

function generatePdf() {
    let p = [];
    let i = 1;
    products.forEach(product => {
        if (product.checked == true) {
            p.push([i++, product.name, product.category, 0, product.quantity, product.unit, 0]);
        }
    });

    props.invoice.table = p;

    var pdfObject = jsPDFInvoiceTemplate.default(props);
    console.log('Object created:', pdfObject);
}

var props = {
    outputType: jsPDFInvoiceTemplate.OutputType.Save,
    returnJsPDFDocObject: true,
    fileName: "solidernet 2023",
    orientationLandscape: false,
    compress: true,

    // Add your invoice and business details here

    // ... (rest of the properties)
};
