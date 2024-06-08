import { Link } from "@react-email/components";
import React from "react";

function FileList({ fileList }) {
  return (
    fileList && (
      <div className="overflow-x-auto mt-7 dark:bg-gray-800">
        <table
          className="min-w-full divide-y-2 divide-gray-200 bg-white 
        dark:bg-gray-800 text-sm"
        >
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-200">
                File Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-200">
                {" "}
                Type
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-200">
                Size(MB)
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-200"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {fileList.map((file, index) => (
              <tr
                className={`px-4 py-2 ${
                  index % 2 === 0
                    ? " dark:bg-gray-800 dark:shadow-lg"
                    : " dark:bg-gray-700 dark:shadow-md"
                }`}
                key={index}
              >
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-200">
                  {file.fileName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">
                  {file.fileType}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">
                  {(file.fileSize / 1024 / 1024).toFixed(2)}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">
                  <Link
                    href={"/file-preview/" + file.id}
                    className="cursor-pointer text-blue-500 dark:text-blue-400"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
}

export default FileList;
