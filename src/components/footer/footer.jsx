import React from 'react';
import styles from './footer.scss';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return <div className={styles.footer}>©{year} șoimu_07. All rights reserved.</div>;
};

export default Footer;
