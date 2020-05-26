import React, {useState} from "react";
import logo from "../../assets/logo.svg";

const Navbar = () => {
    // const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    // const [repositories, setRepositories] = useState([]);

    const onChangeHandler = event => {
        setUsername(event.target.value);
    };

    const sumbitHandler = async event => {
        event.preventDefault()

        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();
        console.log(profileJson);

        const repositories = await fetch(profileJson.repos_url);
        const setRepositories = await repositories.json(repositories)
        console.log(setRepositories)
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img className="navbar-brand" src={logo} alt="github logo" width="35px" />
            <form className="form-inline my-2 my-lg-0 justify-content-end">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    onChange={onChangeHandler}
                />
                <button
                    className="btn btn-outline-info my-2 my-sm-0"
                    type="submit"
                    onClick={sumbitHandler}
                >
                    Submit
                </button>
            </form>
        </nav>
    )
}

export default Navbar;