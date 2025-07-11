import { SUGGESTIONS } from "../constants";
import { ProductSuggested } from "./ProductSuggested";

export const Suggestions = () => {
  return (
    <div className="px-4  py-8">
      <h3 className="text-blue-600/90 font-bold text-center text-xl py-4">
        También Disponible
      </h3>
      <div className="pb-10 flex flex-wrap gap-6 items-center justify-center">
        {SUGGESTIONS.map((c, i) => (
          <ProductSuggested product={c} key={i} />
        ))}
      </div>
    </div>
  );
};
