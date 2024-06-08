import { Download } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function FileItem({ file }) {
  const [password, setPassword] = useState("");

  return (
    file && (
      <div className="px-4 sm:px-0 dark:bg-gray-800 dark:rounded-xl">
        <div className="p-5 rounded-md bg-white dark:bg-gray-900 flex flex-col items-center">
          <div className="text-center flex-col gap-3 items-center flex">
            <h2 className="text-[20px] text-gray-600 dark:text-gray-300">
              <strong className="text-primary dark:text-blue-400">
                {file.userName}{" "}
              </strong>
              shared this file with you
            </h2>
            <h2 className="text-[12px] text-gray-400 dark:text-gray-500">
              Find File Details Below
            </h2>
            <Image
              src="/download-file.gif"
              width={150}
              height={150}
              alt="download"
              className="w-[150px] h-[150px]  p-5 "
            />

            <h2 className="text-gray-500 dark:text-gray-400 text-[15px]">
              {file.fileName} ⚡ {file.fileType} ⚡{" "}
              {(file.fileSize / 1024 / 1024).toFixed(2)} MB
            </h2>
          </div>

          {file.password.length > 3 ? (
            <input
              type="password"
              className="p-2 border rounded-md text-[14px] mt-5
      text-center  outline-blue-400 dark:bg-gray-700 dark:text-white"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password to access "
            />
          ) : null}

          <button
            href=""
            className="flex gap-2 p-2
       bg-primary text-white rounded-full w-full
       items-center hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400
        text-[14px] mt-5 text-center  justify-center
        disabled:bg-gray-300 dark:disabled:bg-gray-600"
            onClick={() => window.open(file?.fileUrl)}
            disabled={file.password !== password}
          >
            <Download className="h-4 w-4" /> Download
          </button>
          <h2 className="text-gray-400 dark:text-gray-500 text-[12px] mt-2">
            *Terms and Conditions apply
          </h2>
        </div>
      </div>
    )
  );
}

export default FileItem;
