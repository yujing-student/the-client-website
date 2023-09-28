const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});

//mijn code
// zoekfunctie op naam werkt niet geheel w3schools
function myFunction() {
    // Declare variables
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        // er is een variable a aangemaakt en die heeft de verzameling array li [i] waar de boeken inzitten en daar word op de ahref gelet en 0 daar begint die bij
        txtValue = a.innerText || a.textContent;
        // hier word de var txtvalue gemaakt waarin gekeken word of de
        if (txtValue.toUpperCase().indexOf(filter) > 1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}

//https://codepen.io/shooft/pen/yLGyeag
document.querySelector("form").addEventListener('change', (event) => {
    let filter = event.target.value;
    let unorderedlist = document.getElementById("myUL");
    const listitems = unorderedlist.getElementsByTagName('li');// de li is verwijzined naar de <li> in html
    // for loop i = 0 en die gaat door alle li's in html tot en met het einde daar staat .lenght ook voor
    for (let i = 0; i < listitems.length; i++) {
        let itemFilter = listitems[i].dataset.filter;
        if (itemFilter !== filter) {
            listitems[i].style.display = "none";
        } else {
            listitems[i].style.display = "";
        }
    }
});
