import type { PerformanceResults } from "../types";

type PerformanceResultsProps = { resultList: PerformanceResults[] };

export const PerformanceResultsTable = ({
  resultList,
}: PerformanceResultsProps) => {
  return (
    <>
      <h3 className="text-blue-600/90 font-bold text-start py-4">
        Resultados del Rendimiento
      </h3>
      <table className="w-full p-2 text-sm">
        <thead>
          <tr className="text-white bg-blue-600/90">
            <th colSpan={3} className="px-2">
              Serie RB2011 @ 600Mhz (Prueba de Ethernet)
            </th>
            <th colSpan={2} className="px-2">
              64 marcos de bytes{" "}
            </th>
            <th colSpan={2} className="px-2">
              512 marcos de bytes{" "}
            </th>
            <th colSpan={2} className="px-2">
              1518 marcos de bytes
            </th>
          </tr>
          <tr className="text-white bg-blue-800/40 py-2">
            <th className="px-2">IP Firewall </th>
            <th className="px-2">Conntrack </th>
            <th className="px-2">Modo. </th>
            <th className="px-2">Mbps.</th>
            <th className="px-2">Fps. </th>
            <th className="px-2">Mbps. </th>
            <th className="px-2">Fps. </th>
            <th className="px-2">Mbps. </th>
            <th className="px-2">Fps.</th>
          </tr>
        </thead>
        <tbody>
          {resultList.map((c, i) => (
            <tr key={i}>
              <td className="p-2">{c.ipFirewall}</td>
              <td className="p-2">{c.conntrack}</td>
              <td className="p-2">{c.modo}</td>
              <td className="p-2">{c.mbps1}</td>
              <td className="p-2">{c.fps1}</td>
              <td className="p-2">{c.mbps2}</td>
              <td className="p-2">{c.fps2}</td>
              <td className="p-2">{c.mbps3}</td>
              <td className="p-2">{c.fps3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
