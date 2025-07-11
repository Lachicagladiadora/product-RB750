import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { CONTACTS, SOLUTIONS, SUPPORT } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="w-full transition-all bg-gray-400/10">
      <div className="w-full max-w-6xl flex mx-auto flex-col flex-wrap gap-2 text-gray-600 md:flex-nowrap">
        <div className="w-full py-4 flex flex-col items-center justify-center gap-6 md:flex-row  md:items-start">
          <div className="p-6 flex flex-col items-start justify-center gap-10 md:flex-row">
            <div className="flex flex-col items-start justify-center gap-10">
              <img
                src="https://www.ds3comunicaciones.com/mikrotik/images/Logo1.jpg"
                alt="logo"
              />
              <div>
                <h3 className="text-black text-xl font-bold">Redes Sociales</h3>
                <div className="text-3xl flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-800/80"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-600/80"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-black text-xl font-bold">Correo</h3>
                <a
                  href="mailto:netperu100@hotmail.com"
                  className="flex gap-2 items-center text-gray-600 hover:text-blue-600/80"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  netperu100@hotmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <h3 className="text-black text-xl font-bold">Soluciones</h3>
              {SOLUTIONS.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target="_blank"
                  className="hover:text-blue-600/80 hover:underline hover:underline-offset-1"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>
          <div className="p-6 flex flex-col items-start justify-center gap-10 md:flex-row">
            <div className="flex flex-col items-center justify-center gap-4">
              <h3 className="text-black text-xl font-bold">Soporte</h3>
              {SUPPORT.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target="_blank"
                  className="hover:text-blue-600/80 hover:underline hover:underline-offset-1"
                >
                  {c.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col items-start justify-center gap-10">
              <div>
                <h3 className="text-black text-xl font-bold">Contacto</h3>
                {CONTACTS.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    target="_blank"
                    className="pt-4 flex gap-4 hover:text-blue-600/80"
                  >
                    <FontAwesomeIcon icon={faPhone} />
                    <span>{c.label}</span>
                  </a>
                ))}
              </div>
              <div>
                <h3 className="text-black text-xl font-bold">
                  Horario de Atención
                </h3>
                <p className="pt-4">Lunes a Viernes: 9:00 - 18:00</p>
                <p className="pt-4">Sábados: 9:00 - 13:00</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-gray-400/40 " />
        <p className="w-full text-center py-6 px-2">
          © 2023 DS3 Comunicaciones. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
