// eslint-disable-next-line max-classes-per-file
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookStatus = document.querySelector('#status');
const libraryTable = document.querySelector('.library');
const addForm = document.querySelector('#add-form');

class Book {
  constructor(
    title = 'Unknown',
    author = 'Unknown',
    pages = 0,
    isRead = 'Unread',
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(newBook) {
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook);
    }
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  getBook(title) {
    return this.books.find((book) => book.title === title);
  }

  isInLibrary(newBook) {
    return this.books.some((book) => book.title === newBook.title);
  }
}

const library = new Library();

function displayBooks(books) {
  while (libraryTable.rows.length > 1) {
    libraryTable.deleteRow(1);
  }
  for (let i = 0; i < books.length; i++) {
    const bookInfo = document.createElement('tr');
    const checkbox = books[i].isRead ? 'checked' : 'unchecked';
    bookInfo.innerHTML = `
      <td>${books[i].title}</td>
      <td>${books[i].author}</td>
      <td>${books[i].pages}</td>
      <td><input type="checkbox" onclick="changeStatus(this);" ${checkbox}></td>
      <td><button onclick="removeBook(this);">Remove</button></td>
    `;
    libraryTable.appendChild(bookInfo);
  }
  addForm.reset();
}

addForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  const title = bookTitle.value;
  const author = bookAuthor.value;
  const pages = bookPages.value;
  const status = bookStatus.checked;
  const newBook = new Book(title, author, pages, status);
  library.addBook(newBook);
  displayBooks(library.books);
});

function removeBook(book) {
  library.removeBook(book.parentNode.parentNode.firstElementChild.textContent);
  book.parentNode.parentNode.remove();
}

function changeStatus(checkbox) {
  const title = checkbox.parentNode.parentNode.firstElementChild.textContent;
  const bookToChange = library.books.find((obj) => obj.title === title);
  bookToChange.isRead = checkbox.checked;
}

window.onload = () => {
  const firstBook = new Book('12 Rules for Life', 'Jordan Peterson', 409, false);
  const secondBook = new Book('Who Moved My Cheese?', 'Spencer Johnson', 96, true);
  library.addBook(firstBook);
  library.addBook(secondBook);
  displayBooks(library.books);
};
