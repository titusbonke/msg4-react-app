// import "./MainLayout.css";
function MainLayout({ Children }) {
    var topcontent = `
    
    
    <link rel='icon' href= 'https://console.cloud.robeeta.com/msg4/Content/Images/favicon.ico' >
    <link rel ='stylesheet' href = 'https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/daterangepicker/daterangepicker.css'>
    <link rel = 'stylesheet' href = 'https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/icheck-bootstrap/icheck-bootstrap.min.css'>
    <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css'> 
    <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/select2/css/select2.min.css'>
    <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css'>
    <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/fontawesome-free/css/all.min.css'>
    <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/progress-bar/progress-bar.css'>
    <link rel='stylesheet' href='https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'>
    <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/css/adminlte.min.css'>
    <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700' rel='stylesheet'>
    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/jquery/jquery.min.js'></script>
    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/moment/moment.min.js'></script>
    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/daterangepicker/daterangepicker.js'></script>
    <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/datatables-responsive/css/responsive.bootstrap4.min.css'>
    <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/pre-loader/preloader-1.css'>
    <style>

        .search_icon_btn {
            height: 25px;
            background-color: #5aa1df;
            border: none;
            width: 15%;
            color: #fff;
            border-radius: 0px 3px 3px 0px;
            cursor: pointer;
            float: left;
        }

        .badge badge-info {
            box-sizing: border-box;
        }
    </style>
    <style>
        .dropbtn {
            background-color: #04AA6D;
            color: white;
            padding: 16px;
            font-size: 16px;
            border: none;
            cursor: pointer;
        }

            .dropbtn:hover, .dropbtn:focus {
                background-color: #3e8e41;
            }

        .searchdropdown {
            position: relative;
            display: inline-block;
        }

        .searchdropdown-content {
            display: none;
            position: absolute;
            background-color: #f6f6f6;
            min-width: 245px;
            margin-top: 1px;
            overflow: auto;
            border: 1px solid #ddd;
            z-index: 1;
        }

            .searchdropdown-content a {
                color: black;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
            }

        .searchdropdown a:hover {
            background-color: #ddd;
        }

        .searchdropdown-content2 {
            display: none;
            padding: 12px 16px;
            position: absolute;
            background-color: #f6f6f6;
            min-width: 245px;
            margin-top: 1px;
            overflow: auto;
            border: 1px solid #ddd;
            z-index: 1;
        }

        .show {
            display: block;
        }
    </style>
    
<body class="hold-transition sidebar-mini sidebar-collapse layout-fixed">
    <div class="wrapper">
            <nav class='main-header navbar navbar-expand navbar-white navbar-light'>
                <ul class='navbar-nav'>
                    <li class='nav-item'>
                        <a class='nav-link' data-widget='pushmenu' href='#' role='button'>
                            <i class='fas fa-bars'></i>
                        </a>
                    </li>
                    <li class='nav-item'>
                        <a class='nav-link' href='https://console.cloud.robeeta.com/?Token=@NyxH6e3cAA0p_373eZ6KfLndP3iobBbqDgw14U6v2vhALRmllNk8zLP7oTzF0R1af7q6tjVQG$lgbgfS5dj3adkPFprv$FazfKQMGHCtqPQ=@' role='button'>
                            <i class='fas fa-home'></i>
                        </a>
                    </li>
                </ul>
                

                <div class="searchdropdown">
                    <div class="input-group-append">
                        <input type="text" id="myInput" placeholder="Search here" name="search" class="form-control search-control" onclick="myFunction()" onkeyup="filterFunction()">

                        <button type="submit" class="btn btn-default" onclick="searchFunction()">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>

                    <div id="myDropdown" class="searchdropdown-content">
                        <a href="https://console.cloud.robeeta.com/msg4?Token=@DYBTXZWjpgRPtmLeO$0Qi6mxT05BV73ewDrNh0YGv6Yvex$v$fvvRatD7SNJsJ_kpviJzjTjGSyl7mFAJA3nXaJ1BjzconccYzLPD8oSfCc=@">Msg4</a>
                        <a href="https://console.cloud.robeeta.com/vm?Token=@LxHUOLglKQ37W0fB6hp3rx$VjJ_MQ5PvLIUyFIryErbhHNHVFlOEU0xIBF4Muyc7pXECM4JPun4hyW0KWPbtCpcVsBtOlyHIwPmQ_VH7HQw=@">Vm</a>
                        <a href="https://console.cloud.robeeta.com/veri5?Token=@noIl2G9yPxSXfIUZuGV8uB$k$SDKFSfLhj_JRRC1AQrz8kbwvGdu0WHtybbnkT6Pf$mLGBCh3neAxiugm21_696cCUeOpcP5aWgnWmmHvMo=@">Veri5</a>
                    </div>
                    <div id="myDropdown2" class="searchdropdown-content2">
                        <a> No Results Found </a>

                    </div>
                </div>

                <ul class='navbar-nav ml-auto'>
                    <li class='nav-item dropdown user user-menu' style='padding-top:6px;'>
                        <a href='#' class='text-gray-dark' data-toggle='dropdown' aria-expanded='true'>
                            <img src='https://drive.sathyainfo.com/webtheme20/v1/img/user.png' class='user-image' alt='User Image'>&nbsp;&nbsp;
                            <span style="color:black">Titus</span>&nbsp;&nbsp;
                        </a>
                        <ul class='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
                            <li class='user-header'>
                                <img src='https://drive.sathyainfo.com/webtheme20/v1/img/user.png' class='img-circle' alt='User Image'><p>Titus</p>
                            </li>
                            <li class='user-footer'>
                                <a href='/msg4/Master/ManageApi' class='dropdown-item text-center'>
                                    Api Keys
                                </a>

                            </li>
                            <li class='user-footer'>
                                <a href='/User/SignOut' class='dropdown-item text-center'>
                                    <i class='fas fa-sign-out-alt'></i> Sign Out
                                </a>

                            </li>
                        </ul>
                    </li>
                    <li class='nav-item dropdown'>
                        <a href='#' class='nav-link' data-toggle='dropdown' aria-expanded='true' title="Release Notes"><i class='fas fa-question-circle'></i></a>
                        <ul class='dropdown-menu dropdown-menu-sm-left dropdown-menu-right menulist'>
                            <li class='user-footer'>
                                
                                <a href="https://help.cloud.robeeta.com/portal/books/robeetacloud-releasenotes" class="dropdown-item text-center" target="_blank">
                                    <i class='fas fa-sticky-note'></i> &nbsp;&nbsp;Release Notes
                                </a>
                                <a target="_blank" href="/msg4/Content/Document/Msg4UserManual.pdf" class="dropdown-item text-center"><i class="fas fa-file-pdf" title="" style="font-size:16px;"></i> User Manual</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
<aside class='main-sidebar sidebar-dark-primary elevation-4'>
<a href='/' class='brand-link'>
<img src='/Content/Images/logo.png' alt='Logo' class='brand-image img-circle elevation-3' style='opacity:.8'>
<span class='brand-text font-weight-light'><strong>Msg4</strong></span></a> 
<div class='sidebar'>
<nav class='mt-2'>
<ul class='nav nav-pills nav-sidebar flex-column' data-widget='treeview' role='menu' data-accordion='false'>
<!--menu-guid:85d23d74b5484e369a02de3d629f68ee_menu-path:000-100-->

<li class='nav-item'>
<a href='/Home/Dashboard?_wtmid=85d23d74b5484e369a02de3d629f68ee' class='nav-link'>
<i class='nav-icon fas fa-tachometer-alt'></i>
<p>Dashboard</p></a>
</li>
<!--menu-guid:_menu-path:000-101-->

<li class='nav-item has-treeview'>
<a href='#' class='nav-link'>
<i class='nav-icon fas fa-sms'></i>
<p>SMS<i class='right fas fa-angle-left'></i></p></a>
<ul class='nav nav-treeview'>
<!--menu-guid:_menu-path:000-101-100-->

<li class='nav-item has-treeview'>
<a href='#' class='nav-link'>
<i class='nav-icon fas fa-sms'></i>
<p>Send SMS<i class='right fas fa-angle-left'></i></p></a>
<ul class='nav nav-treeview'>
<!--menu-guid:e6f7d655bfe2496aae9ba860a97e870e_menu-path:000-101-100-100-->

<li class='nav-item'>
<a class='nav-link' href='#' onclick="window.open('/msg4/SMS/SendSMS?_wtmid=e6f7d655bfe2496aae9ba860a97e870e','_blank','height=900,width=500')">
<i class='nav-icon fas fa-star'></i>
<p>Send SMS</p></a>
</li>
<!--menu-guid:dc57cd8c42f04c8395bf5d1801a35e00_menu-path:000-101-100-101-->

<li class='nav-item'>
<a class='nav-link' href='#' onclick="window.open('/msg4/SMS/SendBulkSMS?_wtmid=dc57cd8c42f04c8395bf5d1801a35e00','_blank','height=875,width=500')">
<i class='nav-icon fas fa-star'></i>
<p>Send Bulk SMS</p></a>
</li>
<!--menu-guid:9379ab2f0dd94a9383b263af9af042e4_menu-path:000-101-100-102-->

<li class='nav-item'>
<a class='nav-link' href='#' onclick="window.open('/msg4/SMS/SendScheduleBulkSMS?_wtmid=9379ab2f0dd94a9383b263af9af042e4','_blank','height=750,width=500')">
<i class='nav-icon fas fa-star'></i>
<p>Send Schedule Bulk SMS</p></a>
</li>
</ul>
</li>
<!--menu-guid:_menu-path:000-101-101-->

<li class='nav-item has-treeview'>
<a href='#' class='nav-link'>
<i class='nav-icon fas fa-clipboard-list'></i>
<p>Reports<i class='right fas fa-angle-left'></i></p></a>
<ul class='nav nav-treeview'>
<!--menu-guid:379d12c58f98413c8bfbeaa5a40e8450_menu-path:000-101-101-100-->

<li class='nav-item'>
<a href='/msg4/SMS/SentItemsReport/1?_wtmid=379d12c58f98413c8bfbeaa5a40e8450' class='nav-link'>
<i class='nav-icon fas fa-star'></i>
<p>Sent Items Report</p></a>
</li>
<!--menu-guid:2fa21853f5f54b2e8f57f5d44304fad2_menu-path:000-101-101-101-->

<li class='nav-item'>
<a href='/msg4/SMS/DeliveryReport?_wtmid=2fa21853f5f54b2e8f57f5d44304fad2' class='nav-link'>
<i class='nav-icon fas fa-star'></i>
<p>Delivery Report</p></a>
</li>
<!--menu-guid:c038eed6f62b4588a7820ed2e4957ad3_menu-path:000-101-101-102-->

<li class='nav-item'>
<a href='/msg4/SMS/DeliverySummaryReport?_wtmid=c038eed6f62b4588a7820ed2e4957ad3' class='nav-link'>
<i class='nav-icon fas fa-star'></i>
<p>Delivery Summary Report</p></a>
</li>
</ul>
</li>
<!--menu-guid:_menu-path:000-101-102-->

<li class='nav-item has-treeview'>
<a href='#' class='nav-link'>
<i class='nav-icon fas fa-adjust'></i>
<p>Process Status<i class='right fas fa-angle-left'></i></p></a>
<ul class='nav nav-treeview'>
<!--menu-guid:0c85e9ebf59c4d47bb3792aebb37fa01_menu-path:000-101-102-100-->

<li class='nav-item'>
<a href='/msg4/SMS/BulkSMSprocess/1?_wtmid=0c85e9ebf59c4d47bb3792aebb37fa01' class='nav-link'>
<i class='nav-icon fas fa-star'></i>
<p>Bulk SMS Process </p></a>
</li>
<!--menu-guid:1da2153f7ff94293982d23f480f0b057_menu-path:000-101-102-101-->

<li class='nav-item'>
<a href='/msg4/SMS/ManageScheduleBulkSMS/1?_wtmid=1da2153f7ff94293982d23f480f0b057' class='nav-link'>
<i class='nav-icon fas fa-star'></i>
<p>Schedule Bulk SMS</p></a>
</li>
<!--menu-guid:45405fd6fdff49f78286ee00e0bf4f12_menu-path:000-101-102-102-->

<li class='nav-item'>
<a href='/msg4/SMS/GroupSMSProcess/1?_wtmid=45405fd6fdff49f78286ee00e0bf4f12' class='nav-link'>
<i class='nav-icon fas fa-star'></i>
<p>Group SMS Process </p></a>
</li>
</ul>
</li>
<!--menu-guid:_menu-path:000-101-103-->

<li class='nav-item has-treeview'>
<a href='#' class='nav-link'>
<i class='nav-icon far fa-address-book'></i>
<p>DLT Registration<i class='right fas fa-angle-left'></i></p></a>
<ul class='nav nav-treeview'>
<!--menu-guid:91e6c86a3a9543dfac94d69d0baf65a0_menu-path:000-101-103-100-->

<li class='nav-item'>
<a class='nav-link' href='#' onclick="window.open('/msg4/SMS/AddDltRegistration?_wtmid=91e6c86a3a9543dfac94d69d0baf65a0','_blank','height=850,width=450')">
<i class='nav-icon fas fa-star'></i>
<p>Add DLT  Registration</p></a>
</li>
<!--menu-guid:a1f48e11e77f40e4810f9590b5225c16_menu-path:000-101-103-101-->

<li class='nav-item'>
<a href='/msg4/SMS/ManageDltRegistration?_wtmid=a1f48e11e77f40e4810f9590b5225c16' class='nav-link'>
<i class='nav-icon fas fa-star'></i>
<p>Manage DLT Registration</p></a>
</li>
</ul>
</li>
<!--menu-guid:_menu-path:000-101-104-->

<li class='nav-item has-treeview'>
<a href='#' class='nav-link'>
<i class='nav-icon fas fa-clipboard'></i>
<p>Sender ID<i class='right fas fa-angle-left'></i></p></a>
<ul class='nav nav-treeview'>
<!--menu-guid:f246031fbf384b9ca65943783903a2f6_menu-path:000-101-104-100-->

<li class='nav-item'>
<a class='nav-link' href='#' onclick="window.open('/msg4/SMS/AddSenderId?_wtmid=f246031fbf384b9ca65943783903a2f6','_blank','height=850,width=450')">
<i class='nav-icon fas fa-star'></i>
<p>Add Sender ID</p></a>
</li>
<!--menu-guid:89e1c40a13e745a583514621a546942f_menu-path:000-101-104-101-->

<li class='nav-item'>
<a href='/msg4/SMS/ManageSenderId?_wtmid=89e1c40a13e745a583514621a546942f' class='nav-link'>
<i class='nav-icon fas fa-star'></i>
<p>Manage Sender ID</p></a>
</li>
</ul>
</li>
</ul>
</li>
<!--menu-guid:_menu-path:000-102-->

<li class='nav-item has-treeview'>
<a href='#' class='nav-link'>
<i class='nav-icon far fa-comment-dots'></i>
<p>Whats App<i class='right fas fa-angle-left'></i></p></a>
<ul class='nav nav-treeview'>
<!--menu-guid:ce098d95a5bb409f8e3991f9f4cd48d2_menu-path:000-102-100-->

<li class='nav-item'>
<a class='nav-link' href='#' onclick="window.open('/msg4/WhatsApp/SendBulkWhatsApp?_wtmid=ce098d95a5bb409f8e3991f9f4cd48d2','_blank','height=930,width=500')">
<i class='nav-icon fas fa-star'></i>
<p>Send Bulk WhatsApp</p></a>
</li>
<!--menu-guid:c780ad8b5daf4a2287f6b862bd227ab2_menu-path:000-102-101-->

<li class='nav-item'>
<a href='/msg4/WhatsApp/BulkWhatsAppStatus?_wtmid=c780ad8b5daf4a2287f6b862bd227ab2' class='nav-link'>
<i class='nav-icon fas fa-star'></i>
<p>Bulk WhatsApp Status</p></a>
</li>
<!--menu-guid:4337892f883944f9a2ad7f986d49b89c_menu-path:000-102-102-->

<li class='nav-item'>
<a href='/msg4/WhatsApp/WhatsAppMessageList?_wtmid=4337892f883944f9a2ad7f986d49b89c' class='nav-link'>
<i class='nav-icon fas fa-star'></i>
<p>Message List</p></a>
</li>
</ul>
</li>
<!--menu-guid:_menu-path:000-103-->

<li class='nav-item has-treeview'>
<a href='#' class='nav-link'>
<i class='nav-icon fas fa-clipboard'></i>
<p>Reports<i class='right fas fa-angle-left'></i></p></a>
<ul class='nav nav-treeview'>
<!--menu-guid:301be23884b04fbd85882c8dba0f59a5_menu-path:000-103-100-->

<li class='nav-item'>
<a href='/msg4/SMS/ManageTransaction?_wtmid=301be23884b04fbd85882c8dba0f59a5' class='nav-link'>
<i class='nav-icon fas fa-star'></i>
<p>Manage Transaction</p></a>
</li>
</ul>
</li>
<!--menu-guid:_menu-path:000-104-->

<li class='nav-item has-treeview'>
<a href='#' class='nav-link'>
<i class='nav-icon fa fa-address-book'></i>
<p>Master<i class='right fas fa-angle-left'></i></p></a>
<ul class='nav nav-treeview'>
<!--menu-guid:_menu-path:000-104-100-->

<li class='nav-item has-treeview'>
<a href='#' class='nav-link'>
<i class='nav-icon far fa-address-book'></i>
<p>Contact<i class='right fas fa-angle-left'></i></p></a>
<ul class='nav nav-treeview'>
<!--menu-guid:03a19b41b03f446bb0e98ddc6fdc35c4_menu-path:000-104-100-100-->

<li class='nav-item'>
<a class='nav-link' href='#' onclick="window.open('/msg4/Master/AddContact?_wtmid=03a19b41b03f446bb0e98ddc6fdc35c4','_blank','height=585,width=450')">
<i class='nav-icon fas fa-star'></i>
<p>Add Contact</p></a>
</li>
<!--menu-guid:74652cfb23e943f385cd9f39b77e6815_menu-path:000-104-100-101-->

<li class='nav-item'>
<a href='/msg4/Master/ManageContact/1?_wtmid=74652cfb23e943f385cd9f39b77e6815' class='nav-link'>
<i class='nav-icon fas fa-star'></i>
<p>Manage Contact</p></a>
</li>
</ul>
</li>
<!--menu-guid:_menu-path:000-104-101-->

<li class='nav-item has-treeview'>
<a href='#' class='nav-link'>
<i class='nav-icon fas fa-user-friends'></i>
<p>Group<i class='right fas fa-angle-left'></i></p></a>
<ul class='nav nav-treeview'>
<!--menu-guid:6a665de535ad465f8170866e6bc554d7_menu-path:000-104-101-100-->

<li class='nav-item'>
<a class='nav-link' href='#' onclick="window.open('/msg4/Master/AddGroup?_wtmid=6a665de535ad465f8170866e6bc554d7','_blank','height=400,width=450')">
<i class='nav-icon fas fa-star'></i>
<p>Add Group</p></a>
</li>
<!--menu-guid:dfb0bd77008b41c5bdd0f9d046930a83_menu-path:000-104-101-101-->

<li class='nav-item'>
<a href='/msg4/Master/ManageGroup/1?_wtmid=dfb0bd77008b41c5bdd0f9d046930a83' class='nav-link'>
<i class='nav-icon fas fa-star'></i>
<p>Manage Group</p></a>
</li>
</ul>
</li>
<!--menu-guid:_menu-path:000-104-102-->

<li class='nav-item has-treeview'>
<a href='#' class='nav-link'>
<i class='nav-icon fas fa-clipboard'></i>
<p>Template<i class='right fas fa-angle-left'></i></p></a>
<ul class='nav nav-treeview'>
<!--menu-guid:8e0bf66c925646658e2f6627028087e3_menu-path:000-104-102-100-->

<li class='nav-item'>
<a class='nav-link' href='#' onclick="window.open('/msg4/Master/AddTemplate?_wtmid=8e0bf66c925646658e2f6627028087e3','_blank','height=610,width=450')">
<i class='nav-icon fas fa-star'></i>
<p>Add Template</p></a>
</li>
<!--menu-guid:e7bca992f92c4371b5437daab743f193_menu-path:000-104-102-101-->

<li class='nav-item'>
<a href='/msg4/Master/ManageTemplate/1?_wtmid=e7bca992f92c4371b5437daab743f193' class='nav-link'>
<i class='nav-icon fas fa-star'></i>
<p>Manage Template</p></a>
</li>
</ul>
</li>
</ul>
</li>

</ul>
</nav>
</div>
</aside>

        <div class="content-wrapper">
    `;
    var bottomcontent = ` 
    <style>
    .col-lg-3 .small-box h3, .col-md-3 .small-box h3 {
        font-size: 1.6rem;
        white-space: pre-wrap;
    }
</style>

<section style="height:65px" class="content-header">
    <div class="container-fluid">
        <div class="row mb-1">
            <div class="col-sm-6">
                <h3>Dashboard</h3>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class='breadcrumb-item '><a href='/Home/Dashboard'>Home</a></li><li class='breadcrumb-item active'>Dashboard</li>
                </ol>
            </div>
        </div>
    </div>
</section>



<section class="content">
    <div class="container-fluid">
        <div class="row">
            <div class='col-md-3 col-sm-6 col-12'>
<div class='small-box bg-warning'>
<div class='inner'><h3>03-Feb-2024 01:10 PM</h3>
<p>Login Date & Time</p></div>
<div class='icon'>
<i class='fas fa-sign-in-alt' title='' style='font-size:24px;'></i></div>

</a>
</div>
</div>

            <div class='col-md-3 col-sm-6 col-12'>
<div class='small-box bg-success'>
<div class='inner'><h3>172.24.5.2</h3>
<p>IP</p></div>
<div class='icon'>
<i class='fas fa-laptop' title='' style='font-size:32px;'></i></div>

</a>
</div>
</div>

        </div>
    </div>
    <section style="height:65px" class="content-header">
    <div class="container-fluid">
        <div class="row mb-1">
            <div class="col-sm-6">
                <h3>SMS</h3>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    
                </ol>
            </div>
        </div>
    </div>
</section>

    <div class="container-fluid">
        <div class="row">
            <div class='col-md-3 col-sm-6 col-12'>
<div class='small-box bg-info'>
<div class='inner'><h3>2.000</h3>
<p>Balance</p></div>
<div class='icon'>
<i class='fas fa-chart-pie' title='' style='font-size:32px;'></i></div>

</a>
</div>
</div>

            <div class='col-md-3 col-sm-6 col-12'>
<div class='small-box bg-info'>
<div class='inner'><h3>0.1500</h3>
<p>User Rate</p></div>
<div class='icon'>
<i class='fas fa-rupee-sign' title='' style='font-size:32px;'></i></div>

</a>
</div>
</div>

        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class='col-md-3 col-sm-6 col-12'>
<div class='small-box bg-info'>
<div class='inner'><h3>13</h3>
<p>SMS Count</p></div>
<div class='icon'>
<i class='fas fa-broadcast-tower title='' style='font-size:32px;'></i></div>

</a>
</div>
</div>

        </div>
    </div>
</section>




<!--<div class="modal" tabindex="-1" role="dialog">
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
            <div class="modal-footer">-->
                
                <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>-->



        </div>
        <footer class='main-footer'>
 <strong>Copyright &copy; 2021-2024  <a href='https://sathyainfo.com/' target='_blank'>SATHYA TECHNOSOFT</a></strong>
All rights reserved.
<div class='float-right d-none d-sm-inline-block'>
<b>Version </b>24.1.1
</div></footer>



    </div>
    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/jquery-ui/jquery-ui.min.js'></script> 
    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/bootstrap/js/bootstrap.bundle.min.js'></script>
    <script src ='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/select2/js/select2.full.min.js'></script>
    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/progress-bar/progress-bar.js'></script>
    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/inputmask/min/jquery.inputmask.bundle.min.js'></script>
    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js'></script>
    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/js/adminlte.js'></script>
    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/datatables/jquery.dataTables.min.js'></script>
    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/datatables-responsive/js/dataTables.responsive.min.js'></script>
    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/datatables-responsive/js/responsive.bootstrap4.min.js'></script><script> 
 $(function () {  $('.select2').select2() 
$('.select2bs4').select2({  theme: 'bootstrap4' })
$('#datemask').inputmask('dd/mm/yyyy', { 'placeholder': 'dd/mm/yyyy' })
$('#datemask2').inputmask('dd/mm/yyyy', { 'placeholder': 'dd/mm/yyyy' })
 $('#timepicker').datetimepicker({format: 'LT'}) })</script>
 <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/pre-loader/preloader-1.js'></script>
 <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/chart/chart.js'></script>
 <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/chart/chart.min.js'></script>


<script>
        /* When the user clicks on the button,
        toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        function filterFunction() {
            var input, filter, ul, li, a, i;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            div = document.getElementById("myDropdown");
            a = div.getElementsByTagName("a");
            for (i = 0; i < a.length; i++) {
                txtValue = a[i].textContent || a[i].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    a[i].style.display = "";
                } else {
                    a[i].style.display = "none";
                }
            }
        }

        function searchFunction() {
            var input;
            input = document.getElementById("myInput");
            if (input.value == "msg4") {
                location.href = "https://console.cloud.robeeta.com/msg4?Token=@UjL1SzVmJMEdLEbYECcISsZU8VL59g1VHSWTlNqK09hRa8hhRcMhWvaNXFs5mms6wZnG8B$e9wpqZy6b$ivThuRpukN2JROO40kutabA$fM=@";
            }
            else if (input.value == "vm") {
                location.href = "https://console.cloud.robeeta.com/vm?Token=@6LQKQjldjjggILkMC4itU2hzk2otH6FE4vhwhI1$ghqqzwgRuU_MuuYeugC$N8APm979G1BnfbruiQYsGI8cIka4U3hhhHDeO0vBl3OgUtg=@";
            }
            else if (input.value == "veri5") {
                location.href = "https://console.cloud.robeeta.com/veri5?Token=@VchTP_XX0E82l2PhA6_HUtoBhyiceVzBU3P$7B4hda9jcfSvKXmyEdJIT7DinEqqsNV$PegjaeZdzw7xAc0THFK2WX3GaCaFDKjEEWZV28E=@";
            }
            else {
                document.getElementById("myDropdown2").classList.toggle("show");
            }

            }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.search-control')) {

            var dropdowns = document.getElementsByClassName("searchdropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
         if (!event.target.matches('.btn-default')) {

            var dropdown2 = document.getElementsByClassName("searchdropdown-content2");
            var i;
             for (i = 0; i < dropdown2.length; i++) {
                 var openDropdown2 = dropdown2[i];
                 if (openDropdown2.classList.contains('show')) {
                     openDropdown2.classList.remove('show');
                }
            }
        }
    }

</script>

</body>

`;

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: topcontent }} />

            {Children}
            <div dangerouslySetInnerHTML={{ __html: bottomcontent }} />
        </div>
    );
}

export default MainLayout;