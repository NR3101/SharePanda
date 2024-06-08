import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

function FilePreview({ file, removeFile }) {
  return (
    <div className="flex items-center gap-4 justify-between mt-5 border rounded-md p-3 border-blue-400">
      <div className="flex items-center p-2 min-w-0">
        <Image src={"/file.png"} width={50} height={50} alt="File" />

        <div className="text-left min-w-0">
          <h2 className="overflow-ellipsis overflow-hidden">{file?.name}</h2>
          <h2 className="text-[12px] text-gray-400">
            {file?.type} / {(file?.size / 1024 / 1024).toFixed(2)} MB
          </h2>
        </div>
      </div>
      <X
        size={35}
        className="cursor-pointer text-red-500"
        onClick={removeFile}
      />
    </div>
  );
}

export default FilePreview;
