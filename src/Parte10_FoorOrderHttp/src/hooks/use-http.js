import { useState, useCallback } from "react";


const useHTTP = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (config, callbackFn) => {

        setIsLoading(true);
        setError(false);

        try{
            const response = await fetch(config.url,{
                headers: config.headers || {},
                method: config.method || 'GET',
                body: config.body || null
            })

            if(!response.ok){
                throw new Error(response.statusText || 'Something went wrong');
            }

            const data = await response.json();
            callbackFn(data);

        }catch(error){
            setError(error)
        }finally{
            setIsLoading(false);
        }
    },[]);

    return [isLoading, error, sendRequest];

}

export default useHTTP;