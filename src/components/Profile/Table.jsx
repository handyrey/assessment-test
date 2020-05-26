import React from "react";

const Table = (props) => {
    const { data, repositories } = props;
    const hasAvatar = data.avatar_url ?
        <img className="rounded-circle" src={data.avatar_url} alt={data.id} width="50px" />
        : null;

    return (
        <div className="container">
            <table className="table table-striped text-center mt-3">
                <thead>
                <tr>
                    <th scope="col">Avatar</th>
                    <th scope="col">Username</th>
                    <th scope="col">Repositories</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{hasAvatar}</td>
                    <th scope="row">{data.name}</th>
                    <td>
                        {repositories.map(repo => (
                            <ul className="list-unstyled" key={repo.id}>
                                <li><a href={repo.html_url} rel="noopener noreferrer" target="_blank">{repo.name}</a></li>
                            </ul>
                        ))}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;