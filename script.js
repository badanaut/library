const myLibrary = [
  {
    title: '12 rules for life',
    author: 'Jordan Peterson',
    pages: '900',
    status: 'in progress',
  },
  {
    title: 'So good they can\'t ignore you',
    author: 'Cal Newport',
    pages: '1500',
    status: 'Not read',
  },
  {
    title: 'Unfu*k yourself',
    author: 'Gary John Bishop',
    pages: '400',
    status: 'Read',
  },
];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = status;
  }
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

const library = document.querySelector('.library');

myLibrary.forEach((item) => {
  const newRow = document.createElement('tr');
  const newTitle = document.createElement('td');
  const newAuthor = document.createElement('td');
  const newPages = document.createElement('td');
  const newStatus = document.createElement('td');
  newTitle.textContent = item.title;
  newAuthor.textContent = item.author;
  newPages.textContent = item.pages;
  newStatus.textContent = item.status;
  newRow.appendChild(newTitle);
  newRow.appendChild(newAuthor);
  newRow.appendChild(newPages);
  newRow.appendChild(newStatus);
  library.appendChild(newRow);
});
