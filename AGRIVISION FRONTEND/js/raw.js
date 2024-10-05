document.getElementById("locations").addEventListener("change", function() {
    const value = this.value;
    const priceDetails = document.getElementById("price-details");

    const prices = {
        nagercoil: `
            <h2>Nagercoil</h2>
            <div class="overlay">Price details for Nagercoil</div>
            <p>Cement: ₹350-₹450 per bag</p>
            <p>Aggregates: ₹600-₹900 per ton</p>
            <p>Steel: ₹60,000-₹75,000 per ton</p>
            <p>Bricks: ₹5-₹10 per brick</p>
            <p>Sand: ₹1,200-₹1,500 per truckload</p>
        `,
        kanniyakumari: `
            <h2>Kanniyakumari</h2>
            <div class="overlay">Price details for Kanniyakumari</div>
            <p>Cement: ₹360-₹450 per bag</p>
            <p>Aggregates: ₹650-₹1,000 per ton</p>
            <p>Steel: ₹65,000-₹80,000 per ton</p>
            <p>Bricks: ₹6-₹12 per brick</p>
            <p>Sand: ₹1,300-₹1,600 per truckload</p>
        `,
        thuckalay: `
            <h2>Thuckalay</h2>
            <div class="overlay">Price details for Thuckalay</div>
            <p>Cement: ₹340-₹440 per bag</p>
            <p>Aggregates: ₹580-₹850 per ton</p>
            <p>Steel: ₹62,000-₹77,000 per ton</p>
            <p>Bricks: ₹5-₹10 per brick</p>
            <p>Sand: ₹1,100-₹1,400 per truckload</p>
        `,
        marthandam: `
            <h2>Marthandam</h2>
            <div class="overlay">Price details for Marthandam</div>
            <p>Cement: ₹350-₹450 per bag</p>
            <p>Aggregates: ₹600-₹900 per ton</p>
            <p>Steel: ₹63,000-₹78,000 per ton</p>
            <p>Bricks: ₹6-₹11 per brick</p>
            <p>Sand: ₹1,200-₹1,500 per truckload</p>
        `
    };

    priceDetails.innerHTML = prices[value] || "<h2>Select a location to see prices</h2>";
});
