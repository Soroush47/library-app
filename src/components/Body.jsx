import { useState } from "react";

import Search from "./Search";
import Books from "./Books";
import Favorites from "./Favorites";

function Body({ booksData, theme }) {
    const [books, setBooks] = useState(booksData.map(book => ({ ...book, like: false })));
    const [search, setSearch] = useState("");

    const likeHandler = id => {
        const newBooks = books.map(book =>
            id === book.id ? { ...book, like: !book.like } : book
        );
        setBooks(newBooks);
    };

    // const removeHandler = id => {
    //     setFavorites(favorites => favorites.filter(favorite => favorite.id !== id));
    // };

    const favorites = books.filter(book => book.like);

    return (
        <>
            <Search searchHandler={setSearch} theme={theme} />
            <div style={{ display: "flex" }}>
                <Books
                    books={books.filter(book =>
                        book.title
                            .toLowerCase() //toLocaleLowerCase
                            .includes(search.toLowerCase())
                    )}
                    // setFavorites={book => setFavorites(favorites => [...favorites, book])}
                    likeHandler={likeHandler}
                    // removeHandler={removeHandler}
                    theme={theme}
                />
                {!!favorites.length && <Favorites favorites={favorites} theme={theme} />}
            </div>
        </>
    );
}

export default Body;
