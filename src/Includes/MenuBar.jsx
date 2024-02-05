import MenuItem from "../Components/MenuItem";

function MenuBar() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="/" className="brand-link">
                <img
                    src="https://console.cloud.robeeta.com/msg4/Content/Images/logo.png"
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
                        {/* <li className="nav-item">
                        <a
                            href="/Home/Dashboard?_wtmid=c39c61cdfc0b4bd19014d815232229c6"
                            className="nav-link"
                        >
                            <i className="nav-icon fas fa-tachometer-alt" />
                            <p>Dashboard</p>
                        </a>
                    </li> */}
                        <MenuItem name="Dashboard" url="/Home/Dashboard?_wtmid=c39c61cdfc0b4bd19014d815232229c6" iconClass="nav-icon fas fa-tachometer-alt" />
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
                                {/* <li className="nav-item has-treeview">
                                <a href="/" className="nav-link">
                                    <i className="nav-icon fas fa-sms" />
                                    <p>
                                        Send SMS
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
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
                            </li> */}

                                <MenuItem iconClass="nav-icon fas fa-sms" name="Send SMS" >
                                    <MenuItem url="/msg4/SMS/SendSMS?_wtmid=5a47779ef319472995753ad9617e044e', '_blank', 'height=900,width=500" iconClass="nav-icon fas fa-star" name="Send SMS" />
                                    <MenuItem url="/msg4/SMS/SendBulkSMS?_wtmid=dd7903b85c2b4b329856e2fec665855c', '_blank', 'height=875,width=500" iconClass="nav-icon fas fa-star" name="Send Bulk SMS" />
                                    <MenuItem url="/msg4/SMS/SendScheduleBulkSMS?_wtmid=5631792754fb4059aca0936fb695e174', '_blank', 'height=750,width=500" iconClass="nav-icon fas fa-star" name="Send Schedule Bulk SMS" />
                                </MenuItem>


                                {/* <li className="nav-item has-treeview">
                                    <a href="/" className="nav-link">
                                        <i className="nav-icon fas fa-clipboard-list" />
                                        <p>
                                            Reports
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a
                                                href="/msg4/SMS/SentItemsReport/1?_wtmid=ede742ee0c28462c832ff0340595ec89"
                                                className="nav-link"
                                            >
                                                <i className="nav-icon fas fa-star" />
                                                <p>Sent Items Report</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="/msg4/SMS/DeliveryReport?_wtmid=a7af253b32fb4f7f8da1ebdfe1254cc7"
                                                className="nav-link"
                                            >
                                                <i className="nav-icon fas fa-star" />
                                                <p>Delivery Report</p>
                                            </a>
                                        </li>
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
                                </li> */}
                                <MenuItem iconClass="nav-icon fas fa-clipboard-list" name="Reports" >
                                    <MenuItem url="/msg4/SMS/SentItemsReport/1?_wtmid=ede742ee0c28462c832ff0340595ec89" iconClass="nav-icon fas fa-star" name="Sent Items Report" />
                                    <MenuItem url="/msg4/SMS/DeliveryReport?_wtmid=a7af253b32fb4f7f8da1ebdfe1254cc7" iconClass="nav-icon fas fa-star" name="Delivery Report" />
                                    <MenuItem url="/msg4/SMS/DeliverySummaryReport?_wtmid=302937778bdd407f8007a49036aef825" iconClass="nav-icon fas fa-star" name="Delivery Summary Report" />
                                </MenuItem>


                                {/* <li className="nav-item has-treeview">
                                    <a href="/" className="nav-link">
                                        <i className="nav-icon fas fa-adjust" />
                                        <p>
                                            Process Status
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a
                                                href="/msg4/SMS/BulkSMSprocess/1?_wtmid=4e380ed55abc4e7c8b2866373c8bc219"
                                                className="nav-link"
                                            >
                                                <i className="nav-icon fas fa-star" />
                                                <p>Bulk SMS Process </p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="/msg4/SMS/ManageScheduleBulkSMS/1?_wtmid=7e3a912efe3348b38e63bb37b2b81278"
                                                className="nav-link"
                                            >
                                                <i className="nav-icon fas fa-star" />
                                                <p>Schedule Bulk SMS</p>
                                            </a>
                                        </li>
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
                                </li> */}
                                <MenuItem iconClass="nav-icon fas fa-adjust" name="Process Status" >
                                    <MenuItem url="/msg4/SMS/BulkSMSprocess/1?_wtmid=4e380ed55abc4e7c8b2866373c8bc219" iconClass="nav-icon fas fa-star" name="Bulk SMS Process" />
                                    <MenuItem url="/msg4/SMS/ManageScheduleBulkSMS/1?_wtmid=7e3a912efe3348b38e63bb37b2b81278" iconClass="nav-icon fas fa-star" name="Schedule Bulk SMS" />
                                    <MenuItem url="/msg4/SMS/GroupSMSProcess/1?_wtmid=df31fe4fea484f2ca1d05ef8fce55b26" iconClass="nav-icon fas fa-star" name="Group SMS Process" />
                                </MenuItem>

                                {/* <li className="nav-item has-treeview">
                                    <a href="/" className="nav-link">
                                        <i className="nav-icon far fa-address-book" />
                                        <p>
                                            DLT Registration
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
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
                                </li> */}
                                <MenuItem iconClass="nav-icon far fa-address-book" name="DLT Registration" >
                                    <MenuItem url="/msg4/SMS/AddDltRegistration?_wtmid=ee7d41f0a7a84e5392080a21f8ee4b98" iconClass="nav-icon fas fa-star" name="Add DLT Registration" />
                                    <MenuItem url="/msg4/SMS/ManageDltRegistration?_wtmid=4315e291503a423ab685bff02a93bbc7" iconClass="nav-icon fas fa-star" name="Manage DLT Registration" />
                                </MenuItem>

                                {/* <li className="nav-item has-treeview">
                                    <a href="/" className="nav-link">
                                        <i className="nav-icon fas fa-clipboard" />
                                        <p>
                                            Sender ID
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
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
                                </li> */}
                                <MenuItem iconClass="nav-icon fas fa-clipboard" name="Sender ID" >
                                    <MenuItem url="/msg4/SMS/AddSenderId?_wtmid=ab2ff3f80e1a49a594d4ae6996577595" iconClass="nav-icon fas fa-star" name="Add Sender ID" />
                                    <MenuItem url="/msg4/SMS/ManageSenderId?_wtmid=3821087295db463dad0d4e647615fc82" iconClass="nav-icon fas fa-star" name="Manage Sender ID" />
                                </MenuItem>

                            </ul>
                        </li>
                        <li className="nav-item has-treeview">
                            <a href="/" className="nav-link">
                                <i className="nav-icon far fa-comment-dots" />
                                <p>
                                    Whats App
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
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
                                <li className="nav-item">
                                    <a
                                        href="/msg4/WhatsApp/BulkWhatsAppStatus?_wtmid=e3f2fa6f500c4118961759b479d9e1c9"
                                        className="nav-link"
                                    >
                                        <i className="nav-icon fas fa-star" />
                                        <p>Bulk WhatsApp Status</p>
                                    </a>
                                </li>
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

                        {/* <li className="nav-item has-treeview">
                        <a href="/" className="nav-link">
                            <i className="nav-icon fas fa-clipboard" />
                            <p>
                                Reports
                                <i className="right fas fa-angle-left" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
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
                    </li> */}
                        <MenuItem iconClass="nav-icon fas fa-clipboard" name="Reports" >
                            <MenuItem iconClass="nav-icon fas fa-star" name="Manage Transaction" url="/msg4/SMS/ManageTransaction?_wtmid=47dda2537b2446c5975f327045c0a008" />
                        </MenuItem>

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

    );
}

export default MenuBar;