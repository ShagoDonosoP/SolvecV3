import styles from './Servicios.module.css';

import Equipo2 from "../../imagenes/productohorno.webp"


export const Equipos = () => {
    return (

        <>
        <div className={styles.body2}>
            <div className={styles.titulo}>
            <h1>Nuestros equipos</h1>
            </div>
        </div>
            <br />
            <br />
            <div className={styles.imagegrid}>
                <div className={styles.imagecard}>
                    <img src={Equipo2} alt="Imagen 1" />
                    <div className={styles.imageoverlay}>
                        <p className={styles.imagedescription}>Descripción de la Imagen 1</p>
                        <button className={styles.buybutton}>Comprar</button>
                    </div>
                </div>

                <div className={styles.imagecard}>
                    <img src={Equipo2} alt="Imagen 1" />
                    <div className={styles.imageoverlay}>
                        <p className={styles.imagedescription}>Descripción de la Imagen 1</p>
                        <button className={styles.buybutton}>Comprar</button>
                    </div>
                </div>

                <div className={styles.imagecard}>
                    <img src={Equipo2} alt="Imagen 1" />
                    <div className={styles.imageoverlay}>
                        <p className={styles.imagedescription}>Descripción de la Imagen 1</p>
                        <button className={styles.buybutton}>Comprar</button>
                    </div>
                </div>


                <div className={styles.imagecard}>
                    <img src={Equipo2} alt="Imagen 1" />
                    <div className={styles.imageoverlay}>
                        <p className={styles.imagedescription}>Descripción de la Imagen 1</p>
                        <button className={styles.buybutton}>Comprar</button>
                    </div>
                </div>
                <div className={styles.imagecard}>
                    <img src={Equipo2} alt="Imagen 1" />
                    <div className={styles.imageoverlay}>
                        <p className={styles.imagedescription}>Descripción de la Imagen 1</p>
                        <button className={styles.buybutton}>Comprar</button>
                    </div>
                </div>

              
              
            </div>
            </>
    )
}
