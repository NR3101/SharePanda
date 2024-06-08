"use client";

import { useUser } from "@clerk/nextjs";
import React, { useCallback, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import TotalFileCard from "./_components/TotalFileCard";
import FileList from "./_components/FileList";
import Link from "next/link";
import { app } from "../../../../firebaseConfig";

function FilesPage() {
  const db = getFirestore(app);
  const { user } = useUser();
  const [fileList, setFileList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllUserFiles = useCallback(async () => {
    setIsLoading(true);
    const q = query(
      collection(db, "uploadedFiles"),
      where("userEmail", "==", user.primaryEmailAddress.emailAddress)
    );

    const querySnapshot = await getDocs(q);
    setFileList([]);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      setFileList((fileList) => [...fileList, doc.data()]);
    });
    setIsLoading(false);
  }, [db, user]);

  useEffect(() => {
    user && getAllUserFiles();
  }, [user, getAllUserFiles]);

  return (
    <div
      className="p-5 bg-gray-100 dark:bg-gray-800 text-gray-900 
dark:text-gray-100 h-screen overflow-y-auto"
    >
      <h2 className="text-[40px] font-bold mb-2">My Files</h2>

      {isLoading || fileList.length == 0 ? (
        <div className="flex flex-col justify-center items-center">
          {isLoading ? (
            <div className="text-2xl font-bold justify-center items-center">
              Loading Files...
            </div>
          ) : (
            <div className="text-center text-gray-900 dark:text-gray-100 mt-8 md:mt-16">
              <h2 className="text-3xl mb-6">
                {" "}
                You don&apos;t have any files uploaded yet.Start uploading now!
              </h2>
              <Link
                href={"/upload"}
                className="p-4 text-2xl text-white bg-primary rounded-md mt-8"
              >
                Upload Now
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="text-gray-900 dark:text-gray-100">
          <TotalFileCard totalFile={fileList?.length} />
          <FileList fileList={fileList} />
        </div>
      )}
    </div>
  );
}

export default FilesPage;
