import React from 'react';
import styles from "./pagesStyles.module.css";


const NotFound404 = () => {
    return (
        <div className={styles.notFound}>
            <p className="text text_type_main-large">Такой страницы нет :(</p>
        </div>
    );
};

export default NotFound404;
