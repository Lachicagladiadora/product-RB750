import type { SuggestedProduct } from "../types";

type ProductSuggestedProps = { product: SuggestedProduct };
export const ProductSuggested = ({ product }: ProductSuggestedProps) => {
  return (
    <a
      href={product.url}
      target="_blank"
      className="w-full max-w-[500px] min-w-60 p-4 rounded-md shadow flex flex-col gap-4 border border-gray-400/20"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-48 rounded-t-md object-contain"
      />
      <hr className="text-gray-400/20 hidden md:block" />
      <div className="flex flex-col gap-4 items-center justify-center">
        <h3 className="text-black text-xl font-bold">{product.name}</h3>
        <p className="line-clamp-2">{product.description}</p>
        <a
          href={product.url}
          target="_blank"
          className="w-full px-4 py-3 flex items-center justify-center gap-4 rounded-md text-blue-600/70 bg-white font-bold hover:bg-blue-600/70 hover:text-white"
        >
          Ver producto
        </a>
      </div>
    </a>
  );
};
