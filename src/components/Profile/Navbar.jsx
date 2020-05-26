import React from "react";
import Table from "./Table";
import logo from "../../assets/logo.svg";

const Navbar = (props) => {
    const { username, data, repositories, onChange, onSubmit } = props;

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <img className="navbar-brand" src={logo} alt="github logo" width="35px" />
                <form className="form-inline my-2 my-lg-0 justify-content-end">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search a username"
                        value={username}
                        onChange={onChange}
                    />
                    <button
                        className="btn btn-outline-info my-2 my-sm-0"
                        type="submit"
                        onClick={onSubmit}
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