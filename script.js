const library = document.querySelector('.library');
const deleteButtons = document.querySelectorAll('.delete-btn');

const myLibrary = [
  {
    title: '12 rules for life',
    author: 'Jordan Peterson',
    pages: '900',
    status: 'in progress',
  },
];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

function addBookToLibrary(title, author, pages, status) {
  // do stuff here
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
}

addBookToLibrary('bla bla', 'tudor', 500, 'finished');

function displayBooks() {
  myLibrary.forEach((item) => {
    const Row = document.createElement('tr');
    const Title = document.createElement('td');
    const Author = document.createElement('td');
    const Pages = document.createElement('td');
    const Status = document.createElement('td');
    const deleteCell = document.createElement('td');
    const DeleteBtn = document.createElement('button');
    Title.textContent = item.title;
    Author.textContent = item.author;
    Pages.textContent = item.pages;
    Status.textContent = item.status;
    DeleteBtn.textContent = 'Delete';
    DeleteBtn.classList.add('delete-btn');
    DeleteBtn.name = item.title;
    Row.appendChild(Title);
    Row.appendChild(Author);
    Row.appendChild(Pages);
    Row.appendChild(Status);
    Row.appendChild(deleteCell);
    deleteCell.appendChild(DeleteBtn);
    library.appendChild(Row);
  });
}

displayBooks();

deleteButtons.forEach((item) => {
  item.addEventListener('click', () => {
    // myLibrary.pop(myLibrary.filter((item) => item === button.name));
    // console.log(myLibrary);
    // eslint-disable-next-line no-alert
    window.alert('succes');
  });
});
