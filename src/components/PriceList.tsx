import { PRICE_LIST } from "../constants";

export const PriceList = () => {
  return (
    <aside className="hidden bg-white p-2 rounded-lg w-full h-full max-h-2/4 md:w-60 md:block lg:w-72">
      <h2 className="text-lg font-bold text-gray-800 py-4">Lista de Precios</h2>
      <hr className="text-gray-400/20 hidden md:block" />
      <div className="px-4 py-2 flex flex-col items-start justify-start gap-2 text-blue-600">
        {PRICE_LIST.map((c, i) => (
          <a
            key={i}
            href={c.url}
            target="_blank"
            className="w-full p-2 text-start rounded-sm hover:underline hover:bg-blue-600/5 hover:underline-offset-4"
          >
            {c.label}
          </a>
        ))}
      </div>
    </aside>
  );
};
