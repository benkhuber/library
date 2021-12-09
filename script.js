let testBook1 = new Book("The Hobbit", "JRR Tolkien", "500", "false");

let myLibrary = [
    testBook1
];

renderDisplay();

let titleEntry = document.getElementsByClassName('title');
let authorEntry = document.getElementsByClassName('author');
let pagesEntry = document.getElementsByClassName('pages');
let readStatusEntry = document.getElementsByClassName('read-status')

let addBook = document.getElementsByClassName('add-book')
addBook[0].addEventListener('click', addBookToLibrary)

let myLibraryTest = document.getElementsByClassName('library-check');
myLibraryTest[0].addEventListener('click', renderDisplay);

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
    renderDisplay();
}

function renderDisplay() {
        let wipeDisplay = document.getElementById('library-wipe');
        wipeDisplay.innerHTML = '';

   for (i = 0; i < myLibrary.length; i++) {
        let bookCard = document.createElement('div');
        let divTitle = document.createElement('div');
        let divAuthor = document.createElement('div');
        let divPages = document.createElement('div');
        let divReadStatus = document.createElement('div');
        let removeButton = document.createElement('button');
        let libraryDisplay = document.getElementsByClassName('library-display');

        divTitle.innerHTML = "Title: " + myLibrary[i].title;
        divAuthor.innerHTML = "Author: " + myLibrary[i].author;
        divPages.innerHTML = "# of Pages: " + myLibrary[i].pages;
        divReadStatus.innerHTML = "Read " + myLibrary[i].readStatus;
        removeButton.innerHTML = "Remove Book"
        removeButton.value = i;
        removeButton.onclick = removeCard

        divTitle.classList.add('card-title');
        divAuthor.classList.add('card-author');
        divPages.classList.add('card-pages');
        divReadStatus.classList.add('card-read-status');
        removeButton.classList.add('remove-button');

        bookCard.appendChild(divTitle);
        bookCard.appendChild(divAuthor);
        bookCard.appendChild(divPages);
        bookCard.appendChild(divReadStatus);
        bookCard.appendChild(removeButton);

        libraryDisplay[0].appendChild(bookCard);
    }
}

function removeCard(e) {
    let index = e.target.value
    myLibrary.splice(index, 1);
    renderDisplay();
    console.log(myLibrary);
}