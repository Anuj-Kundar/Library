// reference to DOM elements
const modal = document.getElementById("modal");
const addBooksBtn = document.querySelector(".btn-add-books");
const form = document.querySelector("form");
const flexContainer = document.querySelector(".flex-container");

// store books in this array
let library = [
    {
        title: "Red Rising",
        author: "Pierce Brown",
        pages: "429",
        isRead: true,
    },
    {
        title: "Fire & Blood",
        author: "George R. R. Martin",
        pages: 736,
        isRead: false,
    },
];;

// Book constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
        const readStatus = this.isRead ? "read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`
    }
}

function addBookToLibrary() {
    library.push(book);
}

function displaybook() {
     flexContainer.innerHTML=""; //-> will clear if any existing books are present
    
    // creating cards to display books
    library.forEach((book, index)=>{
        const card = createCard(book,index);
        flexContainer.appendChild(card);
    });


}

