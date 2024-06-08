"use client";

import { app } from "./../../../../firebaseConfig";
import UploadForm from "./_components/UploadForm";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { generateRandomString } from "./../../../../utils/generateRandomString";
import { useRouter } from "next/navigation";
import CompleteCheck from "./_components/CompleteCheck";

function UploadPage() {
  const { user } = useUser();
  const [progress, setProgress] = useState();
  const router = useRouter();
  const storage = getStorage(app);
  const db = getFirestore(app);
  const [fileDocId, setFileDocId] = useState();
  const [uploadCompleted, setUploadCompleted] = useState(false);

  // Function to upload file
  const uploadFile = async (file) => {
    const metadata = {
      contentType: file?.type,
    };

    const storageRef = ref(storage, `file-upload/${file?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      // console.log("Upload is " + progress + "% done");
      setProgress(progress);
    });

    await uploadTask.then((snapshot) => {
      getDownloadURL(snapshot.ref).then(async (downloadURL) => {
        // console.log("File available at", downloadURL);
        await saveInfo(file, downloadURL); // Wait for saveInfo to complete
        setUploadCompleted(true); // Set uploadCompleted to true after saveInfo is done
      });
    });
  };

  // Function to save file info in firestore
  const saveInfo = async (file, fileUrl) => {
    const docId = generateRandomString().toString();
    setFileDocId(docId);
    await setDoc(doc(db, "uploadedFiles", docId), {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName || user?.primaryEmailAddress.emailAddress,
      password: "",
      id: docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + "f/" + docId,
    });
  };

  // useEffect to check if upload is completed
  const isProgressComplete = progress === 100;
  useEffect(() => {
    if (isProgressComplete) {
      const timer = setTimeout(() => {
        setUploadCompleted(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isProgressComplete]);

  // useEffect to redirect to file preview page
  useEffect(() => {
    if (uploadCompleted && fileDocId) {
      // Check if fileDocId is set
      const timer = setTimeout(() => {
        setUploadCompleted(false);
        // console.log("FileDocId", fileDocId);
        router.push("/file-preview/" + fileDocId);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [fileDocId, router, uploadCompleted]); // Add fileDocId as a dependency

  return (
    <div className="p-5 px-8 md:px-28 text-center">
      {!uploadCompleted ? (
        <div>
          <h2 className="text-[30px] text-center m-5">
            Start
            <strong className="text-primary"> Uploading </strong> Your File and{" "}
            <strong className="text-primary"> Share</strong> it with others.
          </h2>
          <UploadForm
            uploadBtnClick={(file) => uploadFile(file)}
            progress={progress}
          />
        </div>
      ) : (
        <CompleteCheck />
      )}
    </div>
  );
}

export default UploadPage;
