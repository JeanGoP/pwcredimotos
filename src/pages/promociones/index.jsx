import React, { useEffect, useState, useContext } from 'react';
import CardPromociones from '../../components/cardPromociones';
import './promociones.css';
import { jsonLinkPromociones } from '../../constants/constants';
import { LanguageContext } from '../../context/context';
export function Promociones() {
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  let ImgPromociones = [];

  try {
    if (configuracionData?.promocionesImagen) {
      ImgPromociones = JSON.parse(configuracionData.promocionesImagen);
    }
  } catch (error) {
    console.error('Error al parsear promocionesImagen:', error);
    ImgPromociones = [];
  }
  // ImgPromociones = [
  //         {
  //             ruta:"/images/credimovilagosto_1.jpg"
  //         },
  //         {
  //             ruta:"/images/credimovilagosto_2.jpg"
  //         },
  //         {
  //             ruta:"/images/credimovilagosto_2.jpg"
  //         }
  // ]
  return (
    <div style={{ backgroundColor: '#eeeeee' }} className="fondoImmagen">
      {/* HERO PROMOCIONES FULL WIDTH */}
      <section
        className="promociones-hero"
        style={{
          backgroundImage: `url('${configuracionData?.rutapromocionesportada}')`,
        }}
      >
        <div className="promociones-hero-overlay"></div>

        <div className="container h-100 d-flex align-items-center justify-content-center text-center">
          <h1 className="promociones-hero-title">PROMOCIONES</h1>
        </div>
      </section>

      <div className="row__card__imagenes__promociones">
        <div className="container contenido--promociones">
          <div className="row">
            {ImgPromociones.map((item, index) => (
              <CardPromociones key={index} Url={item.imagen} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
