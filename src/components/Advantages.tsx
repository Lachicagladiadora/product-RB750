import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AdvantagesProps = { list: string[] };

export const Advantages = ({ list }: AdvantagesProps) => {
  return (
    <div>
      <h3 className="text-blue-600/90 font-bold text-start py-4">Ventajas</h3>
      <ol>
        {list.map((c, i) => (
          <li key={i} className="text-start flex items-center gap-4">
            <FontAwesomeIcon icon={faCheck} className="text-blue-600/90" />
            <span>{c}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};
