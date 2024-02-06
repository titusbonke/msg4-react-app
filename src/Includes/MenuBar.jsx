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
                        <MenuItem name="Dashboard" url="/Dashboard?_wtmid=c39c61cdfc0b4bd19014d815232229c6" iconClass="nav-icon fas fa-tachometer-alt" />
                        <MenuItem name="test" url="/test?_wtmid=c39c61cdfc0b4bd19014d815232229c6" />
                        <MenuItem iconClass="nav-icon fas fa-sms" name="SMS" >
                            <MenuItem iconClass="nav-icon fas fa-sms" name="Send SMS" >
                                <MenuItem url="/SMS/SendSMS?_wtmid=5a47779ef319472995753ad9617e044e"  name="Send SMS" isPopUp popUpHeight={window.screen.availHeight} />
                                <MenuItem url="/SMS/SendBulkSMS?_wtmid=dd7903b85c2b4b329856e2fec665855c" isPopUp name="Send Bulk SMS" />
                                <MenuItem url="/SMS/SendScheduleBulkSMS?_wtmid=5631792754fb4059aca0936fb695e174" isPopUp name="Send Schedule Bulk SMS" />
                            </MenuItem>
                            <MenuItem iconClass="nav-icon fas fa-clipboard-list" name="Reports" >
                                <MenuItem url="/SMS/SentItemsReport/1?_wtmid=ede742ee0c28462c832ff0340595ec89" name="Sent Items Report" />
                                <MenuItem url="/SMS/DeliveryReport?_wtmid=a7af253b32fb4f7f8da1ebdfe1254cc7" name="Delivery Report" />
                                <MenuItem url="/SMS/DeliverySummaryReport?_wtmid=302937778bdd407f8007a49036aef825" name="Delivery Summary Report" />
                            </MenuItem>
                            <MenuItem iconClass="nav-icon fas fa-adjust" name="Process Status" >
                                <MenuItem url="/SMS/BulkSMSprocess/1?_wtmid=4e380ed55abc4e7c8b2866373c8bc219" name="Bulk SMS Process" />
                                <MenuItem url="/SMS/ManageScheduleBulkSMS/1?_wtmid=7e3a912efe3348b38e63bb37b2b81278" name="Schedule Bulk SMS" />
                                <MenuItem url="/SMS/GroupSMSProcess/1?_wtmid=df31fe4fea484f2ca1d05ef8fce55b26" name="Group SMS Process" />
                            </MenuItem>
                            <MenuItem iconClass="nav-icon far fa-address-book" name="DLT Registration" >
                                <MenuItem url="/SMS/AddDltRegistration?_wtmid=ee7d41f0a7a84e5392080a21f8ee4b98" name="Add DLT Registration" />
                                <MenuItem url="/SMS/ManageDltRegistration?_wtmid=4315e291503a423ab685bff02a93bbc7" name="Manage DLT Registration" />
                            </MenuItem>
                            <MenuItem iconClass="nav-icon fas fa-clipboard" name="Sender ID" >
                                <MenuItem url="/SMS/AddSenderId?_wtmid=ab2ff3f80e1a49a594d4ae6996577595" name="Add Sender ID" />
                                <MenuItem url="/SMS/ManageSenderId?_wtmid=3821087295db463dad0d4e647615fc82" name="Manage Sender ID" />
                            </MenuItem>
                        </MenuItem>
                        <MenuItem iconClass="nav-icon far fa-comment-dots" name="Whats App" >
                            <MenuItem url="/WhatsApp/SendBulkWhatsApp?_wtmid=0704c0062d9f4f2791d19a137052ab66" name="Send Bulk WhatsApp" />
                            <MenuItem url="/WhatsApp/BulkWhatsAppStatus?_wtmid=e3f2fa6f500c4118961759b479d9e1c9" name="Bulk WhatsApp Status" />
                            <MenuItem url="/WhatsApp/WhatsAppMessageList?_wtmid=fc5b821be2934566b72447cd3ca83d8a" name="Message List" />
                        </MenuItem>
                        <MenuItem iconClass="nav-icon fas fa-clipboard" name="Reports" >
                            <MenuItem name="Manage Transaction" url="/SMS/ManageTransaction?_wtmid=47dda2537b2446c5975f327045c0a008" />
                        </MenuItem>
                        <MenuItem iconClass="nav-icon fa fa-address-book" name="Master" >
                            <MenuItem iconClass="nav-icon far fa-address-book" name="Contact" >
                                <MenuItem url="/Master/AddContact?_wtmid=ecbb13c2bda048ac98f9f94ec4501a7e" name="Add Contact" />
                                <MenuItem url="/Master/ManageContact/1?_wtmid=76eb85e3e4504a76b256d4237b4ba94f" name="Manage Contact" />
                            </MenuItem>
                            <MenuItem iconClass="nav-icon fas fa-user-friends" name="Group" >
                                <MenuItem url="/Master/AddGroup?_wtmid=582e72adcd4744b290641971ed2f8091" name="Add Group" />
                                <MenuItem url="/Master/ManageGroup/1?_wtmid=1318e224b99949aab3ee8ecb71211996" name="Manage Group" />
                            </MenuItem>
                            <MenuItem iconClass="nav-icon fas fa-clipboard" name="Template" >
                                <MenuItem url="/Master/AddTemplate?_wtmid=e57e76e077424a27b19d3baed6f5a798" name="Add Template" />
                                <MenuItem url="/Master/ManageTemplate/1?_wtmid=9fb3b719457a4168879dc1f6aac971c1" name="Manage Template" />
                            </MenuItem>
                        </MenuItem>
                    </ul>
                </nav>
            </div>
        </aside>

    );
}

export default MenuBar;