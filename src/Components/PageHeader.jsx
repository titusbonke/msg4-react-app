import { Link } from "react-router-dom";

function PageHeader({ pageName, parentPagesArray }) {
    return (
        <section style={{ height: 65 }} className="content-header">
            <div className="container-fluid">
                <div className="row mb-1">
                    <div className="col-sm-6">
                        <h3>{pageName}</h3>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            {
                                parentPagesArray ? <>{
                                    parentPagesArray.map((a, b) =>
                                        <li key={b} className="breadcrumb-item ">
                                            <Link to={a.url} >{a.name} </Link>
                                        </li>
                                    )}
                                    <li className="breadcrumb-item active">{pageName}</li>
                                </>
                                    : ""
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default PageHeader;