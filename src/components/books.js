import React from 'react';

const Books = (props) => {
    return(
        <div >
        <table className="table" border='1'>
            <thead>
                <tr>
                <th >id</th>
                <th >Name</th>
                <th >Author</th>
                <th >categorie</th>
                <th >Edit</th>
                <th >Delete</th>
                </tr>
            </thead>
            <tbody >
                {props.books.length > 0 ? (
                    props.books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.categorie}</td>
                            <td>
                                <button 
                                    
                                    onClick={() => {
                                        props.editBook(book)
                                    }}
                                >
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => {
                                        props.deleteBook(book.id)
                                    }}
                                    
                                >
                                Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>No Books Available</td>
                    </tr>
                )}
            </tbody>
        </table>
        </div>
    )
}

export default Books;