import styles from './About.module.css';

const About = () => {
    return ( 
        <section className={`container ${styles.AboutContainer}`} id="about">
            <div className={styles.VideoContainer}>
            <iframe 
                src="https://www.youtube.com/embed/fm81ivI0xoQ?si=qXYV31fhfvxKTEsj" 
                className={styles.VideoStyle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
            ></iframe>
            </div>
            <div className={styles.AboutText}>
                <h2>The 2025 Business Wowen Hub Conference</h2>
                <p>In this era of technology, Building and growing your business empire
                    with the right tools and drive is crucial. The 2025 edition of the Business Women Hub Conference themed: Accelerating Female Inclusion: How, Why & Now is organized by the Businesswomen Hub, a platform dedicated to the growth of female-owned businesses via sales and marketing training, general business workshops, and financial sourcing for these businesses in Africa, especially within their first five years of existence. In line with the goals of this year's International Women's Day,
                </p>
                <p>
                    We will be discussing the need to expand processes through innovation and technology in the business sector, how to become relevant in their niche, as well as ways to provide top-notch services in their businesses.
                </p>
                <p>
                Why are we doing this? Globally, women are gradually taking their place in business in Africa via technology and new media, particularly in Nigeria. Though, not at a fast pace. We hope to speed this up by encouraging women to break the stereotypical African woman's status and venture into different business sectors.
                </p>
                <div className="d-flex justify-content-center align-items-center">
                    <a href="https://forms.gle/7jYNYJfbQCfMsLy17" target="_blank" rel="noreferrer" className ={`btn btn-primary d-block w-auto`}>Register Now</a>
                </div>
            </div>
        </section>
    );
}
 
export default About;