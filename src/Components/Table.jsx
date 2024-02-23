import { Link } from "react-router-dom";

export function TableLayout({ children }) {
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        ".table-hover tbody tr:hover{background-color:rgb(199 198 198)} .table-hover tbody tr:hover:nth-of-type(odd){background-color:rgb(199 198 198)} .table-striped tbody tr:nth-of-type(odd) {background-color:#e9ecef;}"
                }}
            />
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div
                                    className="card-body"
                                    style={{
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        paddingTop: 10,
                                        paddingBottom: 10
                                    }}
                                >
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-hover table-striped">
                                            <thead>
                                                <tr style={{ color: "white" }}>
                                                    {children.filter(a => a.type === TableHeader)}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {children.filter(a => a.type !== TableHeader)}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <div className="float-left">
                                            <div className="dataTables_info">
                                                Showing 1 to 7 of 7 entries
                                            </div>
                                        </div>
                                        <div className="float-right">
                                            <div className="dataTables_paginate paging_simple_numbers">
                                                <ul className="pagination" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{" "}
            </section>
        </>

    );
}

export function TableHeader({ Name = "", Sortable = true }) {
    return (
        <th
            style={{
                paddingRight: 2,
                border: "1px solid #d1d4d6",
                backgroundColor: "#1E90FF",
                textAlign: "left"
            }}
        >
            {
                Sortable ? <button
                    name="SortOrder"
                    value={Name?.replace(/\s/g, '') + ";asc"}
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        backgroundColor: "transparent",
                        outline: "none",
                        border: "none",
                        height: "auto",
                        width: "auto",
                        fontWeight: "bold",
                        padding: "0px 0px 0px 0px"
                    }}
                >
                    {Name}
                </button>
                    :  Name 
            }

        </th>
    );
}



export function TableRow({ children }) {
    return (
        <tr>
            {children}
        </tr>
    );
}

export function TableData({ text, iconClass, url = "#", width = 50, isPopUp, isTab, popUpHeight = 500, popUpWidth = 450,textAlign="left" }) {
    const OpenPopupOrTab = (e) => {
        if (isPopUp) {
            e.preventDefault();
            window.open(url, '_blank', `height=${popUpHeight},width=${popUpWidth}`);
            return;
        }
        if (isTab) {
            e.preventDefault();
            window.open(url);
            return;
        }
    }
    return (
        <td
            style={{
                textAlign: textAlign,
                border: "1px solid #d1d4d6",
                padding: ".50rem .75rem",
                width: width
            }}
        >
            <Link
                to={url}
                onClick={OpenPopupOrTab}
                style={{ textDecoration: "none", color: "#000000" }}
            >
                {iconClass ? <i
                    style={{ fontSize: 16, color: "#191970" }}
                    title=""
                    className={iconClass}
                /> : ""}
                {text}
            </Link>
        </td>
    );
}




