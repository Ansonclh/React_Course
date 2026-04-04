import { useState, useEffect } from "react";

const UseFetch = (url) => {
    const[data,setData]=useState();
     useEffect(()=>{
            fetch(url)
            .then((res)=>res.json())
            .then((data)=>setData(data))
            .catch((e) => console.log(e))
        },[])
    return [data]

}

export default UseFetch
