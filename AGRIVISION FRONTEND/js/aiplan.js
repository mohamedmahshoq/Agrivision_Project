// Function to download image
function downloadImage(imageSrc) {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'House Plan';
    link.click();
}

// Function to share the plan
function sharePlan(imageSrc) {
    if (navigator.share) {
        navigator.share({
            title: 'AI House Plan',
            text: 'Check out this amazing house plan!',
            url: imageSrc,
        })
        .then(() => console.log('Plan shared successfully'))
        .catch((error) => console.error('Error sharing plan', error));
    } else {
        alert('Your browser does not support the share feature.');
    }
}

// Function to handle Like button
const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.textContent = '❤️ Liked';
        button.classList.add('liked');
    });
});




// Function to handle rating stars
const stars = document.querySelectorAll('.stars');
stars.forEach((star) => {
    star.addEventListener('click', function () {
        const planId = this.dataset.planId;
        alert(`You rated plan ${planId} with ${this.textContent.trim()}`);
    });
});
function copyLink(imageSrc) {
    navigator.clipboard.writeText(window.location.origin + '/' + imageSrc)
        .then(() => alert('Link copied to clipboard'))
        .catch((error) => console.error('Error copying link', error));
}
