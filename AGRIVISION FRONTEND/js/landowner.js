// Sample landowner data (you can replace this with actual data or fetch it from a server)
const landowner = {
    name: "John Doe",
    contact: "123-456-7890",
    email: "john@example.com",
    landDetails: "DTCP Approved",
    mapLink: "https://maps.google.com/?q=Nagercoil"
};

// Function to create and display the landowner details
function displayLandowner() {
    const container = document.querySelector('.landowner-details');

    const item = document.createElement('div');
    item.className = 'landowner-item';

    item.innerHTML = `
        <h3>${landowner.name}</h3>
        <p>Contact: ${landowner.contact}</p>
        <p>Email: ${landowner.email}</p>
        <p>Details: ${landowner.landDetails}</p>
        <a href="${landowner.mapLink}" target="_blank">View on Map</a>
    `;

    container.appendChild(item);
}

// Call the function to display the landowner on page load
window.onload = displayLandowner;
