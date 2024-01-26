

import Footer from './footer/footer'
import ContactForm from './formulariodecontacto/Formulariocontacto'
import CarruselMarcas from './carrusel/CarruselMarcas'

import Servicios from './Descripcionservicios/Servicios'
import { NuestroServicios } from './componentes/Repuestos/NuestroServicios'
import { Nuestroclientes } from './componentes/Cientes/Nuestroclientes'
import { Equipos } from './componentes/Servicios/Equipos'





function Body() {

    return (
        <div>
            <br />
            <br />
            <div id='repuestos'>
                {/* <CarruselSwiper /> */}
            </div>
            <NuestroServicios />

            <div id='nuestrasmarcas'>
                <CarruselMarcas />
            </div>

            <div id='servicios'>
                <br />
                < Servicios />
                <br />
            </div>
            <div id='servicios'>
                <br />
                < Equipos />
                <br />
            </div>
            <div id='servicios'>
                <br />
                < Nuestroclientes />
                <br />
            </div>
          

            
            <ContactForm />
            <br />
            <Footer />
        </div>
    )
}

export default Body