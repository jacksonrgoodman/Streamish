const baseUrl = '/api/Video/GetWithComments';
const commentUrl = '/api/Video/GetWithComments';

export const getAllVideos = () => {
    return fetch(commentUrl)
        .then((res) => res.json())
};

export const addVideo = (video) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
    });
};
