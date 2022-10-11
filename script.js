
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const submit = document.getElementById('submit');

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
        return(title + " by " + author + ", " + pages + " pages, " + read);
    }
}

function addBookToLibrary(title, author, pages, read) {
    var newBook = new Book(title, author, pages, read);
    console.log(newBook);
    myLibrary.append(newBook);
    console.log(myLibrary);
    displayBook(newBook);
}

function displayBook(book) {
    var v = document.createElement('div');
    var t = document.createElement('text');
    t.textContent = book.info();
    v.className = "card";
    v.appendChild(t);
}

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet")
// console.log(theHobbit.info())



