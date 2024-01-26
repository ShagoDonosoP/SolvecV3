import styles from './NuestrosClientes.module.css';

export const Nuestroclientes = () => {


    return (
        <div className={styles.body1}>
            <div className={styles.titulo}>
                <h1>Nuestros Clientes</h1>
            </div>
            <br />
            <br />
            
                
                    <div className={styles.container}>
                        <div className={styles.logocarousel}>
                            <a href="https://www.jumbo.cl" target="_blank">
                                <img src="https://www.cencosud.com/cencosud/site/artic/20211220/imag/foto_0000001720211220181659/1-Jumbo-400x400px.jpg" alt="Jumbo"/>
                            </a>
                            <a href="https://www.santaisabel.cl" target="_blank">
                                <img src="https://www.cencosud.com/cencosud/site/artic/20211221/imag/foto_0000001420211221111706/2-SantaIsabel-400x400px.jpg" alt="Santa Isabel" />
                            </a>
                            <a href="https://www.unimarc.cl" target="_blank">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Unimarc_logo.svg/470px-Unimarc_logo.svg.png" alt="Unimarc"/>
                            </a>
                            <a href="https://barriobrasilsantiago.weebly.com" target="_blank">
                                <img src="https://barriobrasilsantiago.weebly.com/uploads/9/2/2/5/9225883/746540773_orig.png" alt="Barrio Brasil"/>
                            </a>
                            <a href="https://www.productosfernandez.cl" target="_blank">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Productos_Fernandez%C2%BA.png/200px-Productos_Fernandez%C2%BA.png" alt="Productos Fernandez"/>
                            </a>
                            <a href="https://prosepan.cl" target="_blank">
                                <img src="https://prosepan.cl/wp-content/uploads/2022/08/Prosepan-original-vectorizado-OK.png" alt="Prosepan"/>
                            </a>

                        </div>
                    </div>

                </div>

                )
}
