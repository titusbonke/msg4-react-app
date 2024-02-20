import {  useEffect, useState } from "react";
import { Container } from "../Components/BootstrapGridSystem";
import DetailBox from "../Components/DetailBox";
import PageHeader from "../Components/PageHeader";
import { msg4apicall } from "../CommonFunctions";
import { ShowAlertBox } from "../Components/AlertBox";
import useLoading from "../Components/useLoading";
import moment from "moment/moment";

function Dashboard() {
    var [setLoadingCount] = useLoading()
    var [data,setData]=useState({});
    // eslint-disable-next-line
    useEffect(a=>{
        msg4apicall({
            ReadUserDashboardRqst: {
                LoginToken: '185a1e6516dd4f8a80a4ebcc7748212ba5ded331ed90406c94d520ec51e5ad76',
                UserGuid: 'c5cf3fe0-1bcb-4724-995b-fbe71d1c904e'
            }
        }, setLoadingCount).then(data => {
            if(data.Response!=="OK") return ShowAlertBox(data.Response,"danger"); 
            setData(data);           
        })

    },[])
    const formattedRupees = a=> a?.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).replace(/^(-)?(₹)/, '$1$2 ');;
    
    return (
        <>
            <PageHeader pageName="Dashboard" parentPagesArray={[{ name: "Dashboard", url: "/dashboard" }, { name: "Test", url: "test" }]} />
            <section >
                <Container>
                    <DetailBox Name="Login Date &amp; Time" Detail={moment().format('DD-MMM-YYYY hh:mm A')} ColorClass="bg-warning" IconClass="fas fa-sign-in-alt" />
                    <DetailBox Name="IP" Detail="172.24.5.2" ColorClass="bg-success" IconClass="fas fa-laptop" />
                </Container>
                <PageHeader pageName="SMS" />
                <Container>
                    <DetailBox Name="Balance" Detail={formattedRupees(data?.UserBalance?.Balance)} ColorClass="bg-info" IconClass="fas fa-chart-pie" />
                    <DetailBox Name="User Rate" Detail={data?.UserRate?.SmsRate} ColorClass="bg-info" IconClass="fas fa-rupee-sign" />
                </Container>
                <Container>
                    <DetailBox Name="SMS Count" Detail={Math.floor( data?.UserBalance?.Balance/data?.UserRate?.SmsRate).toString()} ColorClass="bg-info" IconClass="fas fa-broadcast-tower" />
                </Container>
            </section>
        </>
    );
}

export default Dashboard;