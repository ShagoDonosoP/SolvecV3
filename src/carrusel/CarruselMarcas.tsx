import "./CarruselMarcas.css"
import LOGO from "../imagenes/LogoSoltec.jpg"
import LOGO2 from "../imagenes/logoromco.png"
import LOGO3 from "../imagenes/maquipan-logo.png"
import LOGO4 from "../imagenes/logosomengil.png"
import LOGO5 from "../imagenes/LogoSoltec.jpg"


function CarruselMarcas() {
    return (

        <div>
            <br />
            <br />
            <br />
            <br />
            <div className="titutlo">
            <h2 >Nuestras Marcas </h2>
            </div>
            <div className="logos">
                <div className="logos-slide">
                    <a href="www.google.cl">google</a>
                    <img src={LOGO} />
                    <img src={LOGO2} />
                    <img src={LOGO3} />
                    <img src={LOGO4} />
                    <img src={LOGO5} />


                </div>

                <div className="logos-slide">
                    <img src={LOGO} />
                    <img src={LOGO2} />
                    <img src={LOGO3} />
                    <img src={LOGO4} />
                    <img src={LOGO5} />


                </div>
            </div>

        </div>
    )
}

export default CarruselMarcas