export async function  msg4apicall(RqstObject){
    try {
        console.log(RqstObject);
        const response = await fetch('http://localhost:4000/proxy/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                url: 'https://apx.msg4.cloud.robeeta.com/WebQuery',
                params: RqstObject
            })
        });
        const data = await response.json();
        if (process.env.NODE_ENV === 'development') console.log(data)
        return Object.values(data).filter(value => value !== null)[0];
    } catch (error) {
        console.log(error);
    }
}