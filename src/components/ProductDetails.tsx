import type { ProductData } from "../types";
import { PerformanceResultsTable } from "./PerformanceResultsTable";
import { TechnicalSpecificationsTable } from "./TechnicalSpecificationsTable";
import { Applications } from "./Applications";
import { SuperiorPerformance } from "./SuperiorPerformance";
import { Advantages } from "./Advantages";
import { DownloadResources } from "./DownloadResources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ImagePreview } from "./ImagePreview";

type ProductDetailsProps = { product: ProductData };

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <>
      {!product && <p>Not found</p>}
      {product && (
        <article className="w-full p-4 flex flex-col">
          <div>
            <h2 className="text-blue-900/90 font-bold text-start py-4 text-xl">
              {product.name}
            </h2>

            <ImagePreview
              productName={product.name}
              imageList={product.images}
            />
            <div className="py-4 flex justify-between items-center gap-10">
              <p className="text-blue-600/90 font-bold text-start py-4 text-2xl">
                {product.price}
              </p>
              <button className="px-4 py-3 flex items-center justify-center gap-4 rounded-md bg-blue-600/70 text-white font-bold hover:bg-blue-600/80">
                <FontAwesomeIcon icon={faCartPlus} />
                <p>Comprar ahora</p>
              </button>
            </div>
            <hr className="text-gray-400/20 hidden md:block" />
          </div>

          <div className="w-full flex flex-col gap-8 md:gap-10">
            <Applications list={product.applications} />
            <SuperiorPerformance list={product.superiorPerformance} />
            <Advantages list={product.advantages} />

            <DownloadResources list={product.download} />
            <TechnicalSpecificationsTable
              specifications={product.technicalSpecifications}
            />
            <PerformanceResultsTable resultList={product.performanceResults} />
          </div>
        </article>
      )}
    </>
  );
};
