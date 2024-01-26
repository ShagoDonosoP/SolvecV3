import { Link } from 'react-router-dom';
import logoEmpresa from "../assets/Imagenes/Solteclogo2.png";
import "./mantencion.css"

const PaginaMantencion = () => {
    return (

        <div className="container-fluid text-left fondo" style={{ color: 'white' }}>
            <div className="row  logoclase" >
                <div className="col-12 col-md-6 text-left logoclase2">
                    <img src={logoEmpresa} alt="Logo de la empresa" className="img-fluid my-0 logo" />
                </div>
            </div>
            <br />
            <div className='texto'>
                <h1>Página en mantenimiento</h1>
                <br />
                <p className="lead">Disculpa las molestias. Estamos trabajando para mejorar tu experiencia.</p>

                {/* <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <img src={imagenMantenimiento} alt="Imagen de mantenimiento" className="img-fluid my-5" />
                </div>
            </div> */}

                <p> <p>Te invito a contactarte con nosotros por correo o telefono</p>
                    <div className='correo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg><a href="mailto:servicio@soltecservice.cl" className="d-block">servicio@soltecservice.cl</a>

                    </div>
                    <br />
                    <div className='correo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                        <a href="tel:+56962272765" className="d-block">+56 9 6227 2765</a>
                    </div>
                </p>
            </div>
            <br />
            <br /><br /><br /><br /><br /><br /><br />
            <Link to="/dev" style={{ color: 'rgba(0, 0, 0, 0.1)', textDecoration: 'none' }}>*</Link>
        </div>
    );
};

export default PaginaMantencion;