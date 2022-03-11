import React, {useState} from 'react';
import './index.css';
import Books from './components/books';
import Addbook from './components/AddBook';
import EditBook from './components/EditBook';
function App() {

  const bookData = [
    { id: 1, name: 'one piece', author: 'eichiro odaa', categorie: 'categorie1'},
    { id: 2, name: 'naruto', author: 'ùmpohamed', categorie: 'categorie2'},
    { id: 2, name: 'death note', author: 'imed', categorie: 'categorie3'}
  ]
  const formState = {id:null, name:'', author:'', categorie:''}
  const [books, setBooks] = useState(bookData);
  const [edit, setEdit] = useState(false);
  const [currentBook, setCurrentBook] = useState(formState);

  const addBook = book => {
    book.id = books.length + 1;
    setBooks([...books, book]);
  }

  const editBook = book => {
    setEdit(true)
    setCurrentBook({ id:book.id, name:book.name, author:book.author, categorie:book.categorie })
  }
  const updateBook = (id, updatedBook) => {
    setEdit(false)
    setBooks(books.map(book => (book.id === id ? updatedBook : book )))
  }
  const deleteBook = id => {
    setEdit(false);
    setBooks(books.filter(book => book.id !== id))
  }



  return (
    <div className="container">
      <div >
        <h1>LIBRARY </h1>
        <br/>
        <br/>
      </div>
      <div >
      <div >
        {edit ? (
          <div>
              <h2>Edit Book</h2>
              <EditBook 
                edit={edit}
                setEdit={setEdit}
                currentBook={currentBook}
                updateBook={updateBook}
              />
          </div>
        ) : (
          <div>
            <h1>Add A Book</h1>
              <Addbook
                addBook={addBook}
            />
          </div>
        )}
      </div>
      <div >
        <h1>Available Books</h1>
          <Books
            books={books}
            editBook={editBook}
            deleteBook={deleteBook}
          />
      </div>
      </div>
    </div>
  );
}

export default App;