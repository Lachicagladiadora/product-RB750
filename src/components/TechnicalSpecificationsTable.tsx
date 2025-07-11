import type { TechnicalSpecifications } from "../types";

type TechnicalSpecificationsTableProps = {
  specifications: TechnicalSpecifications;
};

export const TechnicalSpecificationsTable = ({
  specifications,
}: TechnicalSpecificationsTableProps) => {
  return (
    <div>
      <h3 className="text-blue-600/90 font-bold text-start py-4">
        Especificaciones técnicas.
      </h3>
      <table>
        <thead></thead>
        <tbody>
          {specifications.map((c, i) => (
            <tr key={i}>
              <td className="font-bold text-start capitalize">{c.label}:</td>
              <td className="text-start pl-3">{c.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
