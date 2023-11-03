const dropMajor = document.getElementById("showMajor");
const majorSlide = document.getElementById("Major-drop-in");

const dropHometown = document.getElementById("showHometown");
const hometownSlide = document.getElementById("Hometown-drop-in");

const dropYear = document.getElementById("showYear");
const yearSlide = document.getElementById("Year-drop-in");

const dropFood = document.getElementById("showFood");
const foodSlide = document.getElementById("Food-drop-in");

const dropPassion = document.getElementById("showPassion");
const passion1slide = document.getElementById("PassionDescription1");
const passion2slide = document.getElementById("PassionDescription2");


let buttonTop = 0;




dropPassion.addEventListener("click", function() {
    buttonLeft = dropPassion.getBoundingClientRect().left - passion1slide.getBoundingClientRect().width;
    buttonRight = dropPassion.getBoundingClientRect().right;
    passion1slide.style.left = buttonLeft + "px";
    passion2slide.style.left = buttonRight + "px";
});


dropMajor.addEventListener("click", function() {
    buttonTop = dropMajor.getBoundingClientRect().top;
    majorSlide.style.top = buttonTop - majorSlide.getBoundingClientRect().height + "px";
    document.addEventListener("scroll", adjustPosition);
});

// ... (other event listeners)

function adjustPosition() {
    majorSlide.style.top = buttonTop - majorSlide.getBoundingClientRect().height + "px";
}

dropHometown.addEventListener("click", function() {
    buttonTop = dropHometown.getBoundingClientRect().top;
    hometownSlide.style.top = buttonTop - hometownSlide.getBoundingClientRect().height + "px";
});

dropYear.addEventListener("click", function() {
    buttonTop = dropYear.getBoundingClientRect().top; 
    yearSlide.style.top = buttonTop - yearSlide.getBoundingClientRect().height + "px";
});

dropFood.addEventListener("click", function() {
    buttonTop = dropFood.getBoundingClientRect().top;
    foodSlide.style.top = buttonTop - foodSlide.getBoundingClientRect().height + "px";
});

