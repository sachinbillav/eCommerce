import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./home/Loading";


function Location(){
    const [data, setData] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const API_Token = "pk.3b82c03be47bb542ba3ba595d97328a9"
    const lat="13.0843007"
    const lon="80.2704622"
    useEffect(() => {
        axios.get('https://us1.locationiq.com/v1/reverse?key='+API_Token+'&lat='+lat+'&lon='+lon+'&format=json&')
        .then(response => {
            setData(response.data)
            setLoading(false)
        })
        .catch(error => {
            setError(error)
        });
    },[]);
    //console.log(data["display_name"])
    //console.log(error)
  
    return(
        <>
        <div className="main-bar">
            <div className="location-bar">
                {loading ? (
                        <Loading />
                    ) : (
                        <>
                        <span className="location-icon"><img src="/src/assets/location.png" /></span>
                        <span className="location-text">{data["display_name"]}</span>
                        </>
                )}
                
            </div>
            <div className="profile-bar">
                <img src="user-photo.jpg" alt="User Photo" className="profile-icon" />
                <span className="profile-text">UserName</span>
            </div>
        </div>
        </>
    );
}

export default Location