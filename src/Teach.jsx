import React, { useState } from "react";
import { storage } from "./firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";

const Teach = () => {
  const [user, setUser] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("xyz");
  const [file, setFile] = useState(null);
  const videosCollectionRef = collection(db, "grouplearn");

  const uploadVideo = () => {
    if (file == null) return;

    const vidRef = ref(storage, `video/${file.name + v4()}`);
    uploadBytes(vidRef, file).then((res) => {
      console.log(res.metadata.name);
      // console.log(storage.ref(res.metadata.name).getDownloadURL());
      getDownloadURL(res.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        // setLink(downloadURL);
        console.log(link);
        createEntry();
      });
      alert("vid uploaded");
    });
  };

  const createEntry = async () => {
    await addDoc(videosCollectionRef, {
      user: user,
      link: link,
      heading: heading,
      description: description,
    });
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white-main h-98 my-10 p-5 w-192 rounded-2xl flex flex-col ">
        <div className="m-1 p-1 flex justify-center">
          <input
            className="border-b p-1 mx-auto mt-20"
            type="text"
            onChange={(e) => {
              setUser(e.target.value);
            }}
            placeholder="Your name..."
          />
        </div>
        <div className="m-1 p-1 flex justify-center">
          <input
            className="border-b p-1"
            type="text"
            onChange={(e) => {
              setHeading(e.target.value);
            }}
            placeholder="Topic Name..."
          />
        </div>
        <div className="m-1 p-1 flex justify-center">
          <input
            className="border-b p-1 "
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Description/article..."
          />
        </div>
        <div className="m-1 p-1 flex justify-center">
          <input
            className="border-b p-1"
            type="file"
            placeholder="upload video"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </div>
        <div className="flex justify-center mt-16">
        <button onClick={uploadVideo} className="bg-red-main w-40 h-10 rounded-lg hover:bg-red-200  "> Upload Image</button></div>
      </div>
    </div>
  );
};

export default Teach;
