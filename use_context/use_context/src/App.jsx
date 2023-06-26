import { useContext } from "react";
import { colorContext } from "./component/use_Contexts";


const App = () =>{
// 5 - use context
const {data, changeData} = useContext(colorContext)
changeData('green');
  return (
    
    <div>
      {data}
    </div>
  )
}

export default App
