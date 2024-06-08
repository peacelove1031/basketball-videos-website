// 添加交互元素
document.addEventListener('DOMContentLoaded', () => {
    console.log('文檔已加載');
});

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var slides = document.getElementsByClassName("custom-header-image");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
