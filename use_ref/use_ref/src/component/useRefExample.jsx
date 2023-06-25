import { useRef } from "react";

const UseRefExemple = ()=>{
    const valueInput = useRef(null);
    
    const showValue = ()=>{
        valueInput.current.focus();
        console.log(valueInput.current.value);
        
    }

    return(
        <div>
            <input type="text" ref={valueInput} />
            <button onClick={showValue}> Show</button>
            
        </div>
    );
}

export default UseRefExemple ;