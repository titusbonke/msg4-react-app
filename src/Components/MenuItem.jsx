import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';



function MenuItem({ children, name, iconClass = "nav-icon fas fa-star", url, isTab, isPopUp, popUpHeight = 700, popUpWidth = 550 }) {
    var [menuActive, setMenuActive] = useState("");

    const makeLinkActive = (e) => {
        e.preventDefault();
        var parentLinks = $(e.target).parents("li.nav-item");
        
        // Do something with the selected parent <a> tags
        parentLinks.each(function(c) {
            // Do something with each parent <a> tag
            var child = $(c).children("a.nav-link")[0];
            console.log(child);
        });
    
        // setMenuActive("active");
    }
    const OpenPopup = (e) => {
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
        <>
            {
                children ?
                    <li className="nav-item has-treeview">
                        <a href="/" className={"nav-link " + menuActive}>
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
                        <Link
                            to={url}
                            onClick={() => { makeLinkActive(); OpenPopup(); }}
                            className={"nav-link " + menuActive}
                        >
                            <i className={iconClass} />
                            <p>{name}</p>
                        </Link>
                    </li>
            }
        </>
    );
}

export default MenuItem;