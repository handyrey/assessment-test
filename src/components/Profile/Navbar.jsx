import React, {useState} from "react";
import Table from "./Table";
import logo from "../../assets/logo.svg";

const Navbar = () => {
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);

    const onChangeHandler = event => {
        setUsername(event.target.value);
    };

    const sumbitHandler = async event => {
        event.preventDefault()

        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();
        console.log(profileJson);

        const repositories = await fetch(profileJson.repos_url);
        const repositoriesJson = await repositories.json(repositories)
        console.log(repositoriesJson)

        if (profileJson) {
            setData(profileJson)
            setRepositories(repositoriesJson)
        }
    };

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <img className="navbar-brand" src={logo} alt="github logo" width="35px" />
                <form className="form-inline my-2 my-lg-0 justify-content-end">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        value={username}
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

            <Table className="pt-5" data={data} repositories={repositories} />
        </React.Fragment>
    )
}

export default Navbar;