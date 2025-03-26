/*
task8: create a search bar that display a live search result 
as user type, updating the result without refreshing the whole page 
*/



var data = [
    { name: "Adesh", src: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60" },
    { name: "yash", src: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60" },
    { name: "adeshhhhkl", src: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60" },
    { name: "adesWasane", src: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60" },
    { name: "harsh", src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60" },
    { name: "harshita", src: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60" }
];

var personsWrapper = document.querySelector(".persons-wrapper");

// Function to render the list
function renderList(persons) {
    let code = '';
    persons.map((value) => {
        code += `
            <div class="person-block">
                <div class="box">
                    <div class="person">
                        <img src="${value.src}" alt="${value.name}" />
                    </div> 
                </div>
                <h4>${value.name}</h4>
            </div>`;
    });
    personsWrapper.innerHTML = code;
}

// Initial render
renderList(data);

// Event listener for filtering
document.querySelector("input").addEventListener("input", function () {
    let searchValue = this.value.toLowerCase(); // Convert input to lowercase for case-insensitive search

    let matching = data.filter(value => value.name.toLowerCase().startsWith(searchValue)); 

    renderList(matching); // Re-render the filtered list
});
