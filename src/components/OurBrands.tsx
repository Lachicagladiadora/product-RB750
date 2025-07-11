import type { ReactNode } from "react";
import { OUR_BRANDS } from "../constants";

export const OurBrands = (): ReactNode => {
  return (
    <aside className="w-full h-full max-h-2/4 bg-white px-2 py-20 rounded-lg  md:p-2 md:w-48 lg:w-56 ">
      <h2 className="text-lg font-bold text-gray-800 py-4">Nuestras Marcas</h2>
      <hr className="text-gray-400/20 hidden md:block" />
      <div className="py-2 flex flex-row flex-wrap items-center justify-center gap-4 lg:flex-col">
        {OUR_BRANDS.map((c, i) => (
          <a
            key={i}
            href={c.url}
            target="_blank"
            className="py-2 hover:bg-gray-100 transition-all hover:-translate-y-0.5 flex items-center justify-center rounded-md md:w-full"
          >
            <img
              src={c.logo}
              alt={c.brand}
              className="w-auto lg:w-full lg:max-w-[100px] h-auto max-h-8 object-contain"
            />
          </a>
        ))}
      </div>
    </aside>
  );
};
