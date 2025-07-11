type SuperiorPerformanceProps = { list: string[] };

export const SuperiorPerformance = ({ list }: SuperiorPerformanceProps) => {
  return (
    <div>
      <h3 className="text-blue-600/90 font-bold text-start py-4">
        Desempeño Superior
      </h3>
      <ol className="flex flex-col gap-5">
        {list.map((c, i) => (
          <li key={i} className="text-start">
            {c}
          </li>
        ))}
      </ol>
    </div>
  );
};
