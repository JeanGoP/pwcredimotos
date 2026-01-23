import React from 'react';
import './carousel.css';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
function CarouselPeque({ img = '' }) {
  const rutalogin = useNavigate();

  const jsonItemsTecnicos = [
    {
      titulo: 'images/banners/banner-cb300f-dream-motos-web.jpg',
    },
    {
      titulo: 'images/banners/CB100_bannermoto.jpg',
    },
    {
      titulo: 'images/banners/CB190R_bannermoto.jpg',
    },
  ];

  const rutas = useMemo(() => {
    try {
      if (typeof img === 'string' && img.trim() !== '') {
        return JSON.parse(img);
      }
      if (Array.isArray(img)) {
        return img;
      }
      return [];
    } catch (e) {
      console.error('Error al parsear img:', e);
      return [];
    }
  }, [img]);

  const slides = rutas.map((ruta, index) => ({
    img: ruta,
    alt: `Imagen ${index + 1}`,
  }));

  if (slides.length === 0) {
    return <p>Cargando imágenes...</p>;
  }

  return (
    <div id="carouseContenido" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators" style={{ maxHeight: '550px' }}>
        {jsonItemsTecnicos.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouseContenido"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {jsonItemsTecnicos.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className="carousel-img-wrapper">
              <img src={slide.titulo} className="d-block w-100 carousel__Imagen" alt={slide.titulo} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselPeque;
