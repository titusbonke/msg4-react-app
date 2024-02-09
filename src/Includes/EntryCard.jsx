function EntryCard({ children,Name,Class="card-primary" }) {
    return (
        <div className={"card "+Class} style={{ marginBottom: 0 }}>
            <div
                className="card-header"
                style={{ backgroundColor: "#007bff", color: "#fff" }}
            >
                <h3 className="card-title">{Name}</h3>
            </div>
            <div className="card-body ">
                {children.filter(a=>a.type!==EntryCardFooter).map(a=>a)}
            </div>
            {children.filter(a=>a.type===EntryCardFooter).map(a=>a)}
        </div>
    );
}


export function EntryCardFooter({ children }) {
    return (
        <div className="card-footer p-3">
            {children}
        </div>
    )
}


export default EntryCard;