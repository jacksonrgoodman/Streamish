import React from "react";
import { Card, CardBody } from "reactstrap";

const Video = ({ video }) => {
    console.log("VIDEO CARD:", video)
    return (
        <Card>
            <p className="text-left px-2">Posted by: {video.userProfile.name}</p>
            <CardBody>
                <iframe className="video"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />

                <p>
                    <strong>{video.title}</strong>
                </p>
                <p><strong>Description: </strong>{video.description}</p>
                <strong>Comments:</strong>
                <p>{video.comments.map((comment) => (
                    <p><strong>{comment.userProfile.name}:</strong> {comment.message}</p>
                ))}
                </p>
            </CardBody>
        </Card>
    );
};

export default Video;
