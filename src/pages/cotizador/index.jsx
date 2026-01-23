import React, { useContext } from 'react';
import './cotizador.css';
import { LanguageContext } from '../../context/context';
import { useEffect } from 'react';
export function Cotizador() {
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
    }
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  const rawProducto = localStorage.getItem('producto');

  const id_producto = rawProducto && rawProducto !== 'null' && rawProducto !== 'undefined' ? rawProducto : null;

  const rutaBase = configuracionData?.rutaCotizador;

  const rutaIframe = id_producto ? `${rutaBase}?producto=${id_producto}` : rutaBase;
  useEffect(() => {
    console.log(rutaIframe);
  }, [rutaIframe]);

  const handleClickWhatsapp = () => {
    const telefono = '57' + configuracionData?.whatsapp;
    window.open(`https://wa.me/${telefono}`, '_blank');
  };
  return (
    <div>
      {/* <div style={{background: "white"}}> */}
      {/* HERO COTIZADOR FULL WIDTH */}
      <section
        className="cotizador-hero"
        style={{
          backgroundImage: `url('${configuracionData?.rutaPortadaCotizador}')`,
        }}
      >
        <div className="cotizador-hero-overlay"></div>

        <div className="container h-100 d-flex align-items-center justify-content-center text-center">
          <h1 className="cotizador-hero-title">COTIZADOR</h1>
        </div>
      </section>

      <div className="FondoCotizador">
        <div className="row" style={{ paddingTop: '20px' }}>
          <div className="col-md-12 coll-sm-12 row__iframe__Cotizador">
            <iframe
              id="cotizador"
              //   src="https://aburramotos.7-24.co/mercadeo/leads/iframe/2f4c07b6b8b5abfee7ed89cd0befe0dd/"
              src={rutaIframe}
              allow="geolocation"
              name="myIFrame"
              className="iframe__row__Cotizador"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
