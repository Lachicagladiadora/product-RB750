import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ProductData, RedirectPage } from "../types";
import { PerformanceResultsTable } from "./PerformanceResultsTable";
import { TechnicalSpecificationsTable } from "./TechnicalSpecificationsTable";
import { faBook, faFilePdf } from "@fortawesome/free-solid-svg-icons";

type ProductDetailsProps = { product: ProductData; download: RedirectPage[] };

export const ProductDetails = ({ product, download }: ProductDetailsProps) => {
  return (
    <>
      {!product && <p>Not found</p>}
      {product && (
        <article className="w-full flex flex-col ">
          <h2 className="text-blue-900/90 font-bold text-start py-4 text-xl">
            {product.name}
          </h2>

          <div>
            <div>
              <h3 className="text-blue-600/90 font-bold text-start py-4">
                Aplicaciones
              </h3>
              <ol>
                {product.applications.map((c, i) => (
                  <li key={i} className="text-start list-inside list-disc">
                    {c}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-blue-600/90 font-bold text-start py-4">
                Desempeño Superior
              </h3>
              <ol className="flex flex-col gap-5">
                {product.superiorPerformance.map((c, i) => (
                  <li key={i} className="text-start">
                    {c}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-blue-600/90 font-bold text-start py-4">
                Ventajas
              </h3>
              <ol>
                {product.advantages.map((c, i) => (
                  <li key={i} className="text-start list-inside list-disc">
                    {c}
                  </li>
                ))}
              </ol>
            </div>

            <div className=" flex flex-col gap-3">
              <h3 className="text-blue-600/90 font-bold text-start py-4">
                Download
              </h3>
              <a
                href={download[0].url}
                className="w-full max-w-[375px] flex mx-auto items-center justify-center gap-4 rounded-md border border-red-600/70 text-red-600/70"
              >
                <FontAwesomeIcon icon={faFilePdf} />{" "}
                <span>{download[0].label}</span>
              </a>
              <a
                href={download[1].url}
                className="w-full max-w-[375px] flex mx-auto items-center justify-center gap-4 rounded-md border border-blue-600/70 text-blue-600/70"
              >
                <FontAwesomeIcon icon={faBook} />{" "}
                <span>{download[1].label}</span>
              </a>
            </div>
            <TechnicalSpecificationsTable
              specifications={product.technicalSpecifications}
            />
            <PerformanceResultsTable resultList={product.PerformanceResults} />
          </div>
        </article>
      )}
    </>
  );
};
