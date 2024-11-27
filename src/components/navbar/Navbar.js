import styles from './Navbar.module.css';
import bwhlogo from '../../assets/bwh-logo.png';

const Navbar = () => {

    return ( 
        <nav>
        <div className="container navbar">
            <img src={ bwhlogo } alt='' className={`img-fluid ${styles.MainLogo}` }  />
            <div className="link-group ">
                    <a href="#about" className={` text-light mx-2 ${styles.LinkItem}`} >About</a>
                    <a href="#features" className={` text-light mx-2 ${styles.LinkItem}`}>Features</a>
                    <a href="#topics" className={` text-light mx-2 ${styles.LinkItem}`}>Topics</a>
                    <a href="#speakers" className={` text-light mx-2 ${styles.LinkItem}`}>Speakers</a>
                    <a href="#agenda" className={` text-light mx-2 ${styles.LinkItem}`}>Agenda</a>
            </div>
                <a className = {`btn btn-primary`} href="https://forms.gle/7jYNYJfbQCfMsLy17" target="_blank" rel="noreferrer" id="register">Register Now</a>
            </div>

            
        </nav>
     );
}
 
export default Navbar;