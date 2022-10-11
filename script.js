
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const submit = document.getElementById('submit');
const cardContainer = document.querySelector('.card-container');

submit.addEventListener('click', function(event) {
    addBookToLibrary(title, author, pages, read);
})

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return(title + " / " + author + ", " + pages + " pages, status: " + read);
    }
}

function addBookToLibrary(title, author, pages, read) {
    if (read.Value =="yes") {
        var newBook = new Book(title.value, author.value, pages.value, "already read");
    } else {
        var newBook = new Book(title.value, author.value, pages.value, "not read yet");
    }
    console.log(newBook);
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayBook(newBook);
}

function displayBook(book) {
    console.log(book)
    var v = document.createElement('div');
    var t = document.createElement('text');
    t.textContent = book.info();
    v.className = "card";
    v.appendChild(t);
    cardContainer.appendChild(v);
    console.log("added new book")
}

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet")
// console.log(theHobbit.info())



