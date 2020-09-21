

//Quick Start Guide
//Checking which input radio is checked and adding a class to show the correct slide
const tabWidget = document.querySelector(".tab__widget");
const tabInputs = Array.from(tabWidget.getElementsByTagName("input"));
//Performance Consideration - In the below if this was production, I'd likely use a different type of for loop, one that can be 'broken' once the correct input was found
//Normally I wouldnt' mix jQuery and Vanilla JS much, but hey, I'm trying to get this to you quickly, and if it's available here!
function changeTabClass(index) {
    Array.from(tabWidget.querySelectorAll(".tab__widget__cell")).forEach((cell, i) => {
        cell.classList.remove("tab__widget__cell--selected");
    });
    tabWidget.querySelectorAll(".tab__widget__cell")[index].classList.add("tab__widget__cell--selected");
}
changeTabClass(0);
//Performance Consideration - If this was production, I would've like to have seen more specificity of the selectors used so it wasn't searching the whole page for the classes
$(".tab__widget--tab").click(function () {
    let index = $(".tab__widget--tab").index(this);
    changeTabClass(index);
});

    
//Testimonials
//I saw that Slick.js was inlcluded in the vendor folder, so that seemed like a natural way to do this carousel
$('.itw__cells').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: ".itw__arrows",
    prevArrow: ".itw-prev",
    nextArrow: ".itw-next",
    autoplay: true,
    arrows: true,
    autoplaySpeed: 6000
});
    

