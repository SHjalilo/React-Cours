import { useState } from "react";


const TestUseState = ()=>{
    const [count,setCount] = useState(0);
    const [text,setText] = useState("text");

    const handelInput = (e)=>{
        setText(e.target.value);
        console.log(text);
    }

    return(
        <div>
            <button onClick={()=> setCount(count + 1)}>+</button>
            <button onClick={()=> setCount(count - 1)}>-</button>
            <label> count is : {count} </label>
            <hr />
            <input type="text" value={text} onChange={handelInput} />
            <label> text input is : {text} </label>
        </div>
    );
}

export default TestUseState ;