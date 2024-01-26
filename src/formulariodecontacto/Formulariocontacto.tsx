import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import "./formulario.css"
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nombre || !correo || !mensaje) {
      toast.error("Por favor, completa todos los campos.");
      return;
    }

    if (form.current) {
      emailjs.sendForm('service_g6mco6v', 'template_nxzsnur', form.current, 'JZnQU1KNyvup4qory')
        .then((result: { text: any; }) => {
          console.log(result.text);
          toast.success("Mensaje enviado con éxito!");
          if (form.current) {
            form.current.reset();
          }
        }, (error: { text: any; }) => {
          console.log(error.text);
          toast.error("Ocurrió un error al enviar el mensaje.");
        });
    } else {
      console.error("El formulario es null");
    }
  };

  return (
    <div className='container formulario col-6'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container  px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h2 className="mt-0">Contactanos!</h2>
            <hr className="divider" />
            <p className="text-muted mb-5">¿Listo para comenzar tu próximo proyecto con nosotros? ¡Envíanos un mensaje y nos comunicaremos contigo a la brevedad!</p>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div className="col-lg-6"></div>
          <form id="contact" ref={form} onSubmit={sendEmail}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="user_name"
                name="user_name"
                type="text"
                placeholder="Enter your name..."
                required
                onChange={(e) => setNombre(e.target.value)}
              />
              <label htmlFor="user_name">Nombre Completo</label>
              <div className="invalid-feedback" data-sb-feedback="user_name:required">
                A name is required.
              </div>
            </div>

            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="email"
                name="user_email"
                type="email"
                required
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="name@example.com"
                data-sb-validations="required,email"
              />
              <label htmlFor="email">Direccion de Correo Electronico</label>
              <div className="invalid-feedback" data-sb-feedback="email:required">
                An email is required.
              </div>
              <div className="invalid-feedback" data-sb-feedback="email:email">
                Email is not valid.
              </div>
            </div>

            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="(123) 456-7890"
                data-sb-validations="required"
              />
              <label htmlFor="phone">Numero de Teléfono</label>
              <div className="invalid-feedback" data-sb-feedback="phone:required">
                A phone number is required.
              </div>
            </div>

            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="message"
                name="message"
                required
                placeholder="Enter your message..."
                data-sb-validations="required"
                rows={6}
                onChange={(e) => setMensaje(e.target.value)}
              ></textarea>
              <label htmlFor="message">Mensaje</label>
              <div className="invalid-feedback" data-sb-feedback="message:required">
                A message is required.
              </div>
            </div>

            <div className="d-grid">
            <button type="submit" className="btn btn-primary botonenviar" disabled={!nombre || !correo || !mensaje}>
    Enviar
</button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
