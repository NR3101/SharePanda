import { useState } from "react";
import AlertMessage from "./AlertMessage";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";

function UploadForm({ uploadBtnClick, progress }) {
  const [file, setFile] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  // Function to handle file selection
  const onFileSelect = (selectedFile) => {
    if (selectedFile && selectedFile.size > 10 * 1024 * 1024) {
      setErrorMsg("File size should be less than 10MB");
      return;
    }

    setErrorMsg("");
    setFile(selectedFile);
  };

  // Function to handle drag over
  const onDragOver = (e) => {
    e.preventDefault();
  };

  // Function to handle drop
  const onDrop = (e) => {
    e.preventDefault();
    onFileSelect(e.dataTransfer.files[0]);
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-12 h-12 mb-4 text-blue-500 dark:text-blue-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-lg md:text-2xl text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or
              <strong className="text-primary"> drag </strong>
              and
              <strong className="text-primary"> drop </strong>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (Max Size: 10MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => onFileSelect(e.target.files[0])}
          />
        </label>
      </div>

      {/*Alert message if file size is greater than 10MB */}
      {errorMsg ? <AlertMessage msg={errorMsg} /> : null}

      {/*  File preview component */}
      {file ? (
        <FilePreview file={file} removeFile={() => setFile(null)} />
      ) : null}

      {/* Progress Bar */}
      {progress > 0 && progress < 100 ? (
        <ProgressBar progress={progress} />
      ) : (
        //   Upload button
        <button
          disabled={!file}
          className="p-3 bg-primary hover:bg-blue-700 font-semibold text-white w-[30%] rounded-3xl mt-5 disabled:bg-gray-500"
          onClick={() => uploadBtnClick(file)}
        >
          Upload
        </button>
      )}
    </div>
  );
}

export default UploadForm;
