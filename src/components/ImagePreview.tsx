import { useState } from "react";

type ImagePreviewProps = { productName: string; imageList: string[] };

export const ImagePreview = ({ productName, imageList }: ImagePreviewProps) => {
  const [currentSrc, setCurrentSrc] = useState<string>(imageList[0]);
  return (
    <div className="p-4">
      <img
        src={currentSrc}
        alt=""
        className="w-full h-96  rounded-md object-contain"
      />
      <div className="py-4 flex gap-4 items-center justify-start">
        {imageList.map((c, i) => (
          <img
            key={i}
            src={c}
            alt={productName + i}
            onClick={() => setCurrentSrc(c)}
            className={`h-14 rounded-md border-[3px] ${
              currentSrc === c ? "border-blue-600/70" : "border-gray-400/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
