const maps = {
    nagercoil: '<iframe src="https://www.google.com/maps/embed?..."></iframe>',
    kanniyakumari: '<iframe src="https://www.google.com/maps/embed?..."></iframe>',
    thuckalay: '<iframe src="https://www.google.com/maps/embed?..."></iframe>',
    marthandam: '<iframe src="https://www.google.com/maps/embed?..."></iframe>'
};

// Function to display map based on buy location selection
function displayMap() {
    const location = document.getElementById('location').value;
    document.getElementById('map-container').innerHTML = maps[location] || '';
}

// Function to display map based on sell location selection
function displaySellMap() {
    const location = document.getElementById('sell-location').value;
    document.getElementById('sell-map-container').innerHTML = maps[location] || '';
}

// Overlay functions for confirmation modals
function showOverlay() {
    document.getElementById('overlay').style.display = 'block';
}

function showSellOverlay() {
    document.getElementById('sell-overlay').style.display = 'block';
}

function proceedToSeek() {
    window.location.href = "seek.html";
}

function proceedToPublish() {
    window.location.href = "publish.html";
}
