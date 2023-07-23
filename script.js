// reference to DOM elements
const modal = document.getElementById("modal");
const addBooksBtn =document.querySelector(".btn-add-books");
const form = document.querySelector("form");
const flexContainer=document.querySelector(".flex-container");

// store books in this array
let myLibrary = [];

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
    
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(theHobbit.info());

