import React, { useContext } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../context/context';
import './footer.css';

function Footer() {
  const navigate = useNavigate();
  const { configuracionData = {} } = useContext(LanguageContext);

  const handlePagina = (ruta, seccionId = null) => {
    localStorage.setItem('producto', '');
    if (ruta === '/' && seccionId) {
      navigate(ruta);
      setTimeout(() => {
        document.getElementById(seccionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      window.scrollTo({ top: 0 });
      navigate(ruta);
    }
  };

  const handleClickWhatsapp = () => {
    const telefono = '57' + configuracionData?.whatsapp;
    window.open(`https://wa.me/${telefono}`, '_blank');
  };

  return (
    <footer className="footer__main">
      <div className="container footer__content">
        <div className="row">
          {/* LOGO + REDES */}
          <div className="col-lg-4 col-md-6 footer__col">
            <img src="/images/logoSabanamotos.png" alt="Credimotos" className="footer__logo" />

            <p className="footer__subtitle">REDES SOCIALES</p>

            <div className="footer__socials">
              <a href={configuracionData?.rutaFacebook} target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
              <a href={configuracionData?.rutaInstagram} target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <span onClick={handleClickWhatsapp}>
                <FaWhatsapp />
              </span>
            </div>
          </div>

          {/* EXPLORA */}
          <div className="col-lg-3 col-md-6 footer__col">
            <h5 className="footer__title">Explora</h5>
            <p onClick={() => handlePagina('/')}>Inicio</p>
            <p onClick={() => handlePagina('/', 'catalogo-motos')}>Motos</p>
            <p onClick={() => handlePagina('/cotizacion')}>Cotizar una moto</p>
          </div>

          {/* NOSOTROS */}
          <div className="col-lg-3 col-md-6 footer__col">
            <h5 className="footer__title">Nosotros</h5>
            <p onClick={() => handlePagina('/visitanos')}>Puntos de venta</p>
            <p onClick={() => handlePagina('/postventa')}>Postventas</p>
            <p onClick={() => handlePagina('/tratamientoDatos')}>Tratamiento de datos</p>
          </div>

          {/* AYUDA */}
          <div className="col-lg-2 col-md-6 footer__col">
            <h5 className="footer__title">Ayuda</h5>
            <p onClick={() => handlePagina('/tratamientoDatos')}>Tratamientos de datos</p>
            <a className="clickable icono_footer" href="https://lineaetica.onrender.com/?empresa=Credimotos" target="_blank" style={{textDecoration:'none', color:'#d8d8d8', fontSize:'15px'}} >Línea Ética</a> 
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer__bottom">Copyright © 2023. Credimotos All rights reserved | Desing By @HakuCreativo SAS</div>
      </div>
    </footer>
  );
}

export default Footer;
