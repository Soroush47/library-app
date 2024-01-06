import Book from "./Book";

function Books({ books, likeHandler, theme }) {
    return (
        <div style={{ width: "100%" }}>
            {books.map(book => (
                <Book
                    key={book.id}
                    data={book}
                    // setFavorites={setFavorites}
                    likeHandler={likeHandler}
                    // removeHandler={removeHandler}
                    theme={theme}
                />
            ))}
        </div>
    );
}

export default Books;
