// script.js
document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get product details
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').files[0];

    // Check if all fields are filled
    if (!productName || !productPrice || !productImage) {
        alert('Please fill out all fields.');
        return;
    }

    // Display product details for now (can later send this to the server)
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Product Name: ${productName}</p>
        <p>Price: Rs.${productPrice} per kg</p>
        <p>Image: ${productImage.name}</p>
    `;

    // Simulate sending data to a backend (here you would send to your server)
    console.log({
        name: productName,
        price: productPrice,
        image: productImage.name,
    });

    // You can further process the image if needed using FileReader
});
