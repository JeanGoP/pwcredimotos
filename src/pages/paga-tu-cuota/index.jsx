import React from 'react';

// JSON de configuración de links de pago
const pagosConfig = {
  avalPay: {
    titulo: 'Aval Pay Center',
    descripcion:
      'Ingresa al siguiente enlace o link y realiza el pago a través de la plataforma Aval Pay Center, rápido, seguro y desde la comodidad de tu casa u oficina.',
    link: 'https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00000303&origen=buscar',
    textoBoton: 'Paga con AvalPay',
  },
  wompi: {
    titulo: 'Wompi',
    descripcion:
      'Wompi te permite pagar la cuota de tu moto a través de los medios tradicionales electrónicos de pago y adicionalmente pagar con Nequi de Bancolombia®.',
    link: 'https://checkout.wompi.co/l/VPOS_S11q8Z',
    textoBoton: 'Paga con Wompi',
  },
  whatsapp: {
    telefono: '3208615661',
    link: 'https://wa.link/hs4szx',
    textoBoton: 'Información por WhatsApp',
  },
};

export default function PagaTuCuota() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Título */}
          <h2 className="fw-bold mb-5">Paga tu cuota</h2>

          {/* Aval Pay Center */}
          <div className="mb-5">
            <h5 className="fw-bold text-uppercase">
              Paga desde internet tu cuota con
              <br />
              {pagosConfig.avalPay.titulo}
            </h5>
            <hr className="mx-auto" style={{ width: '60%' }} />
            <p className="text-muted px-3">{pagosConfig.avalPay.descripcion}</p>
            <a href={pagosConfig.avalPay.link} target="_blank" rel="noopener noreferrer" className="btn btn-danger px-4 mt-3">
              {pagosConfig.avalPay.textoBoton}
            </a>
          </div>

          {/* Wompi */}
          <div className="mb-5">
            <h5 className="fw-bold text-uppercase">
              Paga desde internet
              <br />
              tu cuota con {pagosConfig.wompi.titulo}
            </h5>
            <hr className="mx-auto" style={{ width: '60%' }} />
            <p className="text-muted px-3">{pagosConfig.wompi.descripcion}</p>
            <a href={pagosConfig.wompi.link} target="_blank" rel="noopener noreferrer" className="btn btn-danger px-4 mt-3">
              {pagosConfig.wompi.textoBoton}
            </a>
          </div>

          {/* Información */}
          <div>
            <h6 className="fw-bold text-uppercase d-flex justify-content-center align-items-center gap-2">
              <i className="bi bi-telephone-fill"></i>
              Para más información
            </h6>
            <hr className="mx-auto" style={{ width: '60%' }} />
            <p className="fs-4 fw-light">{pagosConfig.whatsapp.telefono}</p>
            <a href={pagosConfig.whatsapp.link} target="_blank" rel="noopener noreferrer" className="btn btn-danger px-4">
              {pagosConfig.whatsapp.textoBoton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
