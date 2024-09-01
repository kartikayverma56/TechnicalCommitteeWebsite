document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('circular-button');
    const content = document.getElementById('content');
    const frameImages = document.querySelectorAll('.frame-image');
    const textContent = document.querySelector('.text-content');


    button.addEventListener('click', () => {
        button.style.transition = 'all 0.8s ease-in-out';
        button.style.transform = 'scale(20)';
        setTimeout(() => {
            button.style.display = 'none';
            content.style.display = 'flex';
            // Trigger the animation for the images
            frameImages.forEach((image, index) => {
                setTimeout(() => {
                    image.style.transform = 'scale(1) rotate(0deg)';
                }, index * 300); // Stagger animations
            },2000);
            // Show the text after the images are in place
            setTimeout(() => {
                textContent.style.opacity = '1';
            }, frameImages.length * 300 + 500); // Wait for the images to settle
        }, 800);

    });
});

const btn = document.getElementById("circular-button");
const img = document.getElementById('button-image')
btn.addEventListener('click',()=>{
    img.style.animation="growIn 2s ease-in";
    document.getElementById("ring").style.animation="growIn 2s ease-in";

    
})
