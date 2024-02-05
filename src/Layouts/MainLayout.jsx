import './fontawesome.css';
import { Helmet } from "react-helmet";




function MainLayout({ children }) {

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    function searchFunction() {
        var input;
        input = document.getElementById("myInput");
        if (input != null) {
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
        }
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
    

    return (
        <div className="wrapper">
            <Helmet>
                <link rel='icon' href='https://console.cloud.robeeta.com/msg4/Content/Images/favicon.ico' />
                <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/daterangepicker/daterangepicker.css' />
                <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/icheck-bootstrap/icheck-bootstrap.min.css' />
                <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css' />
                <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/select2/css/select2.min.css' />
                <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css' />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/progress-bar/progress-bar.css' />
                <link rel='stylesheet' href='https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' />
                <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/css/adminlte.min.css' />
                <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700' rel='stylesheet' />
                <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/datatables-responsive/css/responsive.bootstrap4.min.css' />
                <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/pre-loader/preloader-1.css' />
            </Helmet>
            <Helmet>
                <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/jquery/jquery.min.js'   ></script>
                <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/jquery-ui/jquery-ui.min.js' ></script>
                <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/moment/moment.min.js'></script>
                <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/daterangepicker/daterangepicker.js'></script>

                <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/bootstrap/js/bootstrap.bundle.min.js' defer></script>
                <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/select2/js/select2.full.min.js'></script>
                <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/inputmask/min/jquery.inputmask.bundle.min.js'></script>
                <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js'></script>
                <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/js/adminlte.js'></script>
                <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/datatables/jquery.dataTables.min.js'></script>
                <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/datatables-responsive/js/dataTables.responsive.min.js' ></script>
                <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/datatables-responsive/js/responsive.bootstrap4.min.js' ></script>

                {/* <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/pre-loader/preloader-1.js' defer></script> */}
                <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/chart/chart.js'></script>
                <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/chart/chart.min.js'></script>
            </Helmet>



            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="/" role="button">
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
                            onClick={() => myFunction()}
                            onKeyUp={() => filterFunction()}
                        />
                        <button
                            type="submit"
                            className="btn btn-default"
                            onClick={searchFunction()}
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
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="/" className="brand-link">
                    <img
                        src="/Content/Images/logo.png"
                        alt="Logo"
                        className="brand-image img-circle elevation-3"
                        style={{ opacity: ".8" }}
                    />
                    <span className="brand-text font-weight-light">
                        <strong>Msg4</strong>
                    </span>
                </a>
                <div className="sidebar">
                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            {/*menu-guid:c39c61cdfc0b4bd19014d815232229c6_menu-path:000-100*/}
                            <li className="nav-item">
                                <a
                                    href="/Home/Dashboard?_wtmid=c39c61cdfc0b4bd19014d815232229c6"
                                    className="nav-link"
                                >
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>Dashboard</p>
                                </a>
                            </li>
                            {/*menu-guid:_menu-path:000-101*/}
                            <li className="nav-item has-treeview">
                                <a href="/" className="nav-link">
                                    <i className="nav-icon fas fa-sms" />
                                    <p>
                                        SMS
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    {/*menu-guid:_menu-path:000-101-100*/}
                                    <li className="nav-item has-treeview">
                                        <a href="/" className="nav-link">
                                            <i className="nav-icon fas fa-sms" />
                                            <p>
                                                Send SMS
                                                <i className="right fas fa-angle-left" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            {/*menu-guid:5a47779ef319472995753ad9617e044e_menu-path:000-101-100-100*/}
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="/"
                                                    onClick={() => window.open('/msg4/SMS/SendSMS?_wtmid=5a47779ef319472995753ad9617e044e', '_blank', 'height=900,width=500')}
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Send SMS</p>
                                                </a>
                                            </li>
                                            {/*menu-guid:dd7903b85c2b4b329856e2fec665855c_menu-path:000-101-100-101*/}
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="/"
                                                    onClick={() => window.open('/msg4/SMS/SendBulkSMS?_wtmid=dd7903b85c2b4b329856e2fec665855c', '_blank', 'height=875,width=500')}
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Send Bulk SMS</p>
                                                </a>
                                            </li>
                                            {/*menu-guid:5631792754fb4059aca0936fb695e174_menu-path:000-101-100-102*/}
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="/"
                                                    onClick={() => window.open('/msg4/SMS/SendScheduleBulkSMS?_wtmid=5631792754fb4059aca0936fb695e174', '_blank', 'height=750,width=500')}
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Send Schedule Bulk SMS</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/*menu-guid:_menu-path:000-101-101*/}
                                    <li className="nav-item has-treeview">
                                        <a href="/" className="nav-link">
                                            <i className="nav-icon fas fa-clipboard-list" />
                                            <p>
                                                Reports
                                                <i className="right fas fa-angle-left" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            {/*menu-guid:ede742ee0c28462c832ff0340595ec89_menu-path:000-101-101-100*/}
                                            <li className="nav-item">
                                                <a
                                                    href="/msg4/SMS/SentItemsReport/1?_wtmid=ede742ee0c28462c832ff0340595ec89"
                                                    className="nav-link"
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Sent Items Report</p>
                                                </a>
                                            </li>
                                            {/*menu-guid:a7af253b32fb4f7f8da1ebdfe1254cc7_menu-path:000-101-101-101*/}
                                            <li className="nav-item">
                                                <a
                                                    href="/msg4/SMS/DeliveryReport?_wtmid=a7af253b32fb4f7f8da1ebdfe1254cc7"
                                                    className="nav-link"
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Delivery Report</p>
                                                </a>
                                            </li>
                                            {/*menu-guid:302937778bdd407f8007a49036aef825_menu-path:000-101-101-102*/}
                                            <li className="nav-item">
                                                <a
                                                    href="/msg4/SMS/DeliverySummaryReport?_wtmid=302937778bdd407f8007a49036aef825"
                                                    className="nav-link"
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Delivery Summary Report</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/*menu-guid:_menu-path:000-101-102*/}
                                    <li className="nav-item has-treeview">
                                        <a href="/" className="nav-link">
                                            <i className="nav-icon fas fa-adjust" />
                                            <p>
                                                Process Status
                                                <i className="right fas fa-angle-left" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            {/*menu-guid:4e380ed55abc4e7c8b2866373c8bc219_menu-path:000-101-102-100*/}
                                            <li className="nav-item">
                                                <a
                                                    href="/msg4/SMS/BulkSMSprocess/1?_wtmid=4e380ed55abc4e7c8b2866373c8bc219"
                                                    className="nav-link"
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Bulk SMS Process </p>
                                                </a>
                                            </li>
                                            {/*menu-guid:7e3a912efe3348b38e63bb37b2b81278_menu-path:000-101-102-101*/}
                                            <li className="nav-item">
                                                <a
                                                    href="/msg4/SMS/ManageScheduleBulkSMS/1?_wtmid=7e3a912efe3348b38e63bb37b2b81278"
                                                    className="nav-link"
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Schedule Bulk SMS</p>
                                                </a>
                                            </li>
                                            {/*menu-guid:df31fe4fea484f2ca1d05ef8fce55b26_menu-path:000-101-102-102*/}
                                            <li className="nav-item">
                                                <a
                                                    href="/msg4/SMS/GroupSMSProcess/1?_wtmid=df31fe4fea484f2ca1d05ef8fce55b26"
                                                    className="nav-link"
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Group SMS Process </p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/*menu-guid:_menu-path:000-101-103*/}
                                    <li className="nav-item has-treeview">
                                        <a href="/" className="nav-link">
                                            <i className="nav-icon far fa-address-book" />
                                            <p>
                                                DLT Registration
                                                <i className="right fas fa-angle-left" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            {/*menu-guid:ee7d41f0a7a84e5392080a21f8ee4b98_menu-path:000-101-103-100*/}
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="/"
                                                    onClick={() => window.open('/msg4/SMS/AddDltRegistration?_wtmid=ee7d41f0a7a84e5392080a21f8ee4b98', '_blank', 'height=850,width=450')}
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Add DLT Registration</p>
                                                </a>
                                            </li>
                                            {/*menu-guid:4315e291503a423ab685bff02a93bbc7_menu-path:000-101-103-101*/}
                                            <li className="nav-item">
                                                <a
                                                    href="/msg4/SMS/ManageDltRegistration?_wtmid=4315e291503a423ab685bff02a93bbc7"
                                                    className="nav-link"
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Manage DLT Registration</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/*menu-guid:_menu-path:000-101-104*/}
                                    <li className="nav-item has-treeview">
                                        <a href="/" className="nav-link">
                                            <i className="nav-icon fas fa-clipboard" />
                                            <p>
                                                Sender ID
                                                <i className="right fas fa-angle-left" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            {/*menu-guid:ab2ff3f80e1a49a594d4ae6996577595_menu-path:000-101-104-100*/}
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="/"
                                                    onClick={() => window.open('/msg4/SMS/AddSenderId?_wtmid=ab2ff3f80e1a49a594d4ae6996577595', '_blank', 'height=850,width=450')}
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Add Sender ID</p>
                                                </a>
                                            </li>
                                            {/*menu-guid:3821087295db463dad0d4e647615fc82_menu-path:000-101-104-101*/}
                                            <li className="nav-item">
                                                <a
                                                    href="/msg4/SMS/ManageSenderId?_wtmid=3821087295db463dad0d4e647615fc82"
                                                    className="nav-link"
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Manage Sender ID</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/*menu-guid:_menu-path:000-102*/}
                            <li className="nav-item has-treeview">
                                <a href="/" className="nav-link">
                                    <i className="nav-icon far fa-comment-dots" />
                                    <p>
                                        Whats App
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    {/*menu-guid:0704c0062d9f4f2791d19a137052ab66_menu-path:000-102-100*/}
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="/"
                                            onClick={() => window.open('/msg4/WhatsApp/SendBulkWhatsApp?_wtmid=0704c0062d9f4f2791d19a137052ab66', '_blank', 'height=930,width=500')}
                                        >
                                            <i className="nav-icon fas fa-star" />
                                            <p>Send Bulk WhatsApp</p>
                                        </a>
                                    </li>
                                    {/*menu-guid:e3f2fa6f500c4118961759b479d9e1c9_menu-path:000-102-101*/}
                                    <li className="nav-item">
                                        <a
                                            href="/msg4/WhatsApp/BulkWhatsAppStatus?_wtmid=e3f2fa6f500c4118961759b479d9e1c9"
                                            className="nav-link"
                                        >
                                            <i className="nav-icon fas fa-star" />
                                            <p>Bulk WhatsApp Status</p>
                                        </a>
                                    </li>
                                    {/*menu-guid:fc5b821be2934566b72447cd3ca83d8a_menu-path:000-102-102*/}
                                    <li className="nav-item">
                                        <a
                                            href="/msg4/WhatsApp/WhatsAppMessageList?_wtmid=fc5b821be2934566b72447cd3ca83d8a"
                                            className="nav-link"
                                        >
                                            <i className="nav-icon fas fa-star" />
                                            <p>Message List</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/*menu-guid:_menu-path:000-103*/}
                            <li className="nav-item has-treeview">
                                <a href="/" className="nav-link">
                                    <i className="nav-icon fas fa-clipboard" />
                                    <p>
                                        Reports
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    {/*menu-guid:47dda2537b2446c5975f327045c0a008_menu-path:000-103-100*/}
                                    <li className="nav-item">
                                        <a
                                            href="/msg4/SMS/ManageTransaction?_wtmid=47dda2537b2446c5975f327045c0a008"
                                            className="nav-link"
                                        >
                                            <i className="nav-icon fas fa-star" />
                                            <p>Manage Transaction</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/*menu-guid:_menu-path:000-104*/}
                            <li className="nav-item has-treeview">
                                <a href="/" className="nav-link">
                                    <i className="nav-icon fa fa-address-book" />
                                    <p>
                                        Master
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    {/*menu-guid:_menu-path:000-104-100*/}
                                    <li className="nav-item has-treeview">
                                        <a href="/" className="nav-link">
                                            <i className="nav-icon far fa-address-book" />
                                            <p>
                                                Contact
                                                <i className="right fas fa-angle-left" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            {/*menu-guid:ecbb13c2bda048ac98f9f94ec4501a7e_menu-path:000-104-100-100*/}
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="/"
                                                    onClick={() => window.open('/msg4/Master/AddContact?_wtmid=ecbb13c2bda048ac98f9f94ec4501a7e', '_blank', 'height=585,width=450')}
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Add Contact</p>
                                                </a>
                                            </li>
                                            {/*menu-guid:76eb85e3e4504a76b256d4237b4ba94f_menu-path:000-104-100-101*/}
                                            <li className="nav-item">
                                                <a
                                                    href="/msg4/Master/ManageContact/1?_wtmid=76eb85e3e4504a76b256d4237b4ba94f"
                                                    className="nav-link"
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Manage Contact</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/*menu-guid:_menu-path:000-104-101*/}
                                    <li className="nav-item has-treeview">
                                        <a href="/" className="nav-link">
                                            <i className="nav-icon fas fa-user-friends" />
                                            <p>
                                                Group
                                                <i className="right fas fa-angle-left" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            {/*menu-guid:582e72adcd4744b290641971ed2f8091_menu-path:000-104-101-100*/}
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="/"
                                                    onClick={() => window.open('/msg4/Master/AddGroup?_wtmid=582e72adcd4744b290641971ed2f8091', '_blank', 'height=400,width=450')}
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Add Group</p>
                                                </a>
                                            </li>
                                            {/*menu-guid:1318e224b99949aab3ee8ecb71211996_menu-path:000-104-101-101*/}
                                            <li className="nav-item">
                                                <a
                                                    href="/msg4/Master/ManageGroup/1?_wtmid=1318e224b99949aab3ee8ecb71211996"
                                                    className="nav-link"
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Manage Group</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/*menu-guid:_menu-path:000-104-102*/}
                                    <li className="nav-item has-treeview">
                                        <a href="/" className="nav-link">
                                            <i className="nav-icon fas fa-clipboard" />
                                            <p>
                                                Template
                                                <i className="right fas fa-angle-left" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            {/*menu-guid:e57e76e077424a27b19d3baed6f5a798_menu-path:000-104-102-100*/}
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="/"
                                                    onClick={() => window.open('/msg4/Master/AddTemplate?_wtmid=e57e76e077424a27b19d3baed6f5a798', '_blank', 'height=610,width=450')}
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Add Template</p>
                                                </a>
                                            </li>
                                            {/*menu-guid:9fb3b719457a4168879dc1f6aac971c1_menu-path:000-104-102-101*/}
                                            <li className="nav-item">
                                                <a
                                                    href="/msg4/Master/ManageTemplate/1?_wtmid=9fb3b719457a4168879dc1f6aac971c1"
                                                    className="nav-link"
                                                >
                                                    <i className="nav-icon fas fa-star" />
                                                    <p>Manage Template</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            <div className="content-wrapper">
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n    .col-lg-3 .small-box h3, .col-md-3 .small-box h3 {\n        font-size: 1.6rem;\n        white-space: pre-wrap;\n    }\n"
                    }}
                />
                <section style={{ height: 65 }} className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-1">
                            <div className="col-sm-6">
                                <h3>Dashboard</h3>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item ">
                                        <a href="/Home/Dashboard">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-12">
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>04-Feb-2024 11:57 AM</h3>
                                        <p>Login Date &amp; Time</p>
                                    </div>
                                    <div className="icon">
                                        <i
                                            className="fas fa-sign-in-alt"
                                            title=""
                                            style={{ fontSize: 24 }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>172.24.5.2</h3>
                                        <p>IP</p>
                                    </div>
                                    <div className="icon">
                                        <i
                                            className="fas fa-laptop"
                                            title=""
                                            style={{ fontSize: 32 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section style={{ height: 65 }} className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-1">
                                <div className="col-sm-6">
                                    <h3>SMS</h3>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right"></ol>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-12">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>2.000</h3>
                                        <p>Balance</p>
                                    </div>
                                    <div className="icon">
                                        <i
                                            className="fas fa-chart-pie"
                                            title=""
                                            style={{ fontSize: 32 }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>0.1500</h3>
                                        <p>User Rate</p>
                                    </div>
                                    <div className="icon">
                                        <i
                                            className="fas fa-rupee-sign"
                                            title=""
                                            style={{ fontSize: 32 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-12">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>13</h3>
                                        <p>SMS Count</p>
                                    </div>
                                    <div className="icon">
                                        <i
                                            className="fas fa-broadcast-tower"
                                            title=""
                                            style={{ fontSize: 32 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" style="margin-top:10%;" role="document">
  <div class="modal-content">
      <div class="modal-header">
          <h5 class="modal-title">DLT Registeration</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div class="modal-body text-center">
          <div class="row">
              <div class="col">
                  <h5>
                      As per TROI norms DLT registeration is mandatory for commercial messaging.
                  </h5>
              </div>

          </div>
          <br />
          <div class="row">
              <div class="col border-right border-left">
                  <br />
                  <h3>
                      Already Registered ?
                  </h3>
                  <br />
                  <button id="AlreadyRegistered" class="btn btn-primary"> Click here </button>
                  <br />
                  <br />
                  <br />
              </div> 
              <div class="col border-left border-right">
                  <br />
                  <h3>
                      Not Registered ?
                  </h3>
                  <br />
                  <button id="NotRegistered" class="btn btn-primary"> Click here </button>
                  <br />
                  <br />
                  <br />
              </div>
          </div>
          <br />

          <div class="row">
              <div class="col">
                  <h5>
                      Reg Charges : Rs 5000 will be charged for Regestering Entity on DLT platform.
                  </h5>
              </div>

          </div>

      </div>
      <div class="modal-footer">*/}
                {/*<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
  </div>
    </div>
</div>*/}
            </div>
            <footer className="main-footer">
                <strong>
                    Copyright © 2021-2024{" "}
                    <a href="https://sathyainfo.com/" target="_blank" rel="noreferrer">
                        SATHYA TECHNOSOFT
                    </a>
                </strong>
                All rights reserved.
                <div className="float-right d-none d-sm-inline-block">
                    <b>Version </b>24.1.1
                </div>
            </footer>
        </div>
        

    );
}

export default MainLayout;