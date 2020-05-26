import React, {useState} from "react";
import Navbar from "./Navbar";

const Profile = () => {
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);

    const handleChange = event => {
        setUsername(event.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault()

        try {
            const profile = await fetch(`https://api.github.com/users/${username}`);
            const profileJson = await profile.json();
            // console.log(profileJson);

            const repositories = await fetch(profileJson.repos_url);
            const repositoriesJson = await repositories.json(repositories);
            // console.log(repositoriesJson);

            if (profileJson) {
                setData(profileJson);
                setRepositories(repositoriesJson);
            }
        } catch (err) {
            alert("User not found");
        }
    };

    return (
        <React.Fragment>
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