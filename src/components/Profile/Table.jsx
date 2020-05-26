import React from "react";

const Table = ({ data, repositories }) => {
    return (
        <div className="container">
            <table className="table text-center mt-3">
                <thead>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Repositories</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">{data.name}</th>
                    <td>
                        {repositories.map(repo => (
                            <ul className="list-unstyled" key={repo.id}>
                                <li><a href={repo.html_url}>{repo.name}</a></li>
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