import React, { useEffect, useState, useContext } from 'react';
import './visitanos.css';
import CardPuntosVentas from '../../components/cardPuntosVentas';
import { jsonPuntosVentas } from '../../constants/constants';
import { LanguageContext } from '../../context/context';
export function Visitanos() {
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
    }
  }, []);

  let sucursales = [];

  try {
    if (configuracionData?.sucursal) {
      sucursales = JSON.parse(configuracionData.sucursal);
    }
  } catch (error) {
    console.error('Error al parsear sucursal:', error);
    sucursales = [];
  }
  // sucursales = jsonPuntosVentas;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  console.log(sucursales);
  return (
    <div className="fondoImmagen">
      <section
        className="visitanos-hero"
        style={{
          backgroundImage: `url('${configuracionData?.rutaPortadaVisitanos}')`,
        }}
      >
        <div className="visitanos-hero-overlay"></div>

        <div className="container h-100 d-flex align-items-center justify-content-center text-center">
          <h2 className="visitanos-hero-title">ENCUENTRA TU PUNTO DE VENTA MÁS CERCANO AQUI</h2>
        </div>
      </section>
      <div className="h-100 d-flex align-items-center justify-content-center text-center" style={{ backgroundColor: 'white' }}>
        {' '}
        <h4 className="p-5 " style={{ fontWeight: '700' }}>
          EXPLORA TODAS NUESTRAS SEDES AQUI
        </h4>
      </div>
      <div className="row row__Visitanos__ubicacion">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="ratio ratio-4x3 custom-map">
            <iframe
              id="iframeMaps"
              src="https://www.google.com/maps/d/embed?mid=1igfWHkwNn4icxRZe3ae2dMeq0MlRKnE&amp;ehbc=2E312F"
              //  src={configuracionData?.rutaGoogleMaps}
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 contenido__cardPuntosVentas__Visitanos">
          <div className="container">
            {sucursales.map((item, indice) => (
              <CardPuntosVentas
                key={indice}
                Nombre={item.nombre}
                Direccion={item.direccion}
                Telefono={item.telefono}
                // RutaGoogleMaps = {item.rutaSucursalGoogle}
                RutaGoogleMaps={item.ruta}
                // ColorCard={configuracionData?.colorCard}
                // ColorLetras={configuracionData?.colorLetras}
                ColorCard="#ffff"
                ColorLetras="#000000"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
