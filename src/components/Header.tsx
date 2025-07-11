import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faSearch,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { SUGGESTIONS } from "../constants";

export const Header = () => {
  const [openSearcher, setOpenSearcher] = useState(false);
  return (
    <header className="w-full max-w-6xl py-4 flex  items-center justify-between sm:justify-evenly">
      {!openSearcher && (
        <div className="w-full flex gap-4 items-center justify-between">
          <img
            src="https://www.ds3comunicaciones.com/mikrotik/images/Logo1.jpg"
            alt="logo"
          />
          <div className="text-black text-lg flex gap-4 flex-col  md:flex-row">
            <div className="hidden lg:flex lg:items-center lg:gap-2">
              <FontAwesomeIcon icon={faPhone} />
              <div className="text-start">
                <p className="text-sm font-bold">533-4339</p>
                <p className="text-sm font-bold">994-428-965</p>
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:gap-2">
              <FontAwesomeIcon icon={faPhone} />
              <div className="text-start">
                <p className="text-sm font-bold">99653-3223</p>
                <p className="text-sm font-bold">937-514-867</p>
              </div>
            </div>
            <div className="hidden sm:flex sm:items-center sm:gap-2">
              <i className="fas fa-envelope mr-2 text-black "></i>
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="text-sm font-bold">netperu100@hotmail.com</span>
            </div>
            <div className="hidden md:flex md:items-center md:gap-2">
              <i className="fas fa-map-marker-alt mr-2 text-black "></i>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="text-sm font-bold">Lima, PERÚ</span>
            </div>
          </div>
          <img
            src="https://www.ds3comunicaciones.com/cisco/images/cisco-gif.gif"
            alt="cisco"
            className="h-10 flex mx-auto sm:block sm:m-0"
          />
        </div>
      )}
      {openSearcher && (
        <div
          onBlur={() => setOpenSearcher(false)}
          className="w-full flex gap-4 items-center justify-between "
        >
          <img
            src="https://www.ds3comunicaciones.com/mikrotik/images/Logo1.jpg"
            alt="logo"
            className="hidden sm:block"
          />
          <input
            type="text"
            className="overflow-hidden border border-blue-600 flex-1 rounded-sm px-4 py-2"
            placeholder={
              SUGGESTIONS[Math.floor(Math.random() * SUGGESTIONS.length - 1)]
                .name
            }
          />
        </div>
      )}
      <button
        onClick={() => setOpenSearcher((p) => !p)}
        className="text-2xl ml-4"
      >
        {!openSearcher && <FontAwesomeIcon icon={faSearch} />}
        {openSearcher && <FontAwesomeIcon icon={faX} />}
      </button>
    </header>
  );
};
