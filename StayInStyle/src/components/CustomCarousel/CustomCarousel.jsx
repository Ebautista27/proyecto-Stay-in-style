import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CustomCarousel.css';

const CustomCarousel = () => {
  const videos = [
    {
      img: '/src/assets/Imagenes/prenda_video.jpeg',
      video: '/Videos/video_principal.mp4',
      alt: 'Primera imagen con video',
    },
    {
      img: '/src/assets/Imagenes/chaqueta negra carrusel.jpeg',
      video: '/Videos/video_chaqueta_negra_carrusel.mp4',
      alt: 'Segunda imagen con video',
    },
    {
      img: '/src/assets/Imagenes/camiseta carrusel.jpeg',
      video: '/Videos/video_camiseta_carrusel.mp4',
      alt: 'Tercera imagen con video',
    },
  ];

  return (
    <div className="carousel-container">
      <Carousel>
        {videos.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-slide">
              {/* Imagen */}
              <div className="carousel-content">
                <img src={item.img} alt={item.alt} className="carousel-image" />
              </div>
              {/* Video */}
              <div className="carousel-content">
                <video controls className="carousel-video">
                  <source src={item.video} type="video/mp4" />
                  Tu navegador no soporta este video.
                </video>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
