/*task 7:display a progress bar that update in real time showing
the progress of bar on downloading button 
*/


var progress = document.querySelector(".progress");
var button = document.querySelector("button");
var h3 = document.querySelector("h3");

button.addEventListener("click", () => {
    operations();
});

function operations() {
    let count = 0; // Reset progress
    h3.style.opacity = 0; // Hide message initially

    let time = setInterval(() => {
        if (count >= 100) {
            clearInterval(time);
            h3.style.opacity = 1; // Show "Download Completed!" when done
            return;
        }
        count++;
        progress.style.width = count + "%";
    }, 50); // Faster animation
}
