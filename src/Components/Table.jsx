import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TableContext } from "./TableContextProvider";

export function TableLayout({ children, TotalRows, RowsPerPage }) {
    const { CurrentPage, setCurrentPage } = useContext(TableContext);

    var LastPage = Math.ceil(TotalRows / RowsPerPage);
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
                                                    {children.filter(child => child.type === TableHeader)}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {children.filter(a => a.type !== TableHeader)}
                                                {children.filter(a => a.type !== TableHeader)[0].length === 0 ?
                                                    <tr>
                                                        <td colSpan={children.filter(a => a.type === TableHeader).length} style={{ textAlign: "center" }}>- No data to display -</td>
                                                    </tr>
                                                    : ""}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <div className="float-left">
                                            <div className="dataTables_info">
                                                Showing {(CurrentPage - 1) * RowsPerPage + 1} to {Math.min(CurrentPage * RowsPerPage, TotalRows)}  of {TotalRows} entries
                                            </div>
                                        </div>
                                        <div className="float-right">
                                            <div className="dataTables_paginate paging_simple_numbers">
                                                {
                                                    TotalRows > RowsPerPage ?
                                                        <ul className="pagination">
                                                            {CurrentPage > 1 ?
                                                                <li className={"paginate_button page-item"}><button className="page-link" onClick={prev => setCurrentPage(CurrentPage - 1)} >Previous</button></li>
                                                                : <li className={"paginate_button page-item disabled"}><button className="page-link" >Previous</button></li>
                                                            }

                                                            {
                                                                LastPage <= 4 ? Array.from({ length: LastPage }, (_, i) => (
                                                                    <li key={i} className={`paginate_button page-item ${CurrentPage === i + 1 ? "active" : ""}`}><button className="page-link" onClick={prev => setCurrentPage(i + 1)}>{i + 1}</button></li>
                                                                )
                                                                ) :
                                                                    (() => {
                                                                        let Elements = [];
                                                                        Elements.push(<li className={`paginate_button page-item ${CurrentPage === 1 ? "active" : ""}`}><button className="page-link" onClick={prev => setCurrentPage(1)}>1</button></li>);

                                                                        if (CurrentPage > 3 && (CurrentPage <= LastPage - 3)) {
                                                                            // console.log("a")
                                                                            Elements.push(<li className={"paginate_button page-item disabled"}><button className="page-link" >...</button></li>)

                                                                            Elements.push(<li className={`paginate_button page-item `}><button className="page-link" onClick={prev => setCurrentPage(CurrentPage - 1)}>{CurrentPage - 1}</button></li>);

                                                                            Elements.push(<li className={`paginate_button page-item active`}><button className="page-link" onClick={prev => setCurrentPage(CurrentPage)}>{CurrentPage}</button></li>);

                                                                            Elements.push(<li className={`paginate_button page-item `}><button className="page-link" onClick={prev => setCurrentPage(CurrentPage + 1)}>{CurrentPage + 1}</button></li>);

                                                                            Elements.push(<li className={"paginate_button page-item disabled"}><button className="page-link" >...</button></li>)
                                                                        } else if (CurrentPage <= 4) {
                                                                            // console.log("b")
                                                                            Array.from({ length: LastPage }, (_, i) => {
                                                                                if (i === 0) return i;
                                                                                if (i < 4) {
                                                                                    Elements.push(
                                                                                        <li className={`paginate_button page-item ${CurrentPage === i + 1 ? "active" : ""}`}><button className="page-link" onClick={prev => setCurrentPage(i + 1)}>{i + 1}</button></li>
                                                                                    )
                                                                                }
                                                                                return i;
                                                                            })
                                                                            Elements.push(<li className={"paginate_button page-item disabled"}><button className="page-link" >...</button></li>)
                                                                        } else if (CurrentPage > LastPage - 3) {
                                                                            // console.log("c")
                                                                            Elements.push(<li className={"paginate_button page-item disabled"}><button className="page-link" >...</button></li>)
                                                                            for (let i = LastPage - 3; i < LastPage; i++) {
                                                                                Elements.push(
                                                                                    <li key={i} className={`paginate_button page-item ${CurrentPage === i ? "active" : ""}`}>
                                                                                        <button className="page-link" onClick={() => { setCurrentPage(i) }}>
                                                                                            {i}
                                                                                        </button>
                                                                                    </li>
                                                                                );
                                                                            }
                                                                        }
                                                                        //looping through to add keys 
                                                                        Elements.push(<li className={`paginate_button page-item ${CurrentPage === LastPage ? "active" : ""}`}><button className="page-link" onClick={prev => setCurrentPage(LastPage)}>{LastPage}</button></li>);
                                                                        Elements = Elements.map((element, i) => {
                                                                            return React.cloneElement(element, { key: i });
                                                                        });
                                                                        console.log(Elements);
                                                                        return Elements;
                                                                    })()

                                                            }
                                                            {CurrentPage === LastPage ?
                                                                <li className={"paginate_button page-item disabled"}><button className="page-link" >Next</button></li>
                                                                : <li className={"paginate_button page-item"}><button className="page-link" onClick={prev => setCurrentPage(CurrentPage + 1)} >Next</button></li>
                                                            }
                                                        </ul>
                                                        : <ul className="pagination" />
                                                }
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
    const { SortOrder, setSortOrder, SortField, setSortField } = useContext(TableContext);

    function CheckSortingArrow() {
        if (SortField === Name?.replace(/\s/g, '') && SortOrder === 1) return <i className="fa fa-arrow-up"></i>;
        if (SortField === Name?.replace(/\s/g, '') && SortOrder === 0) return <i className="fa fa-arrow-down"></i>;
    }

    function CheckSorting() {
        console.log(Name + " " + SortField + " " + SortOrder)
        if (Name?.replace(/\s/g, '') === SortField && SortOrder === 0) setSortOrder(1)
        else setSortOrder(0)
        setSortField(() => Name?.replace(/\s/g, ''))
    }

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
                    // name="SortOrder"
                    // value={Name?.replace(/\s/g, '') + ";asc"}
                    onClick={CheckSorting}
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
                    {Name + " "}
                    {CheckSortingArrow()}
                </button>
                    : Name
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

export function TableData({ text, iconClass, url, width = 50, isPopUp, isTab, popUpHeight = 500, popUpWidth = 450, textAlign = "left" }) {
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
            {url ?
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
                </Link> :
                <>
                    {iconClass ? <i
                        style={{ fontSize: 16, color: "#191970" }}
                        title=""
                        className={iconClass}
                    /> : ""}
                    {text}
                </>
            }

        </td>
    );
}




