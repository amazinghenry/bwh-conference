import styles from './EventGallery.module.css';
import EventGallery from "./EventGallery";
import gallery1 from "../../assets/bwhpastevent/bwh2023-1.jpg";
import gallery2 from "../../assets/bwhpastevent/bwh2023-2.jpg"; 
import gallery3 from "../../assets/bwhpastevent/bwh2023-3.jpg";
import gallery4 from "../../assets/bwhpastevent/bwh2023-4.jpg";
import gallery5 from "../../assets/bwhpastevent/bwh2023-5.jpg"; 
import gallery6 from "../../assets/bwhpastevent/bwh2024-1.jpg"; 
import gallery7 from "../../assets/bwhpastevent/bwh2024-2.jpg"; 
import gallery8 from "../../assets/bwhpastevent/bwh2024-3.jpg"; 
import gallery9 from "../../assets/bwhpastevent/bwh2024-4.jpg";
import gallery10 from "../../assets/bwhpastevent/bwh2024-5.jpg"; 


const EventGalleryList = () => {
    const eventImages = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,
        gallery9,
        gallery10,
      ];

    return (
        <div className={styles.EventGalleryList}>
            <EventGallery images={eventImages} />
        </div>
    );
}
 
export default EventGalleryList;