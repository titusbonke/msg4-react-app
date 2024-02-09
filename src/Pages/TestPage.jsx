import { useContext } from "react";
import { LoadingContext } from "../Components/LoadingContextProvider";
import { msg4apicall } from "../CommonFunctions";

function TestPage() {
    const { setLoading } = useContext(LoadingContext);
    // useEffect(() => {
        
        // var fetchGetData = async () => {
        //     try {
        //         setLoading(true);
        //         const response = await fetch('http://localhost:4000/proxy/get?url=https://reqres.in/api/users?page=2');
        //         const data = await response.json();
        //         setLoading(false);
        //         return data;
        //     } catch (error) {
        //         console.log(error);
        //     }
        // };

    // }, []);


    function setLoadingDelay(){
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    function  FetchData(){
        setLoading(true);
        msg4apicall({
            ReadUserDashboardRqst: {
                LoginToken: '185a1e6516dd4f8a80a4ebcc7748212ba5ded331ed90406c94d520ec51e5ad76',
                UserGuid: 'c5cf3fe0-1bcb-4724-995b-fbe71d1c904e'
            }
        }).then(data=>{console.log(data); setLoading(false);})
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