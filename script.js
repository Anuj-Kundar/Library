// // reference to DOM elements
// const modal = document.getElementById("modal");
// const addBooksBtn = document.querySelector(".btn-add-books");
// const form = document.querySelector("form");
// const flexContainer = document.querySelector(".flex-container");

// store books in this array
let myLibrary = [
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

function displayBooks() {
    const flexContainer=document.querySelector(".flex-container")
     flexContainer.innerHTML=""; //-> will clear if any existing books are present
    
    // creating cards to display books
    myLibrary.forEach((book, index)=>{
        const card = createCard(book,index);
        flexContainer.appendChild(card);
    });
}

function createCard(book,index){
    const card = document.createElement("div");
    card.classList.add("card");

    const textGroup=document.createElement("div");
    textGroup.classList.add("text-group")

    const titleElement=document.createElement("div")
    titleElement.textContent=book.title;

    const authorElement=document.createElement("div");
    authorElement.classList.add("text-author");
    authorElement.textContent=`${book.pages} pages`

    textGroup.appendChild(titleElement);
    textGroup.appendChild(authorElement);
    textGroup.appendChild(pagesElement);

    const buttonGroup=document.createElement("div");
    buttonGroup.classList.add("button-group")

}



