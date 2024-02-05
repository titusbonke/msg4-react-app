function MenuItem({children,name,iconClass,url}) {
    return (
        <>
            {
                children ?
                    <li className="nav-item has-treeview">
                        <a href="/" className="nav-link">
                            <i className={iconClass} />
                            <p>
                                {name}
                                <i className="right fas fa-angle-left" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            {children}
                        </ul>
                    </li>
                    :
                    <li className="nav-item">
                        <a
                            href={url}
                            className="nav-link"
                        >
                            <i className={iconClass} />
                            <p>{name}</p>
                        </a>
                    </li>
            }
        </>
    );
}

export default MenuItem;