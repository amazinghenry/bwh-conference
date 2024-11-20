import styles from './Speaker.module.css';
import speakerData from '../../data/index.js';
import SpeakerCard from './SpeakerCard';

const SpeakerList = ({heading}) => {

    const SpeakerCards = speakerData.map((speaker)=> {
        return <SpeakerCard
        key = {speaker.id}
        id = {speaker.id}
        title = {speaker.title}
        position = {speaker.position}
        company = {speaker.company}
        imageUrl = {speaker.imageUrl}
        />
    }) 

    if (speakerData.length === 0) return <div className='text-warning text-center my-5'>No Speakers Available</div>
  
    return ( 
        <section className= {`contaier-fluid ${styles.Speakers}`} id="speakers">
            <div className={`container`}>
                <h2>{ heading }</h2>
                <div className={styles.SpeakerGroup}>
                    { SpeakerCards }
                </div>
            </div>
        </section>
    );
}
 
export default SpeakerList;