import { Link } from "react-router-dom";
import $ from 'jquery';

function MenuItem({ children, name, iconClass = "nav-icon fas fa-star", url, isTab, isPopUp, popUpHeight = 500, popUpWidth = 450 }) {

    const makeLinkActive = (e) => {
        //for removing all the active and menu-open class from anchor tags
        $(".main-sidebar a.nav-link.active").each((index, item) => {
            $(item).removeClass("active");
        });
        $(".nav-item.has-treeview.menu-open").each((index, item) => {
            $(item).removeClass("menu-open");
        });
        $(".main-sidebar.sidebar-focused").each((index, item) => {
            $(item).removeClass("sidebar-focused");
        });

        //for marking all the anchor tags with active class
        var parentLinks = $(e.target).parents("li.nav-item");
        parentLinks.each(function (index, item) {
            $(item).addClass("menu-open");

            var child = $(item).children("a.nav-link")[0];
            $(child).addClass("active");
        });
    }
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
        <>
            {
                children ?
                    <li className="nav-item has-treeview">
                        <a href="/" className="nav-link ">
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
                            onClick={(e) => { makeLinkActive(e); OpenPopupOrTab(e); }}
                            className="nav-link "
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