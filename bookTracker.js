

//from vidoe
// <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
// </link>
// // from w3 schools 

// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


//Book class to add books to it
class Books {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        
    }
}

// addBookButton = document.getElementById("addBookButton");

// addBookButton.addEventListener("click",displayBooks);

// UI class: handle UI tasks. 

class UI {
    static displayBooks() {
        const StoredBooks = storeBooks.getBooks();
        const books = StoredBooks
        // Array.from(books).forEach(function(book){
        //     console.log(book);
        // })
        books.forEach((book) => 
            UI.addBookToList(book));
    }
    
    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const bookRow = document.createElement('tr');
        bookRow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(bookRow);

    }
    //cleaaring entry feilds
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    //deleting book from list. 

    static removeBookFromList(book) {
        if (book.classList.contains('delete')) {
            console.log('deleting book')
            book.parentElement.parentElement.remove();

           


        }
    }
    // Takes message (Please fill out all entries) and //Serverity {alert-danger or alert-success}
    static showAlert(message, severity) {
        const div = document.createElement('div');
        div.className = `alert ${severity}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        container.insertBefore(div, form);

        //vanish in 3 seconds.
     
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

};


//Storage class: handle storing to Local Storage in browser. So data stays until its cleared. After reload/closing tab it will stay. 

class storeBooks {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book) {
        const books = storeBooks.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));

    }

    static removeBook(isbn) {
        const books = storeBooks.getBooks();

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));


    }
}

//Event display books saved.

document.addEventListener('DOMContentLoaded', UI.displayBooks);


// event add book to UI and storage. 
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Validation 
    if(title === '' || author === '' || isbn === ''){
        UI.showAlert('Please Fill in all Fields', 'alert-danger');
    } else { 
        //instantiate the given book to teh book class above. 

        UI.showAlert('Book Added!', 'alert-success');
        const book = new Books(title, author, isbn);
        console.log(book);

        //ading to UI
        UI.addBookToList(book);

        storeBooks.addBook(book);

        //clear the fields.

        UI.clearFields();
    }
    

});

// event remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
     //tut way
     UI.removeBookFromList(e.target);

     storeBooks.removeBook(e.target.parentElement.previousElementSibling.textContent);
     console.log(e.target.parentElement.previousElementSibling.textContent);

     UI.showAlert('Book Removed!', 'alert-success');

        // //myway:
        //if (e.target.classList.contains('delete')) {

        // const bookInList = e.target.parentElement.parentElement;
        // console.log(bookInList);
        // bookInList.remove();
        // console.log(bookInList);
});
        
 