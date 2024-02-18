import { useContext, useEffect, useState } from 'react';
import { LoadingContext } from '../Components/LoadingContextProvider';

const useLoading = () => {
    const { setLoading } = useContext(LoadingContext);
    const [loadingCount, setLoadingCount] = useState(0);
    
    useEffect(a=>{
        loadingCount===0?setLoading(false):setLoading(true);
    },[loadingCount])

    const AddLoadcount= a=>setLoadingCount(prev=>prev+1);
    const SubLoadcount = a=>setLoadingCount(prev=>prev-1);

    return [setLoadingCount,SubLoadcount,AddLoadcount];
};

export default useLoading;
