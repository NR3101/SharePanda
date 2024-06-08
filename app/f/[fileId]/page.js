"use client";

import React, { useCallback, useEffect, useState } from "react";
import { app } from "../../../firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";
import FileItem from "../_components/FileItem";

function FileView({ params }) {
  const db = getFirestore(app);
  const [file, setFile] = useState();

  // Function to get file info from firestore
  const getFileInfo = useCallback(async () => {
    const docRef = doc(db, "uploadedFiles", params?.fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      // console.log("No such document!");
    }
  }, [params?.fileId, db]);

  useEffect(() => {
    getFileInfo();
  }, [getFileInfo]);

  return (
    <div
      className="
    bg-gray-100 dark:bg-gray-800 h-screen w-full flex justify-center
    items-center flex-col gap-4"
    >
      <Link href="">
        <Image src="/logo.svg" alt="logo" width={150} height={100} />
      </Link>
      <FileItem file={file} />
    </div>
  );
}

export default FileView;
