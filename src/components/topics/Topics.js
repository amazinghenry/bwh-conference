import styles from './topics.module.css';

const Topics = () => {
    return (
        <section className = {`container ${styles.Topics}`} id="topics">

            <h2>Areas of Discussion</h2>

            <ul className={`list-group`}>
                <li className={`list-group-item`}>Female Inclusion; Empowering The Female CEO</li>
                <li className={`list-group-item`}>Time & Health Management for The Growing Business Leader</li>
                <li className={`list-group-item`}>Promoting creativity and art as a tool for business growth </li>
            </ul>
            
        </section>
    );
}
 
export default Topics;