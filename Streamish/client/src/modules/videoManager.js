const baseUrl = '/api/Video/';
const commentUrl = '/api/Video/GetWithComments';

export const getAllVideos = () => {
    debugger
    return fetch(baseUrl)
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
