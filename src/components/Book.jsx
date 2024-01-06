import styles from "./Book.module.css";
import heart from "../assets/heart.png";
import redHeart from "../assets/red-heart.png";

function Book({
    data: { id, image, title, author, language, pages, like },
    likeHandler,
    theme,
}) {
    return (
        <div className={`${styles.card} ${styles[theme]}`}>
            <img src={image} className={styles.bookImg} />
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{author}</p>
                <div>
                    <span>{language}</span> <span>{pages} pages</span>
                </div>
            </div>
            <img
                onClick={() => likeHandler(id)}
                src={like ? redHeart : heart}
                className={styles.heart}
            />
        </div>
    );
}

export default Book;
