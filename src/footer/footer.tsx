import logosoltec from '../assets/Imagenes/Soltec-logo.png'
import './footer.css'

function Footer() {
  // Reemplaza el enlace de WhatsApp por el de WhatsApp Business
  const whatsappBusinessLink = 'https://wa.me/+56953555444'; // Reemplaza con tu número de teléfono de WhatsApp Business

  return (
    <div className='container pader'>
      <footer className="footer-custom py-5">
        <div className="container px-4 px-lg-5  ">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-start  mb-lg-0">
              <img src={logosoltec} alt="Logo Soltec" width="200px" />
            </div>
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
              {/* Enlace de WhatsApp Business */}
              <a href={whatsappBusinessLink} className="text-success me-3" style={{ fontSize: '24px' }}>
                <i className="bi bi-whatsapp"></i>
              </a>
              {/* Enlaces a otras redes sociales */}
              <a href="https://www.facebook.com/" className="text-success me-3" style={{ fontSize: '24px' }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/" className="text-success" style={{ fontSize: '24px' }}>
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="small text-center text-muted mt-4">Copyright &copy; 2023 - Company Name</div> */}
      </footer>
    </div>
  );
}

export default Footer;
