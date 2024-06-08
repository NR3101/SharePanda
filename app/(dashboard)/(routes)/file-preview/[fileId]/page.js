"use client";

import { app } from "./../../../../../firebaseConfig";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { ArrowLeftSquare } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import FileInfo from "../_components/FileInfo";
import FileShareForm from "../_components/FileShareForm";

function FilePreviewPage({ params }) {
  const [file, setFile] = useState();
  const db = getFirestore(app);

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

  // Function to save password
  const onPasswordSave = async (password) => {
    const docRef = doc(db, "uploadedFiles", params?.fileId);
    await updateDoc(docRef, {
      password: password,
    });
  };

  return (
    <div className="py-10 px-20">
      <Link href="/upload" className="flex gap-3">
        <ArrowLeftSquare /> Go to Upload{" "}
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
        <FileInfo file={file} />
        <FileShareForm
          file={file}
          onPasswordSave={(password) => onPasswordSave(password)}
        />
      </div>
    </div>
  );
}

export default FilePreviewPage;
