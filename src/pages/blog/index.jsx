import React, { useEffect, useState, useContext } from 'react';
import './blog.css';
import { LanguageContext } from '../../context/context';

const BlogHero = () => {
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      {/* HERO FULL WIDTH */}
      <section
        className="blog-hero"
        style={{
          backgroundColor: 'black',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${configuracionData?.rutaPortada}')`,
        }}
      >
        <div className="blog-hero-overlay"></div>

        <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center text-white px-3">
          <h1 className="blog-title">BLOGS</h1>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="/" className="text-white text-decoration-none">
                  HOME
                </a>
              </li>
              <li className="breadcrumb-item active text-danger">BLOG</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* SECTION TITLE */}
      <section className="blog-section bg-dark text-white">
        <div className="container">
          <div className="d-flex align-items-center mb-3">
            <span className="line-red me-3"></span>
            <small className="text-uppercase">Artículos</small>
          </div>

          <h2 className="blog-subtitle text-center">ARTÍCULOS Y NOTICIAS</h2>
        </div>
      </section>
    </>
  );
};

export default BlogHero;
