function Dashboard() {
    return (
        <>
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
        </>
    );
}

export default Dashboard;