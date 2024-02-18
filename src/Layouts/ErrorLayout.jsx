import { Helmet, HelmetProvider } from "react-helmet-async";

function ErrorLayout() {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel='stylesheet' href='https://console.cloud.robeeta.com/msg4/WebTheme20/css/adminlte.min.css' />
            </Helmet>
            <div className="d-flex align-items-center justify-content-center" style={{ height: "100avh" }}>
                <div className="text-center">
                    <h1>404 Page Doesn't Exist</h1>
                </div>
            </div>
        </HelmetProvider >

    );
}

export default ErrorLayout;