import { useState } from "react"
import Search from "./Components/Search"
import FoodDatatList from "./Components/FoodDataList";
import Nav from "./Components/Nav";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import FoodDetail from "./Components/FoodDetail";


function App() {
  const [foodData, setFoodData]= useState([]);
  const [foodId, setFoodId]= useState("658615");
   return (
    <div className="App">
      <div><Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
     
      <Container>
        <InnerContainer>
          <FoodDatatList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId}/>
        </InnerContainer>
      </Container >
      </div>
 
    </div>
  )
}

export default App;
