import styles from './EventGallery.module.css';
import { useState } from 'react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const EventGallery = ({ images }) => {
    const [isOpen, setIsOpen ] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const handleImageClick = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
      };
    
    return (
        <div className={`container ${styles.Gallery}`}>
            <h2>Past Event Gallery</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                breakpoints={{
                320: { slidesPerView: 1 }, // For screens >= 320px
                640: { slidesPerView: 2 }, // For screens >= 640px
                1024: { slidesPerView: 3 }, // For screens >= 1024px
                }}
                >
                {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <img
                    src={img}
                    alt={`Event ${index + 1}`}
                    style={{ cursor: 'pointer', width: '100%', borderRadius: '8px' }}
                    onClick={() => handleImageClick(index)}
                    />
                </SwiperSlide>
                ))}
            </Swiper>

            {isOpen && (
                <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                    setPhotoIndex((photoIndex + images.length - 1) % images.length)
                }
                onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % images.length)
                }
                />
            )}
        </div>
    );
}
 
export default EventGallery;