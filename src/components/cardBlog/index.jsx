import React, { useState } from "react";
import "./cardBlog.css";
import { useNavigate } from "react-router-dom";


const CardBlog = ({ titulo = '', fecha = '', imagen = '', objecto = null }) => {
    const navigate = useNavigate();
    const handleBlog = (data) => {
        navigate("/detalleBlog", { state: { blog: data } });
    }

  return (
    <div>
      <div  className='cardContenidoBlog h-100 col-sm-12 col-md-6' onClick={()=> handleBlog(objecto)}>
        <div className="cardBlogImg" >
        <img
          src={imagen}
          alt={titulo}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
        </div>
        <h5 className="cardTituloBlog">{titulo}</h5>
        <p className="cardfechaBlog"> {fecha}</p>
        <h6 className="cardTituloBlog" style={{paddingTop:'10px'}}>Leer más »</h6>
      </div>

    </div>
  );
};

export default CardBlog;
