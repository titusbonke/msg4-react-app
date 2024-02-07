import { useContext, useEffect } from "react";
import { LoadingContext } from "../Components/LoadingContextProvider";

function TestPage() {
    const { setLoading,loading } = useContext(LoadingContext);
    // useEffect(() => {
        var fetchData = async () => {
            try {
                const response = await fetch('https://cors-anywhere.herokuapp.com/https://apx.msg4.cloud.robeeta.com/WebQuery', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Origin': 'http://localhost:3000', // Replace with your actual domain
                        'X-Requested-With': 'XMLHttpRequest'                
                    },
                    body: JSON.stringify({
                        ReadUserDashboardRqst: {
                            LoginToken: 'f659c649a1ca4988bd50a6df4700a7bbf012d3908161430b98a6c36ae0beed44',
                            UserGuid: 'c5cf3fe0-1bcb-4724-995b-fbe71d1c904e'
                        }
                    })
                });
                const data = await response.json();
                return Object.values(data).filter(value => value !== null)[0];
            } catch (error) {
                console.log(error);
            }
        };

    // }, []);


    function setLoadingDelay(){
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    function multipleFetch(){
        fetchData().then(data=>console.log(data.Response))
    }

    return (
        <div className="text-center">
        <h1 >Testpage</h1>
        <button onClick={setLoadingDelay} className="btn btn-primary m-2" >loading toogle button</button><br />
        <button onClick={multipleFetch} className="btn btn-primary m-2" >test api button</button>
        </div>
    );
}

export default TestPage;