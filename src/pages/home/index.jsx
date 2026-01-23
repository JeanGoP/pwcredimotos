import React, { useContext } from 'react';
import Carousel from '../../components/carousel';
import CardTecnologia from '../../components/cardTecnologia';
import { jsonBarraPorcentaje, jsonLinkMarcas } from '../../constants/constants';
import SeccionMotoDetallada from '../../components/seccionMotoDetallada';
import BarraPorcentaje from '../../components/barraPorcentaje';
import SeccionBarraPorcentaje from '../../components/seccionBarraPorcentaje';
import TituloSeccionBarraPorcentaje from '../../components/tituloSeccionBarraPorcentaje';
import DescripcionSeccionBarraPorcentaje from '../../components/descripcionSeccionBarraPorcentaje';
import VideoPublicitario from '../../components/videoPublicitario';
import MarcasPublicitarias from '../../components/marcasPublicitaria';
import CatalogoMoto from '../../components/catalogoMoto';
import './home.css';
import { LanguageContext } from '../../context/context';
import CarruselAliados from './carousel';
import AnimatedCounter from './animator';
import { useEffect } from 'react';
import CarouselPeque from '../../components/carouselpeque';
import TecnologiaHonda from '../../components/tecnoloogia';

export function Home() {
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
    }
  }, []);

  const textoCompleto = configuracionData?.descripcionMoto_1 || '';
  const mitad = Math.floor(textoCompleto.length / 2);
  let puntoDivision = textoCompleto.indexOf(' ', mitad);
  if (puntoDivision === -1) puntoDivision = mitad;

  const descripcion1 = textoCompleto.slice(0, puntoDivision).trim();
  const descripcion2 = textoCompleto.slice(puntoDivision).trim();

  const jsonItemsTecnicos = [
    {
      titulo: 'ARRANQUE',
      // descripcion: configuracionData?.arranqueMoto_2 || '',
      descripcion: 'Eléctrico',
    },
    {
      titulo: 'TORQUE MÁXIMO',
      //descripcion: configuracionData?.torqueMoto_2 || '',
      descripcion: '21.5 N.m @ 6500 rpm',
    },
    {
      titulo: 'LLANTA DELANTERA',
      //descripcion: configuracionData?.bateriaMoto_2 || '',
      descripcion: '100/80-17 , 52P Tubeless',
    },
    {
      titulo: 'FRENO DELANTERO',
      //descripcion: configuracionData?.transmisionMoto_2 || '',
      descripcion: 'ABS, Disco de 300 mm (Doble Canal)',
    },

    {
      titulo: 'Peso',
      // descripcion: configuracionData?.pesoMoto_2 || '',
      descripcion: '162 KG',
    },
    {
      titulo: 'FRENO TRASERO',
      //descripcion: configuracionData?.tanqueMoto_2 || '',
      descripcion: 'ABS, Disco de 230 mm',
    },
  ];

  const scrollToCatalogoMoto = () => {
    const section = document.getElementById('contenidoMotocicleta');
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // top
      });
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div style={{ background: '' }}>
      <div className="container-fluid conte--carousel">
        <div className="row justify-content-center">
          <div className="col-12">
            <Carousel img={configuracionData?.rutaImgCarrousel || ''} />
          </div>
        </div>
      </div>
      <div className="container-fluid conte--carousel" style={{ backgroundColor: 'black', paddingTop: '100px' }}>
        <div className="row justify-content-center">
          <div className="col-8">
            <CarouselPeque img={configuracionData?.rutaImgCarrousel || ''} />
          </div>
        </div>
      </div>
      <div className="container-fluid conte--carousel" style={{ backgroundColor: 'black', paddingTop: '100px' }}>
        <div className="row justify-content-center">
          <div className="col-10">
            <TecnologiaHonda />
          </div>
        </div>
      </div>
      <div>
        <div style={{ background: '#000000' }}>
          <div className="container-fluid">
            <div className="row  justify-content-center " style={{ position: 'relative' }}>
              {/* {jsonSeccionMotoDetallada.map((item, idx) => ( */}
              <div className="col-9">
                <SeccionMotoDetallada />
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>

        <div style={{ background: 'black' }}>
          <div className="container">
            <div className="row mb-0" id="contenidoMotocicleta">
              <CatalogoMoto ColorTitulo={configuracionData?.colorTituloHome || ''} ColorPagina={configuracionData?.colorPagina || ''} />
            </div>
          </div>
        </div>

        <div className="cb300f__section">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-lg-5 col-md-12 text-center mb-4 mb-lg-0">
                <img src="/images/cb300f.png" alt="CB 300 F" className="img-fluid cb300f__img" />
              </div>

              <div className="col-lg-7 col-md-12">
                <p className="cb300f__categoria">Deportiva</p>
                <h2 className="cb300f__titulo">CB 300 F</h2>

                <div className="row mt-4">
                  <div className="col-md-4">
                    <h5 className="cb300f__feature__title">Control de torque seleccionable (HSTC)</h5>
                    <p className="cb300f__feature__text">El HSTC controla y gestiona el agarre de la llanta trasera en todo momento.</p>
                  </div>

                  <div className="col-md-4">
                    <h5 className="cb300f__feature__title">Diseño street fighter y LED all around</h5>
                    <p className="cb300f__feature__text">Inspirada en la tendencia mundial, luces de bajo consumo en todo el contorno.</p>
                  </div>

                  <div className="col-md-4">
                    <h5 className="cb300f__feature__title">ABS de doble canal</h5>
                    <p className="cb300f__feature__text">Sistema antibloqueo que brinda mayor control en desaceleraciones.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ESPECIFICACIONES */}
            <div className="row text-center mt-5">
              <h4 className="cb300f__specs__title mb-4">ESPECIFICACIONES TÉCNICAS</h4>

              <div className="col-md-4 mb-4">
                <span className="cb300f__spec__label">Tipo de motor</span>
                <p className="cb300f__spec__value">4T SOHC 4 válvulas, monocilíndrico</p>
              </div>

              <div className="col-md-4 mb-4">
                <span className="cb300f__spec__label">Cilindraje</span>
                <p className="cb300f__spec__value">293.52 cc</p>
              </div>

              <div className="col-md-4 mb-4">
                <span className="cb300f__spec__label">Tipo de arranque</span>
                <p className="cb300f__spec__value">Arranque automático</p>
              </div>

              <div className="col-md-4 mb-4">
                <span className="cb300f__spec__label">Potencia máxima</span>
                <p className="cb300f__spec__value">24.1 hp @ 7500 rpm</p>
              </div>

              <div className="col-md-4 mb-4">
                <span className="cb300f__spec__label">Frenos</span>
                <p className="cb300f__spec__value">Disco 276mm ABS / Disco 220mm ABS</p>
              </div>

              <div className="col-md-4 mb-4">
                <span className="cb300f__spec__label">Colores</span>
                <p className="cb300f__spec__value">Rojo, Azul mate, Gris mate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="conten--video--youtube">
          <div>
            <div className="row--video--youtube--">
              <VideoPublicitario Link={configuracionData?.rutaYoutube} />
            </div>
          </div>
        </div>
        {/* </main> */}

        {/* <div className="FranjaClientes">
          <main className="container" style={{ padding: '1px' }}>
            <section className="row contenido__label__Especificacion text-center my-5 m-3">
              <label className="NuestraAliado__Titulo__Home" style={{ color: '#000' }}>
                FINANCIERAS
              </label>
              <CarruselAliados colorTitulo={configuracionData?.colorTituloHome} />
            </section>
          </main>
        </div> */}
        {/* <div style={{ background: '#eeeeee' }}>
          <div className="contenido__NuestrasMarcas__Home" style={{ background: '#003f74', paddingTop: '40px' }}>
            <div className="container">
              <section className="row text-center" style={{ paddingBottom: '30px' }}>
                <label className="TituloNuestraMarca">NUESTRAS MARCAS</label>
              </section>

              <div className="row g-3 justify-content-center mb-1">
                {jsonLinkMarcas.map((item, idx) => (
                  <MarcasPublicitarias key={item.id || idx} Link={item.url} />
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
