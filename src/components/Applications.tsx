type ApplicationsProps = { list: string[] };

export const Applications = ({ list }: ApplicationsProps) => {
  return (
    <div>
      <h3 className="text-blue-600/90 font-bold text-start py-4">
        Aplicaciones
      </h3>
      <ol>
        {list.map((c, i) => (
          <li key={i} className="text-start list-inside list-disc">
            {c}
          </li>
        ))}
      </ol>
    </div>
  );
};
