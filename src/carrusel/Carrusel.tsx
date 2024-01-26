import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Producto1 from "../imagenes/producto2MC.webp";
import Producto1de1 from "../imagenes/imagen2de2.webp";
import "./carrusel.css"


SwiperCore.use([Navigation, Pagination]);

function CarruselSwiper() {
    return (

        
        <div className='containercarrusel'>
            <br />
            <br />
            <br />
            <br />
            

            <div className='titulorepuestos'><h1>Nuestros Repuestos</h1></div>
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            // style={{ width: '100%', height: '100%' }}
            observer={true}
            observeParents={true}
            breakpoints={{
                // cuando la ventana es >= 640px
                390: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                // cuando la ventana es >= 768px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                // cuando la ventana es >= 1024px
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
        >
            <div className='containercarrusel'>
            
                {/* Producto1     */}
                    <SwiperSlide>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <div className="tarjeta" >
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <SwiperSlide>
                                        <img src={Producto1} className="card-img-top imagenproducto2" alt="..." />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={Producto1de1} className="card-img-top imagenproducto2" alt="..." />
                                    </SwiperSlide>
                                    <br />
                                </Swiper>
                                <div className="cuerpocard">
                                    <h5 className="card-title">Temporizador Eliwell 72tr</h5>
                                    <p className="card-text">Descripcion</p>
                                    <p className='preciocard'>259.990</p>
                                    <a href="https://articulo.mercadolibre.cl/MLC-1332711467-temporizador-eliwell-72tr-_JM#position=4&search_layout=stack&type=item&tracking_id=5c7b450e-810d-4e84-9742-58b6ba912d3c" target="_blank"><button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button></a>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Producto2     */}

                    <SwiperSlide>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <div className="tarjeta" >
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <SwiperSlide>
                                        <img src={Producto1} className="card-img-top imagenproducto2" alt="..." />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={Producto1de1} className="card-img-top imagenproducto2" alt="..." />
                                    </SwiperSlide>
                                    <br />
                                </Swiper>
                                <div className="cuerpocard">
                                    <h5 className="card-title">Temporizador Eliwell 72tr</h5>
                                    <p className="card-text">Descripcion</p>
                                    <p className='preciocard'>259.990</p>
                                    <a href="https://articulo.mercadolibre.cl/MLC-1332711467-temporizador-eliwell-72tr-_JM#position=4&search_layout=stack&type=item&tracking_id=5c7b450e-810d-4e84-9742-58b6ba912d3c" target="_blank"><button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button></a>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <div className="tarjeta" >
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <SwiperSlide>
                                        <img src={Producto1} className="card-img-top imagenproducto2" alt="..." />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={Producto1de1} className="card-img-top imagenproducto2" alt="..." />
                                    </SwiperSlide>
                                    <br />
                                </Swiper>
                                <div className="cuerpocard">
                                    <h5 className="card-title">Temporizador Eliwell 72tr</h5>
                                    <p className="card-text">Descripcion</p>
                                    <p className='preciocard'>259.990</p>
                                    <a href="https://articulo.mercadolibre.cl/MLC-1332711467-temporizador-eliwell-72tr-_JM#position=4&search_layout=stack&type=item&tracking_id=5c7b450e-810d-4e84-9742-58b6ba912d3c" target="_blank"><button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button></a>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <div className="tarjeta" >
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <SwiperSlide>
                                        <img src={Producto1} className="card-img-top imagenproducto2" alt="..." />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={Producto1de1} className="card-img-top imagenproducto2" alt="..." />
                                    </SwiperSlide>
                                    <br />
                                </Swiper>
                                <div className="cuerpocard">
                                    <h5 className="card-title">Temporizador Eliwell 72tr</h5>
                                    <p className="card-text">Descripcion</p>
                                    <p className='preciocard'>259.990</p>
                                    <a href="https://articulo.mercadolibre.cl/MLC-1332711467-temporizador-eliwell-72tr-_JM#position=4&search_layout=stack&type=item&tracking_id=5c7b450e-810d-4e84-9742-58b6ba912d3c" target="_blank"><button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button></a>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <div className="tarjeta" >
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <SwiperSlide>
                                        <img src={Producto1} className="card-img-top imagenproducto2" alt="..." />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={Producto1de1} className="card-img-top imagenproducto2" alt="..." />
                                    </SwiperSlide>
                                    <br />
                                </Swiper>
                                <div className="cuerpocard">
                                    <h5 className="card-title">Temporizador Eliwell 72tr</h5>
                                    <p className="card-text">Descripcion</p>
                                    <p className='preciocard'>259.990</p>
                                    <a href="https://articulo.mercadolibre.cl/MLC-1332711467-temporizador-eliwell-72tr-_JM#position=4&search_layout=stack&type=item&tracking_id=5c7b450e-810d-4e84-9742-58b6ba912d3c" target="_blank"><button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button></a>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <div className="tarjeta" >
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <SwiperSlide>
                                        <img src={Producto1} className="card-img-top imagenproducto2" alt="..." />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={Producto1de1} className="card-img-top imagenproducto2" alt="..." />
                                    </SwiperSlide>
                                    <br />
                                </Swiper>
                                <div className="cuerpocard">
                                    <h5 className="card-title">Temporizador Eliwell 72tr</h5>
                                    <p className="card-text">Descripcion</p>
                                    <p className='preciocard'>259.990</p>
                                    <a href="https://articulo.mercadolibre.cl/MLC-1332711467-temporizador-eliwell-72tr-_JM#position=4&search_layout=stack&type=item&tracking_id=5c7b450e-810d-4e84-9742-58b6ba912d3c" target="_blank"><button type="button" className="btn btn-secondary btn-lg botoncomprar">Comprar</button></a>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>




                
            </div>
            <br />
            <br />
            <br />
        </Swiper >
        </div>
    );
}


export default CarruselSwiper;