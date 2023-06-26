import { useState , useMemo } from "react";



const UseMemoExemple = ()=>{
    var randomColor = "#"+ Math.floor(Math.random() * 16777215 ).toString(16);

    const [counter , setCounter] = useState(0);
    const [text , setText] = useState(0);

    const result = useMemo(()=>{
        return(<div style={{color : randomColor}}>
            value is {counter} : {counter *2}
        </div>)
    } ,[counter])

    return(
        <div>
            {result}
            <button onClick={()=>setCounter(counter - 1)} >-</button>
            <button onClick={()=>setCounter(counter + 1)} >+</button>
            <button onClick={()=>setText(text + 1)} >text</button>

        </div>
    );
}

export default UseMemoExemple ;