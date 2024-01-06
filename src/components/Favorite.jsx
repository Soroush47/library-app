import styles from "./Favorite.module.css";

function Favorite({ image, title, theme }) {
    return (
        <div className={`${styles.container} ${styles[theme]}`}>
            <img src={image} />
            <p>{title}</p>
        </div>
    );
}

export default Favorite;
