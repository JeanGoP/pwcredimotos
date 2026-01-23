import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function DetalleBlog() {
  const location = useLocation();
  const blog = location.state?.blog;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (!blog) {
    return <p>No se encontró información del Blog.</p>;
  }

  const tieneContenido =
    blog.html && typeof blog.html === "string" && blog.html.trim() !== "";

  return (
    <div style={{ paddingTop: "170px", paddingBottom: "100px" }}>
      <div className="container">
        {tieneContenido ? (
          <div dangerouslySetInnerHTML={{ __html: blog.html }} />
        ) : (
          <p className="text-center">
            La información de este blog no está disponible.
          </p>
        )}
      </div>
    </div>
  );
}
