import React, { useEffect, useState } from "react";
import Video from './Video';
import VideoNoComment from './VideoNoComment';
import { getAllVideos } from "../modules/videoManager";

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    const getVideos = () => {
        getAllVideos().then(videos => setVideos(videos));
    };

    useEffect(() => {
        getVideos();
    }, []);

    if (videos.comments != null) {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    {videos.map((video) => (
                        <Video video={video} key={video.id} />
                    ))}
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    {videos.map((video) => (
                        <VideoNoComment video={video} key={video.id} />
                    ))}
                </div>
            </div>
        );
    }
};

export default VideoList;
