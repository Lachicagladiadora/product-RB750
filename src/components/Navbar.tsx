import { faAngleRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NAVBAR_ITEMS } from "../constants";

export const Navbar = () => {
  return (
    <>
      <hr className="text-gray-400/20" />
      <div className="flex items-center justify-center gap-8  overflow-hidden  sm:py-5">
        {NAVBAR_ITEMS.map((c, i) => (
          <a
            key={i}
            href={c.href}
            className="flex gap-2 flex-col items-center justify-center sm:flex-row"
          >
            {/* <img src={c.image} alt={c.alt} className="h-5 sm:h-6" /> */}
            <span className="text-sm ">{c.label}</span>
          </a>
        ))}
      </div>
      <hr className="text-gray-400/20" />
      <div className="px-3 py-2 text-xs md:text-sm text-gray-400 flex flex-nowrap items-center gap-1 overflow-x-auto scrollbar-hide whitespace-nowrap">
        <a
          href="https://www.ds3comunicaciones.com/index.html"
          className="hover:text-blue-600"
        >
          <FontAwesomeIcon icon={faHouse} />
        </a>
        <span>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <a
          href="https://www.ds3comunicaciones.com/mikrotik/index.html"
          className=" hover:underline hover:text-blue-600 "
        >
          Mikrotik
        </a>
        <span className="hidden sm:block">
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <a
          href="https://www.ds3comunicaciones.com/mikrotik/index.html#Router"
          className=" hover:underline hover:text-blue-600 hidden sm:block"
        >
          Router
        </a>
        <span className="">
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <span className="text-neutral-700 font-semibold ">RB750</span>
      </div>
      <hr className="text-gray-400/20" />
    </>
  );
};
