document.getElementById('findProfitableShopsBtn').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    const density = document.getElementById('density').value;
    window.location.href = `profit.html?location=${location}&density=${density}`;
});

document.getElementById('checkProfitsBtn').addEventListener('click', function() {
    const location = document.getElementById('location-2').value;
    const shopType = document.getElementById('shopType').value;
    const profitBox = document.getElementById('profit-box');

    if (location === 'nagercoil' && (shopType === 'supermarket' || shopType === 'tech-store')) {
        profitBox.innerHTML = `<p>This shop is already existing in Nagercoil, making profit is highly competitive. Consider other options.</p>`;
    } else {
        profitBox.innerHTML = `<p>This is a good choice for ${shopType} in ${location}. It is unique and has potential for profit.</p>`;
    }

    profitBox.style.display = 'block';
});

// Overlay handling for existing shops
const overlay = document.getElementById('overlay');
const proceedBtn = document.getElementById('proceed-btn');

proceedBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
    // Redirect to the corresponding page (you can enhance this based on shop type)
    window.location.href = 'supermarket.html';
});

function showOverlay() {
    overlay.style.display = 'block';
}
