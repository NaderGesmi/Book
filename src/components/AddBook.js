import React, {useState} from 'react';

const Addbook = (props) => {

    const formState = {
         id:null, 
         name:'', 
         author:'', 
         categorie:''
        }
    const [book, setBook] = useState(formState);

    const handleInput = (e) => {
        const {name, value} = e.target;
        setBook({ ...book, [name]:value })
    }

    const submitBook = (e) => {
        e.preventDefault();
        if(!book.name || !book.author || !book.categorie) return
        props.addBook(book)
        setBook(formState)
    }

    return(
        <form onSubmit={submitBook} >
            <div >
            <label for="">Name</label>
            <input type="text"  name="name" placeholder="Book name" value={book.name} onChange={handleInput}/>
            </div>
            <div >
            <label for="">Author</label>
            <input type="text"  name="author" placeholder="Author" value={book.author} onChange={handleInput} />
            </div>
            <div >
            <label for="">categorie </label>
            <input type="text"  name="categorie" placeholder="categorie" value={book.categorie} onChange={handleInput} />
            </div>
            <button type="submit">Add Book</button>
        </form>
    )
}

export default Addbook;