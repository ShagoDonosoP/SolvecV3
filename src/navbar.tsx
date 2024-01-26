import { useEffect } from 'react';
import Scroll from './scroll/scroll';
import './Componentes.css';


function Navbar() {
  useEffect(() => {
    const addFontAwesome = () => {
      const fontAwesomeLink = document.createElement('link');
      fontAwesomeLink.rel = 'stylesheet';
      fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
      document.head.appendChild(fontAwesomeLink);
    };

    addFontAwesome();
  }, []);
  // Mensaje de WhatsApp para enviar al número +56953555444, aqui se cambia mensaje y numero.
  const mensaje = encodeURIComponent("Hola, necesito ayuda");
  const url = `https://wa.me/+56953555444?text=${mensaje}`;


  return (
    <>
      <Scroll />
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">SOLTEC & SERVICE</h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">Soltec & Service es una empresa de servicios que nace el año 2021 de
                la mano de profesionales altamente calificados, con más de 25 años de experiencia en la industria del Retail, Panadería y Gastronomía, cuyo principal objetivo es brindar a nuestros clientes la mejor calidad de servicio y una atención personalizada, cumpliendo con los más altos estándares de la industria.</p>
              {/* <a className="btn btn-primary btn-xl" href="#about">
                Conócenos
              </a> */}
            </div>
          </div>
        </div>
      </header>

      {/* Botón flotante de WhatsApp con icono de Font Awesome */}
      <a href={url} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}

export default Navbar;
