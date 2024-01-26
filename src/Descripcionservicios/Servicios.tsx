import React from 'react';
import SERVICIO from "../imagenes/Ramalhos_Molduram_LCD_8387.jpg"


const Servicios: React.FC = () => {
  const divStyle: React.CSSProperties = {
    backgroundImage: `url(${SERVICIO})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    width: '100%',
    height: '700px', // Ajusta la altura a tu preferencia
    color: '#000000', // Color de letra legible con el fondo
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
    // opacity: 0.9, // Opacidad de la imagen de fondo (0 a 1)
    // backgroundColor: 'rgba(255, 255, 255, 0.3)', // Tono más transparente para el fondo
    padding: '50px', // Ajusta el espaciado interno del contenedor
  };

  const textStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fondo transparente para los textos
    padding: '20px',
    borderRadius: '5px',
  };

  return (
    <div className="containn">
      <h3 className='servicioss'>Servicios</h3>
      <div className="row">

      </div>
      <div className="position-relative" style={divStyle}>
        <div style={textStyle}>
          {/* <h3>SOLTEC</h3> */}
          <p>Venta de equipamiento y repuestos para panadería, pastelería, equipos de lavado.
            Instalación.
            Mantenimiento correctivo y preventivo.
            Soluciones de ingeniería.
            Asesoría de proyectos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
