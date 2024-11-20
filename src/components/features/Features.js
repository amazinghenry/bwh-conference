import styles from './Features.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import keynote from '../../assets/1-keynote.png';
import panel from '../../assets/2-panel.png';
import charting from '../../assets/3-charting.png';
import emotions from '../../assets/4-emotions.png';

const Features = () => {
    const [ref, inView] = useInView({ triggerOnce: true });
    
    return ( 
        <motion.section 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className={styles.Features} 
        id="features">
            <div className={`container`}>
                <h2>Features</h2>
                <div className={styles.FeatureGroup}>

                    <div className={styles.FeatureItem}>
                        <img src={keynote} alt='keynote' className={`img-fluid`} />
                        <div>Keynote Presentations</div>
                    </div>
                    <div className={styles.FeatureItem}>
                        <img src={panel} alt='panel' className={`img-fluid`} />
                        <div>Panel Sessions</div>
                    </div>
                    <div className={styles.FeatureItem}>
                        <img src={charting} alt='charting' className={`img-fluid`} />
                        <div>Awards & Recognition of members, partners, and industry leaders</div>
                    </div>
                    <div className={styles.FeatureItem}>
                        <img src={emotions} alt='emotion' className={`img-fluid`} />
                        <div>Exhibitions</div>
                    </div>

                </div>
                
            </div>
        </motion.section>
    );
}
 
export default Features;