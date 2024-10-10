import { useState } from 'react'
import './App.css'
import Location from './home/Location.jsx'
import Footer from './home/Footer.jsx'
import Searcher from './home/Searcher.jsx'
import Offers from './home/Offers.jsx'
import RestaurantsList from './home/RestaurantsList.jsx'
function Home() {
  const [dataFromFoodType,setDataFromFoodType] = useState("Veg")
  function handleDataFromChild(data){
    setDataFromFoodType(data);
  }
  console.log("AppComponent "+dataFromFoodType)
  return(
    <>
      <Location/>
      <Searcher sendDataToParent={handleDataFromChild}/>
      <Offers/>
      <RestaurantsList sendDataToChild = {dataFromFoodType}/>
      <RestaurantsList sendDataToChild = {dataFromFoodType}/>
      <Footer/>
    </>
  );

}

export default Home
