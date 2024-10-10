import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Searcher({sendDataToParent}){
    
    const [food,changeFood] = useState("Veg")
    const navigate = useNavigate();

    function handleSearch(ev){
        navigate('/search');
    }

    function foodType(event){
        console.log(event.target.checked)
        if (event.target.checked){
            changeFood("NonVeg")
            sendDataToParent("NonVeg");
        }
        else{
            changeFood("Veg");
            sendDataToParent("Veg");
        }
    }

    return(
        <div className="main-search" id="main-search">
        <div class="search-container" id="search-container">
        <i class="fas fa-search search-icon"></i>
        <input type="text" class="search-box" placeholder="Search..." onClick={(e) => handleSearch(e)}/>
        <i class="fa-solid fa-microphone-lines"></i>
        </div>

        <div className="food-type">
            <span className="radioButton">{food}</span><input type="checkbox" id="checkboxId" onChange={(e) => foodType(e)}/>
        </div>
        </div>
    )
}

export default Searcher