import * as stylex from "@stylexjs/stylex";

import styles from "./Header.module.css";
import lightTheme from "../assets/light-theme.png";
import darkTheme from "../assets/dark-theme.png";

// const styles = stylex.create({
//     container: {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         borderRadius: "10px",
//         padding: "10px",
//         marginBottom: "80px",
//     },
//     dark: {
//         backgroundColor: "#2b2b2b",
//         color: "#e0e0e0",
//     },
//     light: {
//         backgroundColor: "#b75b8ecc",
//         color: "#2b2b2b",
//     },
//     p: {
//         display: "flex",
//         alignItems: "center",
//     },
//     a: {
//         marginRight: "3px",
//         textDecoration: "none",
//         fontWeight: "700",
//     },
//     darkIcon: {
//         color: "#dc74aecc",
//     },
//     lightIcon: {
//         color: "#660d41",
//     },
//     img: {
//         height: "40px",
//         padding: {
//             default: "10px",
//             ":hover": "7px",
//         },
//         cursor: "pointer",
//         marginLeft: "10px",
//     },
// });

const images = {
    darkTheme,
    lightTheme,
};

function Header({ theme, setTheme }) {
    return (
        // <div {...stylex.props(styles.container, styles[theme])}>
        <div className={`${styles.container} ${styles[theme]}`}>
            <h1>Library App</h1>
            {/* <p {...stylex.props(styles.p)}> */}
            <p>
                {/* <a
                    href="https://github.com/Soroush47"
                    {...stylex.props(styles.a, styles[`${theme}Icon`])}
                > */}
                <a href="https://github.com/Soroush47" className={styles[`${theme}Icon`]}>
                    My Github
                </a>
                | React.js App
                <img
                    // {...stylex.props(styles.img)}
                    src={images[`${theme}Theme`]}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
            </p>
        </div>
    );
}

export default Header;
