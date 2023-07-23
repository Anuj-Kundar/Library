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

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(theHobbit.info());

