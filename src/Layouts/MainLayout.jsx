import './fontawesome.css';
import './MainLayout.css';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from '../Includes/Header';
import MenuBar from '../Includes/MenuBar';
import Footer from '../Includes/Footer';
import InputContextProvider from '../Components/InputContextProvider';
import LoadingProvider from '../Components/LoadingContextProvider';
import { AlertBoxContainer } from '../Components/AlertBox';




function MainLayout({ children }) {



    return (
        <HelmetProvider>

            <div className="wrapper">
                <Helmet>
                    <link rel='icon' href='https://console.cloud.robeeta.com/msg4/Content/Images/favicon.ico' />
                    <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/css/adminlte.min.css' />
                    <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/daterangepicker/daterangepicker.css' />
                    <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/icheck-bootstrap/icheck-bootstrap.min.css' />
                    <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css' />
                    <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/select2/css/select2.min.css' />
                    <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css' />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                    <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/progress-bar/progress-bar.css' />
                    <link rel='stylesheet' href='https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' />
                    <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700' rel='stylesheet' />
                    <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/datatables-responsive/css/responsive.bootstrap4.min.css' />
                    {/* <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/pre-loader/preloader-1.css' /> */}
                </Helmet>
                <Helmet>
                    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/jquery/jquery.min.js' defer  ></script>
                    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/jquery-ui/jquery-ui.min.js' defer ></script>
                    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/inputmask/min/jquery.inputmask.bundle.min.js' defer></script>
                    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/datatables/jquery.dataTables.min.js'></script>

                    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/js/adminlte.js'></script>
                    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/moment/moment.min.js'></script>
                    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/daterangepicker/daterangepicker.js'></script>
                    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/bootstrap/js/bootstrap.bundle.min.js' defer></script>
                    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/select2/js/select2.full.min.js'></script>
                    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js' defer></script>
                    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/datatables-responsive/js/dataTables.responsive.min.js' defer></script>
                    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/datatables-responsive/js/responsive.bootstrap4.min.js' defer></script>

                    {/* <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/plugins/pre-loader/preloader-1.js' defer></script> */}
                    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/chart/chart.js'></script>
                    <script src='https://console.cloud.robeeta.com/msg4/WebTheme20/chart/chart.min.js'></script>
                </Helmet>
                <Header />
                <MenuBar />
                <InputContextProvider>
                <LoadingProvider>
                <div className="content-wrapper">
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
                </LoadingProvider>
                </InputContextProvider>
                <Footer />
                <AlertBoxContainer />
            </div>
        </HelmetProvider>


    );
}

export default MainLayout;