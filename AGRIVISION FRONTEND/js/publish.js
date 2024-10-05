window.onload = function() {
    const sellDetails = JSON.parse(localStorage.getItem('sellDetails'));

    if (sellDetails) {
        const container = document.getElementById('land-details-container');
        
        container.innerHTML = `
            <div class="grid-item">
                <h3>Location: ${sellDetails.location}</h3>
                <img src="${sellDetails.image}" alt="Land Image" style="max-width: 100%; border-radius: 8px;">
                <p>DTCP Approved: ${sellDetails.dtcpApproved}</p>
                <p>Market Rate: ₹${sellDetails.marketRate} per cent</p>
                <p>Expected Rate: ₹${sellDetails.expectedRate} per cent</p>
            </div>
        `;
    } else {
        const container = document.getElementById('land-details-container');
        container.innerHTML = '<p>No details available.</p>';
    }
};
