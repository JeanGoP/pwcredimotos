import './index.css';

import cbs from '../../../public/images/tecnologia/asdf.png';
import het from '../../../public/images/tecnologia/het2.png';
import pgmfi from '../../../public/images/tecnologia/pgm.png';
import idling from '../../../public/images/tecnologia/stop.png';

const data = [
  {
    img: cbs,
    title: 'CBS, Sistema de frenado combinado.',
    text: 'Esta tecnología te brinda una mayor seguridad en el frenado, ya que este sistema te ofrece una distribución de fuerza en las dos ruedas permitiendo el freno trasero. Además este hace que la motocicleta reaccione de manera más efectiva ante cualquier obstáculo en el camino independientemente del tipo de superficie, disminuyendo además hasta en un 20% la distancia del frenado.',
  },
  {
    img: het,
    title: 'HET (Honda Eco Technology)',
    text: 'Honda dio un paso más allá y rompió todos los parámetros con esta inteligente y brillante implementación, usada principalmente en motocicletas de bajo cilindraje, basada en materiales livianos y resistentes hace que la fricción interna del motor te brinde un mayor rendimiento en combustible ayudando además a reducir las emisiones de gases.',
  },
  {
    img: pgmfi,
    title: 'PGM – FI (inyección electrónica programada)',
    text: 'Como su propio nombre lo dice, este sistema inyecta combustible de manera programada a través de un compendio de sensores que garantizan la mezcla ideal a cualquier altura sobre el nivel del mar, dando como resultado un óptimo consumo del combustible garantizando además un mejor funcionamiento de la motocicleta.',
  },
  {
    img: idling,
    title: 'IDLING STOP (Stop and Go)',
    text: '¿Cómo magia? Este sistema consta de que cuando la motocicleta se encuentra en total detenimiento, esta hace que el motor se apague, después de los 3 segundos, al acelerar, el motor vuelve a activarse automáticamente ofreciendo un ahorro hasta del 7% en combustible y adicional a esto, disminuye las emisiones contaminantes.',
  },
];

export default function TecnologiaHonda() {
  return (
    <section className="tecnologia">
      <h2>
        TECNOLOGÍA HONDA QUE TE BRINDARÁ UN
        <br />
        MEJOR DESEMPEÑO
      </h2>

      <div className="tecnologia-grid">
        {data.map((item, index) => (
          <div className="tech-card" key={index}>
            <div className="tech-img">
              <img src={item.img} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
