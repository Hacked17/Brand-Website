// Parallax Effect on Scroll
document.addEventListener("scroll", function () {
    let scrolled = window.scrollY;
    document.querySelector(".parallax").style.transform = `translateY(${scrolled * 0.2}px)`;
});

// Live Color Customization
const colorButtons = document.querySelectorAll(".color-btn");
const productImage = document.getElementById("custom-product-img");

colorButtons.forEach(button => {
    button.addEventListener("click", () => {
        let color = button.getAttribute("data-color");
        productImage.src = `product-${color}.png`;
    });
});

// 360° Product Rotation
const images = ["product-1.png", "product-2.png", "product-3.png"];
let currentImageIndex = 0;
const productImg = document.getElementById("product-img");

document.getElementById("rotate-btn").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    productImg.src = images[currentImageIndex];
});
