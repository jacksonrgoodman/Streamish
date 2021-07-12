import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//TODO Search Component

const Search = () => {

    // const [videos, setVideos] = useState([]);

    // const getVideos = () => {
    //     getAllVideos().then(videos => setVideos(videos));
    // };

    // useEffect(() => {
    //     getVideos();
    // }, []);

    return (
        <Form className="displayFlex" >
            <FormGroup>
                <div className="displayFlex">
                    <Input type="searchInput" name="searchInput" id="searchInput" placeholder="Search For a video?" />
                    <Button>Search Streamify</Button>
                </div>
            </FormGroup>
        </Form>
    )
}

export default Search;