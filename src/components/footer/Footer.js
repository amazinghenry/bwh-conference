import styles from './Footer.module.css';

const Footer = () => {
    return ( 
        <footer>
            <div className={styles.FooterTitle}>To Exhibit or Participate </div>
            <div className={styles.FooterItem}>234 812 8661 645 | 234 906 0441 372 | 234 809 7845 064</div>
            <div className={styles.FooterItem}>hello@businesswomen.com.ng</div>
        </footer>
    );
}
 
export default Footer;