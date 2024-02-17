import { msg4apicall } from "../CommonFunctions";
import useLoading from "../Components/useLoading";

function TestPage() {
    const [setLoading,SubLoadcount,AddLoadcount] = useLoading();  


    function setLoadingDelay(){
        AddLoadcount()
        setTimeout(() => {
            SubLoadcount()
        }, 1000);
    }

    function  FetchData(){
        msg4apicall({
            ReadUserDashboardRqst: {
                LoginToken: '185a1e6516dd4f8a80a4ebcc7748212ba5ded331ed90406c94d520ec51e5ad76',
                UserGuid: 'c5cf3fe0-1bcb-4724-995b-fbe71d1c904e'
            }
        },setLoading).then(data=>{console.log(data.Response);})
    }

    return (
        <div className="text-center">
        <h1 >Testpage</h1>
        <button onClick={setLoadingDelay} className="btn btn-primary m-2" >loading toogle button</button><br />
        <button onClick={FetchData} className="btn btn-primary m-2" >test api button</button>
        </div>
    );
}

export default TestPage;