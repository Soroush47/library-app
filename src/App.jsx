import { useState } from "react";

import Layout from "./layout/Layout";
import Body from "./components/Body";
import { books } from "./constants/mockData";

import styles from "./App.module.css";

function App() {
    const [theme, setTheme] = useState("dark");

    return (
        <div className={styles[theme]}>
            <div className={styles.container}>
                <Layout theme={theme} setTheme={setTheme}>
                    <Body booksData={books} theme={theme} />
                </Layout>
            </div>
        </div>
    );
}

export default App;
