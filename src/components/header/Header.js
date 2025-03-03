import styles from './Header.module.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
// import butterFly from '../../assets/wd-butterfly.png';
// import { useState } from 'react';
import { motion } from 'framer-motion';
import bwhPromo from '../../assets/bwhpromo.webp'



const Header = () => {

    // const [dismiss, setDismiss] = useState(true)
    // const handleClick = () => {
    //     setDismiss(false)
    // }
    return (
        <header className={`container-fluid`}>
            <div className={`container ${styles.headerContainer}`}>
            <motion.div 
            className={`container`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                >
            <div className={styles.HeaderGroup}>
                <div>Business Women Hub Conference 2025</div>
                <div className={styles.Theme}> Accelerating Female Inclusion : <span className='text-light'> How, Why & Now</span></div>
                <div className={styles.Date}> <FaCalendarCheck size={20} />  Wednesday March 26th, 2025 || 9:00AM</div>
                <div className={styles.Venue}><FaLocationDot size={20} /> City of Palms, 34/36 Faramobi Ajike Street, Anthony Village, Lagos</div>
                <a className = {`btn btn-primary`} href="https://forms.gle/7jYNYJfbQCfMsLy17" target="_blank" rel="noreferrer" id="register">Register Now</a>
                
                {/* { dismiss && <img src={butterFly} alt = " Womens day" className = {`img-fluid ${styles.HeaderButterfly}`} onClick={handleClick} /> } */}
            
            </div>
            </motion.div>
            <img src={bwhPromo} alt='a woman excited by money' className={` img-fluid `} />
            </div>
           
        </header>
    );
}
 
export default Header;