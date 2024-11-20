import styles from './Speaker.module.css';

const SpeakerCard = ({ id, title, position, company, imageUrl }) => {
    
    return ( 
        <div className={styles.SpeakerItem} key={id}>
            <img src = { `./images/${imageUrl}` } alt=' ' className='img-fluid' />
            <div className={styles.SpeakerInfo}>
                <div className={styles.SpeakerTitle}>{title}</div>
                <div className={styles.SpeakerPosition}>{position}</div>
                <div className={styles.SpeakerCompany}>{company}</div>
            </div>
        </div>
    );
}
 
export default SpeakerCard;