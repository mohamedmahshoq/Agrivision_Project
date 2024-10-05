document.getElementById("landForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Gather input values
    const dimensions = document.getElementById("dimensions").value;
    const area = document.getElementById("area").value;
    const soilType = document.getElementById("soil-type").value;

    // Store inputs in local storage for future use
    localStorage.setItem("landDimensions", dimensions);
    localStorage.setItem("landArea", area);
    localStorage.setItem("soilType", soilType);

    // Redirect to answer.html
    window.location.href = "answer.html";
});
document.getElementById('back-button').addEventListener('click', function() {
    window.history.back();
});