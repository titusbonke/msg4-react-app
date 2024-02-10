function EntryCard({ children, Name, Class = "card-primary" }) {
    return (
        <div className={"card " + Class} style={{ marginBottom: 0 }}>
            <div
                className="card-header"
                style={{ backgroundColor: "#007bff", color: "#fff" }}
            >
                <h3 className="card-title">{Name}</h3>
            </div>
            <div className="card-body ">
                {children.filter(a => a.type !== EntryCardFooter)}
            </div>
            {children.filter(a => a.type === EntryCardFooter)}
        </div>
    );
}

export function EntryCardWithTabs({ children, Name, Class = "card-primary" }) {
    return (
        <div className={`card ${Class} card-tabs`} style={{ marginBottom: 0 }}>
            <div
                className="card-header p-0 pt-1"
                style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    paddingTop: ".25rem!important"
                }}
            >
                <ul
                    className="nav nav-tabs"
                    id="cus-tab-tab"
                    role="tablist"
                    style={{
                        marginBottom: "-1px",
                        borderTopLeftRadius: ".25rem",
                        borderTopRightRadius: ".25rem"
                    }}
                >
                    <li className="pt-2 px-3">
                        <h3 className="card-title">{Name}</h3>
                    </li>
                    {
                        children.filter(a => a.type === EntryCardTab)
                            .map(({ props: { Name, Id } }, Index) => {
                                return (
                                    <li className="nav-item" key={Index}>
                                        <a
                                            className={Index === 0 ? "nav-link active" : "nav-link"}
                                            id={Id || Name}
                                            data-toggle="pill"
                                            href={"#cus-tab-" + Index}
                                            role="tab"
                                            aria-controls={"cus-tab-" + Index}
                                            aria-selected="true"
                                            title={Name}
                                        >
                                            {Name}
                                        </a>
                                    </li>
                                )
                            })
                    }
                </ul>
            </div>
            <div className="card-body" style={{ paddingBottom: 20 }}>
                <div className="tab-content" id="cus-tab-tabContent">

                    {
                        children.filter(a => a.type === EntryCardTab).map(({ props: { Name, Id, children } }, Index) => {
                            return (
                                <>
                                    <div
                                        className={Index === 0 ? "tab-pane fade active show" : "tab-pane fade"}
                                        id={"cus-tab-" + Index}
                                        role="tabpanel"
                                        aria-labelledby={`cus-tab-${Index}-tab`}
                                        key={Index}
                                    >
                                        {children.map(a => {
                                            if(a.type !== EntryCardFooter) return a;
                                            else{
                                                console.log(a)
                                                return a.props.children;
                                            } 
                                        })
                                        }
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
}



export function EntryCardTab({ children, Name, Id }) {
    return (
        { children }
    )
}

export function EntryCardFooter({ children }) {
    return (
        <div className="card-footer p-3">
            {children}
        </div>
    )
}


export default EntryCard;