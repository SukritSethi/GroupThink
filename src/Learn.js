import React, { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Player } from "video-react";

const Learn = () => {
  const [videos, setVideos] = useState([]);
  const videosCollectionRef = collection(db, "grouplearn");

  useEffect(() => {
    function timeout(delay) {
      return new Promise((res) => setTimeout(res, delay));
    }
    const getVideos = async () => {
      const data = await getDocs(videosCollectionRef);
      setVideos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getVideos();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="bg-white-main rounded-2xl my-10 p-5 overflow-x-hidden overflow-y-auto w-192">
        {videos.map((video) => (
          <div className=" m-2 p-2 drop-shadow">
            <div className="flex justify-center font-bold text-2xl text-black-main underline ">
              {video.heading}
            </div>
            <div className="flex text-lg justify-end m-0 text-black-main ">
              by: {video.user}
            </div>
            <div className="flex text-lg justify-end m-0 text-black-main my-2 p-2">
              <Player>
                <source src={`${video.link}`} />
              </Player>
            </div>
            <div className="flex p-0 text-lg justify-end m-0 text-black-main my-1">
              {video.description}
            </div>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
