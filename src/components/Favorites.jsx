import Favorite from "./Favorite";

import styles from "./Favorites.module.css";

function Favorites({ favorites, theme }) {
    return (
        <div className={`${styles.container} ${styles[theme]}`}>
            <h4>Favorites</h4>
            {favorites.map(fav => (
                <Favorite
                    key={fav.id}
                    image={fav.image}
                    title={fav.title}
                    theme={theme}
                />
            ))}
        </div>
    );
}

export default Favorites;
