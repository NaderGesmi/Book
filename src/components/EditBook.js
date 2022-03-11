import React, {useState, useEffect} from 'react';

const EditBook = (props) => {

    const [book, setBook] = useState(props.currentBook);

    useEffect(() => {
        setBook(props.currentBook)
    }, [props])

    const handleInput = (e) => {
        const {name, value} = e.target;
        setBook({ ...book, [name]:value })
    }

    const submitEditForm = (e) => {
        e.preventDefault();
        props.updateBook(book.id, book)
    }


    return(
        <form onSubmit={submitEditForm} >
            <div >
            <label for="">Name</label>
            <input type="text" name="name" placeholder="Book name" value={book.name} onChange={handleInput}/>
            </div>
            <div >
            <label for="">Author</label>
            <input type="text"  name="author" placeholder="Author" value={book.author} onChange={handleInput} />
            </div>
            <div >
            <label for="">categorie </label>
            <input type="text"  name="categorie" placeholder="categorie" value={book.categorie} onChange={handleInput} />
            </div>
            <button >Submit</button>
            <button 
                type="submit" 
                
                onClick={() => props.setEdit(false)}
            >
                Cancel
            </button>
        </form>
    )
}

export default EditBook;