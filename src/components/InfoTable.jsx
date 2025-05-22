import React, { useState } from "react";

export default function InfoTable({data}){
    const [page, setPage] = useState(0);
    const pageSize = 5;
    const pageCount = Math.ceil(data.length / pageSize);
    const currentPage = data.slice(page * pageSize, (page + 1) * pageSize);
    console.log(data);

    return(
        <div style={{marginTop: "10px"}}>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Breed</th>
                        <th>Avg Lifespan</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPage && currentPage.map((element) =>(
                        <tr>
                            <td>{element.attributes.name}</td>
                            <td>{(element.attributes.life.max + element.attributes.life.min) / 2}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-flex justify-content-center mt-4">
                <ul className="pagination">
                    {Array.from({ length: pageCount }, (_, i) => (
                    <li key={i} className={`page-item ${i === page ? "active" : ""}`}>
                        <button className="page-link" onClick={() => setPage(i)}>
                        {i + 1}
                        </button>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

