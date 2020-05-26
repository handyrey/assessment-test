import React, {useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Navbar from "./Navbar";
import "react-toastify/dist/ReactToastify.min.css";

const Profile = () => {
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);

    const handleChange = event => {
        setUsername(event.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const { data: profile } = await axios.get(`https://api.github.com/users/${username}`);
            // console.log({ profile });

            const { data: repositories } = await axios.get(profile.repos_url);
            // console.log({ repositories });

            if (profile) {
                setData(profile);
                setRepositories(repositories);
            }
        } catch (err) {
            if (err.response && err.response.status === 404) {
                toast.error("User not found");
            } else {
                console.log(err)
                toast.error("An unexpected error occurred")
            }
        }
    };

    return (
        <React.Fragment>
            <ToastContainer />
            <Navbar
                username={username}
                data={data}
                repositories={repositories}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </React.Fragment>
    )
}

export default Profile;