import logo1 from '../assets/Imagenes/logoromco.png'
import logo2 from '../assets/Imagenes/logoservibaker.png'



function Marcasdetrabajo() {
    return (
        <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">Marcas que trabajamos</h2>
        {/* <hr className="divider" /> */}
        <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                    <div className="mb-2"> <a href="https://www.romco.cl/"><img src={logo1}
                        alt="" /></a></div>
                    <h3 className="h4 mb-2">Sturdy Themes</h3>
                    <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                    <div className="mb-2"> <a href="https://www.servibaker.cl/index.html"> <img
                        src={logo2} alt="" width="250px" /></a></div>
                    <h3 className="h4 mb-2">Up to Date</h3>
                    <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                    <div className="mb-2"><a href="https://www.servibaker.cl/index.html"><img src={logo2} alt="" width="250px" /></a></div>
                    <h3 className="h4 mb-2">Ready to Publish</h3>
                    <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                    <div className="mb-2"><img src={logo1} alt="" /></div>
                    <h3 className="h4 mb-2">Made with Love</h3>
                    <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Marcasdetrabajo
