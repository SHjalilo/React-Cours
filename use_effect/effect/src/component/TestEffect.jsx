import { useEffect, useState } from "react";


const FirstTest = ()=>{
    const  [count,setCount] = useState(0);
    // when the [] empty useEffect excute one time
    // condition in [] if changed
    useEffect(()=>{
        console.log('Hello from useEffect !');
    },[count])

    return(
        <div>
            <button onClick={()=>setCount(count + 1)}>+</button>
            <label>{count}</label>
        </div>
    );
}

export default FirstTest ;