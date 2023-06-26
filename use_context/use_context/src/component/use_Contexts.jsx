import { createContext, useState } from "react";


// 1 - create context 
const colorContext = createContext();

// update data in context
// 2 - create provider
const UseContextProvider = ({children})=>{

    const [data, setData] = useState('white');

    const changeData = (color)=>{
        setData(color)
    }

    return (
        <colorContext.Provider  value={{data, changeData}} >
            {children}
        </colorContext.Provider>
    );
}

// 3 - exports context to use , and provider to wrap all components !
 export { UseContextProvider , colorContext }