const books = document.querySelectorAll(".book");
const books2 = [...books];
books2.map(book => {
    book.addEventListener("click", e => {
        const parent = e.target.parentElement;
        parent.classList = 'book active'

        const tytul = parent.getAttribute("data-tytul");
        const autor = parent.getAttribute("data-autor");
        const ocena = parent.getAttribute("data-ocena");
        showDetails(tytul, autor, ocena);
    });
});

const showElement = selector => {
    document.querySelector(selector).classList = "show";
};
const hideElement = selector => {
    document.querySelector(selector).classList = "";
};
const hideDetails = e => {
    document.querySelector(".book.active").classList = "book";
    hideElement("#overlay");
    hideElement("#details");
};
document.querySelector("#overlay").addEventListener("click", hideDetails);
const showDetails = (tytul, autor, ocena) => {
    const stars = '<span class="stars stars-' + ocena + '"></span>';
    document.getElementById("details-tytul").innerText = tytul;
    document.getElementById("details-autor").innerText = autor;
    document.getElementById("details-ocena").innerHTML = stars;
    showElement("#overlay");
    showElement("#details");
};
document.querySelector("button").addEventListener("click", hideDetails);