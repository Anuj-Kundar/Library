let myLibrary = [
    {
        title: "Red Rising",
        author: "Pierce Brown",
        pages: 382,
        isRead: true,
    },
    {
        title: "Fire & Blood",
        author: "George R. R. Martin",
        pages: 736,
        isRead: false,
    },
];

// Book constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

function displayBooks() {
    const flexContainer = document.querySelector(".flex-container");
    flexContainer.innerHTML = ""; //-> will clear if any existing books are present

    // creating cards to display books
    myLibrary.forEach((book, index) => {
        const card = createCard(book, index);
        flexContainer.appendChild(card);
    });
}

function createCard(book, index) {
    const card = document.createElement("div");
    card.classList.add("card");

    const textGroup = document.createElement("div");
    textGroup.classList.add("text-group");

    const titleElement = document.createElement("div");
    titleElement.classList.add("text-title");
    titleElement.textContent = book.title;

    const authorElement = document.createElement("div");
    authorElement.classList.add("text-author");
    authorElement.textContent = `by ${book.author}`;

    const pagesElement = document.createElement("div");
    pagesElement.classList.add("text-pages");
    pagesElement.textContent = `${book.pages} pages`;

    textGroup.appendChild(titleElement);
    textGroup.appendChild(authorElement);
    textGroup.appendChild(pagesElement);

    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("button-group");

    const btnRead = document.createElement("button");
    btnRead.textContent = book.isRead ? "Read" : "Not Read";
    btnRead.classList.add("btn-read");
    btnRead.addEventListener("click", () => toggleReadStatus(index));

    const btnRemove = document.createElement("button");
    btnRemove.textContent = "Remove";
    btnRemove.classList.add("btn-remove");
    btnRemove.addEventListener("click", () => removeBook(index));

    buttonGroup.appendChild(btnRead);
    buttonGroup.appendChild(btnRemove);

    card.appendChild(textGroup);
    card.appendChild(buttonGroup);

    return card;
}

function toggleReadStatus(index) {
    myLibrary[index].isRead = !myLibrary[index].isRead;
    displayBooks();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

// event listener for "add books" button to show modal
const btnAddBooks = document.querySelector(".btn-add-books");
const modal = document.getElementById("modal");

btnAddBooks.addEventListener("click", () => {
    modal.classList.add("visible");
})

// Event listener for modal submission
const form = document.querySelector("form")
const addToLibraryBtn = document.getElementById("addToLibrary");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get user input for book details from the form
    const title = form.title.value;
    const author = form.author.value;
    const pages = parseInt(form.pages.value);
    const isRead = form.read.checked;

    // add new book to library array
    addBookToLibrary(title, author, pages, isRead);

    // clear the form input fields
    form.reset();

    // Hide the modal after visiting the book
    modal.classList.remove("visible");

    // Update the library display
    displayBooks();

});

// Initial Display of Books
displayBooks();


