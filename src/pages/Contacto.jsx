import React, { useState } from 'react';
import '../css/contactos.css';

const Contacto = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // success or error

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulación de validación del formulario
    const name = event.target.nombre.value;
    const email = event.target.email.value;

    if (!name || !email) {
      setMessage("Por favor, llena todos los campos.");
      setMessageType("error");
    } else {
      setMessage("Formulario enviado correctamente.");
      setMessageType("success");
    }

    // Limpiar el formulario después de enviar
    event.target.reset();
    
    // Eliminar el mensaje después de 5 segundos
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 5000);
  };

  return (
    <div>
      <section id="contact-btn">
        <h1 className="c-b-heading">Pagina de contacto</h1>
        <p className="c-b-heading">
          Regístrate para poder mandarte información nuestra y que también nos puedas contactar!
          <br /> Si quieres contactarnos para algún trabajo, este es nuestro correo mms02@iesemilidarder.com
        </p>
      </section>

      <section id="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="contact-left">
            <h1 className="c-l-heading">Regístrate!</h1>
            <div className="f-name">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" placeholder="Nombre completo" />
            </div>
            <div className="f-email">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Ejemplo@gmail.com" />
            </div>

            {/* Mostrar el mensaje aquí */}
            {message && (
              <div id="form-message">
                <p className={messageType}>{message}</p>
              </div>
            )}

            <div className="contact-right">
              <button type="submit" className="new">Submit</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contacto;
