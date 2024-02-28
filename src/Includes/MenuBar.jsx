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
                        <MenuItem name="Dashboard" url="/Dashboard" iconClass="nav-icon fas fa-tachometer-alt" />
                        <MenuItem name="test" url="/test" />
                        <MenuItem iconClass="nav-icon fas fa-sms" name="SMS" >
                            <MenuItem iconClass="nav-icon fas fa-sms" name="Send SMS" >
                                <MenuItem url="/SMS/SendSMS"  name="Send SMS" isPopUp popUpHeight={window.screen.availHeight} />
                                <MenuItem url="/SMS/SendBulkSMS" isPopUp name="Send Bulk SMS" />
                                <MenuItem url="/SMS/SendScheduleBulkSMS" isPopUp name="Send Schedule Bulk SMS" />
                            </MenuItem>
                            <MenuItem iconClass="nav-icon fas fa-clipboard-list" name="Reports" >
                                <MenuItem url="/SMS/SentItemsReport/1" name="Sent Items Report" />
                                <MenuItem url="/SMS/DeliveryReport" name="Delivery Report" />
                                <MenuItem url="/SMS/DeliverySummaryReport" name="Delivery Summary Report" />
                            </MenuItem>
                            <MenuItem iconClass="nav-icon fas fa-adjust" name="Process Status" >
                                <MenuItem url="/SMS/BulkSMSprocess/1" name="Bulk SMS Process" />
                                <MenuItem url="/SMS/ManageScheduleBulkSMS/1" name="Schedule Bulk SMS" />
                                <MenuItem url="/SMS/GroupSMSProcess/1" name="Group SMS Process" />
                            </MenuItem>
                            <MenuItem iconClass="nav-icon far fa-address-book" name="DLT Registration" >
                                <MenuItem url="/SMS/AddDltRegistration" name="Add DLT Registration" />
                                <MenuItem url="/SMS/ManageDltRegistration" name="Manage DLT Registration" />
                            </MenuItem>
                            <MenuItem iconClass="nav-icon fas fa-clipboard" name="Sender ID" >
                                <MenuItem url="/SMS/AddSenderId" name="Add Sender ID" />
                                <MenuItem url="/SMS/ManageSenderId" name="Manage Sender ID" />
                            </MenuItem>
                        </MenuItem>
                        <MenuItem iconClass="nav-icon far fa-comment-dots" name="Whats App" >
                            <MenuItem url="/WhatsApp/SendBulkWhatsApp" name="Send Bulk WhatsApp" />
                            <MenuItem url="/WhatsApp/BulkWhatsAppStatus" name="Bulk WhatsApp Status" />
                            <MenuItem url="/WhatsApp/WhatsAppMessageList" name="Message List" />
                        </MenuItem>
                        <MenuItem iconClass="nav-icon fas fa-clipboard" name="Reports" >
                            <MenuItem name="Manage Transaction" url="/SMS/ManageTransaction" />
                        </MenuItem>
                        <MenuItem iconClass="nav-icon fa fa-address-book" name="Master" >
                            <MenuItem iconClass="nav-icon far fa-address-book" name="Contact" >
                                <MenuItem url="/Master/AddContact" name="Add Contact" isPopUp popUpHeight={window.screen.availHeight} />
                                <MenuItem url="/Master/ManageContact/1" name="Manage Contact" />
                            </MenuItem>
                            <MenuItem iconClass="nav-icon fas fa-user-friends" name="Group" >
                                <MenuItem url="/Master/AddGroup" name="Add Group" isPopUp popUpHeight={window.screen.availHeight}  />
                                <MenuItem url="/Master/ManageGroup" name="Manage Group" />
                            </MenuItem>
                            <MenuItem iconClass="nav-icon fas fa-clipboard" name="Template" >
                                <MenuItem url="/Master/AddTemplate" name="Add Template" isPopUp popUpHeight={window.screen.availHeight} />
                                <MenuItem url="/Master/ManageTemplate/1" name="Manage Template" />
                            </MenuItem>
                        </MenuItem>
                    </ul>
                </nav>
            </div>
        </aside>

    );
}

export default MenuBar;