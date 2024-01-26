import "./NuestroServicios.css"
import REPUESTO1 from "../../ImagenesProductos/Producto1.png"
import REPUESTO2 from "../../ImagenesProductos/Producto2.png"
import REPUESTO3 from "../../ImagenesProductos/Producto3.png"
import REPUESTO4 from "../../ImagenesProductos/Producto4.png"
import REPUESTO5 from "../../ImagenesProductos/Producto5.png"
import REPUESTO6 from "../../ImagenesProductos/Producto6.png"
import REPUESTO7 from "../../ImagenesProductos/Producto7.png"
import REPUESTO8 from "../../ImagenesProductos/Producto8.png"


export const NuestroServicios = () => {
  return (
   

    
<div className="container">
<br />
<br />
<br />
    <h2 className="heading">Nuestros Repuestos</h2>

    <div className="box-container">

    <div className="box">
            <img src={REPUESTO1} alt=""/>
            <h3>Lavavajilla bajo mesón Modular</h3>
            
            <a href="#" className="btn">Cotizar</a>
        </div>

       <div className="box">
            <img src={REPUESTO2} alt=""/>
            <h3>Lavavajilla bajo mesón Modular</h3>
            
            <a href="#" className="btn">Saber mas</a>
        </div>

         <div className="box">
            <img src={REPUESTO3} alt=""/>
            <h3>Lavavajilla bajo mesón Modular</h3>
            
           <a href="#" className="btn">Saber mas</a>
        </div>

        <div className="box">
            <img src={REPUESTO4} alt=""/>
            <h3>Lavavajilla bajo mesón Modular</h3>
            
            <a href="#" className="btn">Saber mas</a>
        </div>
        <div className="box">
            <img src={REPUESTO5} alt=""/>
            <h3>Lavavajilla bajo mesón Modular</h3>
            
            <a href="#" className="btn">Saber mas</a>
        </div>
        <div className="box">
            <img src={REPUESTO6} alt=""/>
            <h3>Lavavajilla bajo mesón Modular</h3>
            
            <a href="#" className="btn">Saber mas</a>
        </div>
        <div className="box">
            <img src={REPUESTO7} alt=""/>
            <h3>Lavavajilla bajo mesón Modular</h3>
            
            <a href="#" className="btn">Saber mas</a>
        </div>
        <div className="box">
            <img src={REPUESTO8} alt=""/>
            <h3>Lavavajilla bajo mesón Modular</h3>
            
            <a href="#" className="btn">Saber mas</a>
        </div>

       

    </div>
<br />
<br />
<br />
</div>


  )
}
