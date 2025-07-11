import { faFilePdf, faBook } from "@fortawesome/free-solid-svg-icons";
import type { RedirectPage } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type DownloadResourcesProps = { list: RedirectPage[] };

export const DownloadResources = ({ list }: DownloadResourcesProps) => {
  return (
    <div className=" flex flex-col gap-3">
      <h3 className="text-blue-600/90 font-bold text-start py-4">Download</h3>
      <a
        href={list[0].href}
        className="w-full max-w-[375px] flex mx-auto items-center justify-center gap-4 rounded-md border border-red-600/70 text-red-600/70"
      >
        <FontAwesomeIcon icon={faFilePdf} /> <span>{list[0].label}</span>
      </a>
      <a
        href={list[1].href}
        className="w-full max-w-[375px] flex mx-auto items-center justify-center gap-4 rounded-md border border-blue-600/70 text-blue-600/70"
      >
        <FontAwesomeIcon icon={faBook} /> <span>{list[1].label}</span>
      </a>
    </div>
  );
};
