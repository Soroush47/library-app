import styles from "./Header.module.css";
import lightTheme from "../assets/light-theme.png";
import darkTheme from "../assets/dark-theme.png";

const images = {
    darkTheme,
    lightTheme,
};

function Header({ theme, setTheme }) {
    return (
        <div className={`${styles.container} ${styles[theme]}`}>
            <h1>Library App</h1>
            <p>
                <a href="https://botostart.ir" className={styles[`${theme}Boto`]}>
                    Botostart
                </a>
                | React.js Full Course
                <img
                    src={images[`${theme}Theme`]}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
            </p>
        </div>
    );
}

export default Header;
