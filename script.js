let myLibrary = [];
let titleEntry = document.getElementsByClassName('title');
let authorEntry = document.getElementsByClassName('author');
let pagesEntry = document.getElementsByClassName('pages');
let readStatusEntry = document.getElementsByClassName('read-status')

let addBook = document.getElementsByClassName('add-book')
addBook[0].addEventListener('click', addBookToLibrary)

let myLibraryTest = document.getElementsByClassName('library-check');
myLibraryTest[0].addEventListener('click', libraryTest);

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary() {
    let book = new Book(
        titleEntry[0].value,
        authorEntry[0].value,
        pagesEntry[0].value,
        readStatusEntry[0].checked)
    myLibrary.push(book);
    displayBooks(myLibrary);
}


function displayBooks() {
{
        let divTitle = document.createElement('div');
        divTitle.innerHTML = "Title: " + titleEntry[0].value;
        let divAuthor = document.createElement('div');
        divAuthor.innerHTML = "Author: " + authorEntry[0].value;
        let parentDiv = document.getElementsByClassName('library-display');
        parentDiv[0].appendChild(divTitle);
        parentDiv[0].appendChild(divAuthor);
        console.log(div);
    }
}


function libraryTest() {
    console.log(myLibrary);
}