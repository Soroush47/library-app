import styles from "./Footer.module.css";

function Footer({ theme }) {
    return (
        <div className={`${styles.container} ${styles[theme]}`}>
            <p>
                Developed by{" "}
                <span className={styles[`${theme}Name`]}>Soroush Ghasemi</span>
            </p>
        </div>
    );
}

export default Footer;
