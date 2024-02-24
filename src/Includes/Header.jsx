import { useEffect } from "react";
import $ from "jquery";



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function searchFunction() {
    var input;
    input = document.getElementById("myInput");
    // if (input != null) {
    if (input.value === "msg4") {
        window.location.href = "https://console.cloud.robeeta.com/msg4?Token=@UjL1SzVmJMEdLEbYECcISsZU8VL59g1VHSWTlNqK09hRa8hhRcMhWvaNXFs5mms6wZnG8B$e9wpqZy6b$ivThuRpukN2JROO40kutabA$fM=@";
    }
    else if (input.value === "vm") {
        window.location.href = "https://console.cloud.robeeta.com/vm?Token=@6LQKQjldjjggILkMC4itU2hzk2otH6FE4vhwhI1$ghqqzwgRuU_MuuYeugC$N8APm979G1BnfbruiQYsGI8cIka4U3hhhHDeO0vBl3OgUtg=@";
    }
    else if (input.value === "veri5") {
        window.location.href = "https://console.cloud.robeeta.com/veri5?Token=@VchTP_XX0E82l2PhA6_HUtoBhyiceVzBU3P$7B4hda9jcfSvKXmyEdJIT7DinEqqsNV$PegjaeZdzw7xAc0THFK2WX3GaCaFDKjEEWZV28E=@";
    }
    else {
        document.getElementById("myDropdown2").classList.toggle("show");
    }
    // }else{
    //     console.log("empty")
    // }
}
function filterFunction() {
    var input, filter, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    var div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        var txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}



function Header() {
    useEffect(() => {
        // Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.search-control')) {

                var dropdowns = document.getElementsByClassName("searchdropdown-content");
                for (let i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
            if (!event.target.matches('.btn-default')) {

                var dropdown2 = document.getElementsByClassName("searchdropdown-content2");
                for (let i = 0; i < dropdown2.length; i++) {
                    var openDropdown2 = dropdown2[i];
                    if (openDropdown2.classList.contains('show')) {
                        openDropdown2.classList.remove('show');
                    }
                }
            }
        }

    }, [])
    useEffect(a => {
        if (localStorage.getItem('isMenuOpen') === "true") {
            // console.log("hit");
            $("body").removeClass("sidebar-collapse");
        }
        // console.log(localStorage.getItem('isMenuOpen'));
    }, [])

    var HandleMenuChange = a => {
        localStorage.getItem('isMenuOpen') == "true" ? localStorage.setItem('isMenuOpen', "false") : localStorage.setItem('isMenuOpen', "true");
        // console.log(localStorage.getItem('isMenuOpen'));
    }

    return (

        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="/" role="button" onClick={HandleMenuChange} >
                        <i className="fas fa-bars" />
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        href="https://console.cloud.robeeta.com/?Token=@bQfmuUuB_LelTIL4VSIKfILde$Jv1QhuIG8ewXpaANJsbMxXdTuWG1jN6IbERJS7UojmdTpwR12bGew5UDb4CukECVs6gjDHEKXSq_BzWVE=@"
                        role="button"
                    >
                        <i className="fas fa-home" />
                    </a>
                </li>
            </ul>
            <div className="searchdropdown">
                <div className="input-group-append">
                    <input
                        type="text"
                        id="myInput"
                        placeholder="Search here"
                        name="search"
                        className="form-control search-control"
                        onClick={myFunction}
                        onKeyUp={filterFunction}
                    />
                    <button
                        type="submit"
                        className="btn btn-default"
                        onClick={searchFunction}
                    >
                        <i className="fa fa-search" />
                    </button>
                </div>
                <div id="myDropdown" className="searchdropdown-content">
                    <a href="https://console.cloud.robeeta.com/msg4?Token=@e4yNp50PMJH2BeY7gru0Ca1t4El48pBAa4zbw3$a1UHKcQHuBV1KLF8j5G4Uhsofy_y_AOVFYomPWXYXOHMJdzri2W8z$QO8peK1kZi_ozM=@">
                        Msg4
                    </a>
                    <a href="https://console.cloud.robeeta.com/vm?Token=@Hkp$Ft9TUkx3i902nw4P7DL54c7FCfl8Qm4BcvvzBuykvlVfNiZ6Uy$10nzkfKSmxgLVKiifIzU$LpsZyuOMo66Bz4LwcmKHr6mapfey9RI=@">
                        Vm
                    </a>
                    <a href="https://console.cloud.robeeta.com/veri5?Token=@QDxtKqGZFONlWnUUMnobbwydGPnTBIgdzYLXtUD9F1ev18GVhfi9XhNjZ8IMWZqD96I3QOEGFMMhOrn7J0wfC9zr6SGzV9RLeeE0uZo$Fck=@">
                        Veri5
                    </a>
                </div>
                <div id="myDropdown2" className="searchdropdown-content2">
                    <a href="/"> No Results Found </a>
                </div>
            </div>
            <ul className="navbar-nav ml-auto">
                <li
                    className="nav-item dropdown user user-menu"
                    style={{ paddingTop: 6 }}
                >
                    <a
                        href="/"
                        className="text-gray-dark"
                        data-toggle="dropdown"
                        aria-expanded="true"
                    >
                        <img
                            src="https://drive.sathyainfo.com/webtheme20/v1/img/user.png"
                            className="user-image"
                            alt="User "
                        />
                        &nbsp;&nbsp;
                        <span style={{ color: "black" }}>Titus</span>&nbsp;&nbsp;
                    </a>
                    <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <li className="user-header">
                            <img
                                src="https://drive.sathyainfo.com/webtheme20/v1/img/user.png"
                                className="img-circle"
                                alt="User "
                            />
                            <p>Titus</p>
                        </li>
                        <li className="user-footer">
                            <a
                                href="/msg4/Master/ManageApi"
                                className="dropdown-item text-center"
                            >
                                Api Keys
                            </a>
                        </li>
                        <li className="user-footer">
                            <a href="/User/SignOut" className="dropdown-item text-center">
                                <i className="fas fa-sign-out-alt" /> Sign Out
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a
                        href="/"
                        className="nav-link"
                        data-toggle="dropdown"
                        aria-expanded="true"
                        title="Release Notes"
                    >
                        <i className="fas fa-question-circle" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-sm-left dropdown-menu-right menulist">
                        <li className="user-footer">
                            <a
                                href="https://help.cloud.robeeta.com/portal/books/robeetacloud-releasenotes"
                                className="dropdown-item text-center"
                                target="_blank" rel="noreferrer"
                            >
                                <i className="fas fa-sticky-note" /> &nbsp;&nbsp;Release Notes
                            </a>
                            <a
                                target="_blank"
                                href="/msg4/Content/Document/Msg4UserManual.pdf"
                                className="dropdown-item text-center"
                            >
                                <i
                                    className="fas fa-file-pdf"
                                    title=""
                                    style={{ fontSize: 16 }}
                                />{" "}
                                User Manual
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>

    );
}

export default Header;