import React, { useContext } from 'react';
import './cardMotocicleta.css';
import { LanguageContext } from '../../context/context';
import nophoto from '../../../public/images/nophoto.jpg';

const CardMotocicleta = ({ Marca, NombreProducto, Modelo, Imagen, Precio, producto }) => {
  const { setProductoSeleccionado } = useContext(LanguageContext);

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 div__Contenido__card__Motocicleta" onClick={() => setProductoSeleccionado(producto)}>
      <div className="card card__Motocicleta h-100">
        {/* IMAGEN */}
        <div className="card__img__container">
          <img src={Imagen || nophoto} className="card-img-top card__img" alt={NombreProducto} />
        </div>

        {/* LINEA */}
        <div className="card__Motocicleta__linea__padre">
          <div className="card__Motocicleta__linea" />
        </div>

        {/* CONTENIDO */}
        <div className="card-body p-3">
          {/* MARCA / MODELO */}
          <div className="row mb-0">
            <div className="col-6 marca__card__Motocicleta">{Marca}</div>
            <div className="col-6 modelo__card__Motocicleta--">{Modelo}</div>
          </div>

          {/* NOMBRE */}
          <div className="row mb-0">
            <div className="col-12 nombre__card__Motocicleta">{NombreProducto}</div>
          </div>

          {/* PRECIO */}
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <div className="card__precio__Motocicleta">{Precio}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMotocicleta;
