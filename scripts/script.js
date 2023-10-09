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

// hier een onlcik funciton maken
let coll = document.querySelectorAll(".collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = document.querySelector(".collaps-open-funtion");
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

let dvd = document.querySelectorAll(".collapsible-first");

for (let i = 0; i < dvd.length; i++) {
    dvd[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = document.querySelector(".collaps-open-funtion-first");
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

function boeken() {

}

// verbegen zoekresulaten
function showdivresults() {

    let divresults = document.querySelector(".showresults");
    // seleteer de .showresylts div

    let displaydivresults = window.getComputedStyle(divresults).display;
//     https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
//     https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
    //met deze code word alle css proporties of een element en de inhoud ervan weergegeven

//
    if (displaydivresults === "none") {
        divresults.style.display = "block";
        //     laat re
    } else {
        divresults.style.display = "none";
    }
}

function boeken() {
    alert("druk op oke om naar de tabel te gaan emt daarin het boete overzicht");
    // https://www.w3schools.com/jsref/met_win_alert.asp
}

//mijn code
// zoekfunctie op naam werkt niet geheel w3schools als je wat intypt krijg je resultaat bij de lijst onderaan
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
// checkbox filter waarin ik de form selecteerd en de addeventlistener daar word de verandering in
//meegenomen als je op een checkbox klikt dan is dat de event
document.querySelector("form").addEventListener('change', (event) => {
    let filter = event.target.value;//hier is filter gelijk aan event
    let unorderedlist = document.getElementById("myUL");
    const listitems = unorderedlist.getElementsByTagName('li');// de li is verwijzined naar de <li> in html
    // for loop i = 0 en die gaat door alle li's in html tot en met het einde daar staat .lenght ook voor
    for (let i = 0; i < listitems.length; i++) {
        let itemFilter = listitems[i].dataset.filter;// hier word de listitems gefilteerd door de dataset.filter en in html is dat de data-filter die gebruikt word
        if (itemFilter !== filter) {// als itemfilter niet gelijk is aan filter laat niks zien en filter is die form met de checkbox
            listitems[i].style.display = "none";
        }
    }
});
