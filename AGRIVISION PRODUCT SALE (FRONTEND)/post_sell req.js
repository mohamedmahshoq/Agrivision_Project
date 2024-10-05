const formData = new FormData();
formData.append('productName', productName);
formData.append('productPrice', productPrice);
formData.append('productImage', productImage);

fetch('http://localhost:5000/api/products', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => {
    console.log('Product added successfully', data);
    resultDiv.innerHTML = `<p>Product added successfully!</p>`;
})
.catch(error => {
    console.error('Error:', error);
});
