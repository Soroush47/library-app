import Book from "./Book";

import styles from "./Books.module.css";

function Books({ books, likeHandler, theme }) {
    return (
        <div className={styles.books}>
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
