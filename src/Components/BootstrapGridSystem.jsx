export function Container({ children }) {
    return (
        <div className="container-fluid">
            <div className="row">
                {children}
            </div>
        </div>
    );
}
export function Row({ children }) {
    return (
        <div className="row">
            {children}
        </div>
    );
}
export function Col({ children }) {
    return (
        <div className="col">
            {children}
        </div>
    );
}

// export default Container;