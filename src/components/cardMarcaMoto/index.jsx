import React from 'react';
import './cardMarcaMoto.css';

const CardMarcaMoto = ({ Titulo, Descripcion, Imagen, onClick }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="container d-flex mt-5">
        <div className="card hover-zoom-card shadow-border w-100 overlay-card position-relative" onClick={onClick} style={{ cursor: 'pointer' }}>
          {/* Imagen */}
          <img src={Imagen} className="card-img" alt={Titulo} />

          {/* Texto encima */}
          <div className="card-img-overlay d-flex flex-column justify-content-between">
            <div className="align-self-start contenedor__titulo__CardMarcaMoto">
              <span className="titulo__CardMarcaMoto">{Titulo}</span>
            </div>

            <div className="contenedor__descripcion__CardMarcaMoto">
              <p className="card-text mb-0">{Descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMarcaMoto;
