var home = document.querySelector(".home");
var about = document.querySelector(".about");
var contact = document.querySelector(".contact");
var content1 = document.querySelector(".content1");
var content2 = document.querySelector(".content2");
var content3 = document.querySelector(".content3");

home.addEventListener("click", () => {
    DisplayNone();
    home.style.color = "red";
    content1.style.display = "initial";
});

about.addEventListener("click", () => {
    DisplayNone();
    about.style.color = "red";
    content2.style.display = "initial";
});

contact.addEventListener("click", () => {
    DisplayNone();
    contact.style.color = "red";
    content3.style.display = "initial";
});

function DisplayNone() {
    var contents = document.querySelectorAll("h3");
    contents.forEach(function (content) {
        content.style.display = "none";
    });

    // Reset colors of all buttons
    home.style.color = "blue";
    about.style.color = "blue";
    contact.style.color = "blue";
}
