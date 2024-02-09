import { Container } from "../Components/BootstrapGridSystem";
import DetailBox from "../Components/DetailBox";
import PageHeader from "../Components/PageHeader";
function Dashboard() {
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    .col-lg-3 .small-box h3, .col-md-3 .small-box h3 {\n        font-size: 1.6rem;\n        white-space: pre-wrap;\n    }\n"
                }}
            />
            <PageHeader pageName="Dashboard" parentPagesArray={[{ name: "Dashboard", url: "/dashboard" }, { name: "Test", url: "test" }]} />
            <section >
                <Container>
                    <DetailBox Name="Login Date &amp; Time" Detail="04-Feb-2024 11:57 AM" ColorClass="bg-warning" IconClass="fas fa-sign-in-alt" />
                    <DetailBox Name="IP" Detail="172.24.5.2" ColorClass="bg-success" IconClass="fas fa-laptop" />
                </Container>
                <PageHeader pageName="SMS" />
                <Container>
                    <DetailBox Name="Balance" Detail="2.000" ColorClass="bg-info" IconClass="fas fa-chart-pie" />
                    <DetailBox Name="User Rate" Detail="0.1500" ColorClass="bg-info" IconClass="fas fa-rupee-sign" />
                </Container>
                <Container>
                    <DetailBox Name="SMS Count" Detail="13" ColorClass="bg-info" IconClass="fas fa-broadcast-tower" />
                </Container>
            </section>
        </>
    );
}

export default Dashboard;