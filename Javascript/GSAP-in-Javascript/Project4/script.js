var allText = document.querySelectorAll(".page2 h1");

function textContent() {
    allText.forEach((h1) => {
        let cluster = "";
        let h1Text = h1.textContent;
        let splitedText = h1Text.split("");

        splitedText.forEach((char) => {
            cluster += `<span>${char}</span>`;
        });

        h1.innerHTML = cluster; // Set updated HTML
    });
}

textContent();

// GSAP Animation
gsap.to(".page2 h1 span", {
    color: "#E3E3C4",
    stagger: 0.05,
    scrollTrigger: {
        trigger: ".page2 h1",
        scroller:"body",
        markers: true,
        start: "top 50%",
        end: "top 10%",
        scrub: 2,
       
    }
});
