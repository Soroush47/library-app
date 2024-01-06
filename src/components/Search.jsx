import { useState } from "react";

import styles from "./Search.module.css";
import darkSearchImg from "../assets/dark-search2.png";
import lightSearchImg from "../assets/light-search.png";

function Search({ searchHandler, theme }) {
    const [search, setSearch] = useState("");

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Search title"
                className={styles[`${theme}Input`]}
                value={search}
                onChange={event => setSearch(event.target.value)}
                onKeyUp={event => event.key === "Enter" && searchHandler(search)}
            />
            <img
                src={theme === "dark" ? darkSearchImg : lightSearchImg}
                className={styles[`${theme}Img`]}
                onClick={() => searchHandler(search)}
            />
        </div>
    );
}

export default Search;
