import Card_Detail from "./component/cardDetails";
import  goku1  from "./image/goku1.jpg";
import  goku2  from "./image/goku2.jpg";
import  goku3  from "./image/goku3.jpg";
import  goku4  from "./image/goku4.jpg";




const App = ()=> {
// object :
const data = [
  {title : 'Title - 1' , description : 'Desc - 1' , img : goku1},
  {title : 'Title - 2' , description : 'Desc - 2' , img : goku2},
  {title : 'Title - 3' , description : 'Desc - 3' , img : goku3},
  {title : 'Title - 4' , description : 'Desc - 4' , img : goku4}
]
        return(
          <div>
              {
                data.map((item,index)=>{
                  return(
                    //<card_Detail/>
                      <Card_Detail key={index} title={item.title}  description={item.description}  img={item.img} />
                  )
                })
              }
          </div>
        );
}

export default App;
