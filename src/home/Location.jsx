import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";


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
                <img alt="User Photo" className="profile-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6UlEQVR4nO2ZXWiOYRjHf+ZzxLAkiQOfs1lTlEU5UEI7c4BoDsbJEFpKdkTKjnzswFdKDtd8TU4wiinNwcpnYhxoSGJMiLG9uvR/67byvs/7PrP7Vu+v7qP3vv7P/36f5/64rhty5PjvmAGsB/YC9cBBoBZYCgwhcAYDVcBDIJGiPQOWECiTgNuO2VdAI3AIqFGzN/NEv38FjgCLCIixjsGnQAUw6C9984ADfd5QAzCSADgtQ21AQYT+NphiYAfwVrHn8cxU4CfwAyjLIn4a0KnBrMAjm2XiXAyNPc4n5o0LMrExhsYcaTzHI60yUR5z2f4G9Pqc9O0aSFFMnS7p2ArohccyMDumzhfpjMETN2Ugzk49Xhqf8UiDTKyNobFQGvfxSK1M1MXQ2CmNY3hkuUxcj6FxSRrr8MhKmfiU5fF8GPBRGhV45IZM7EpxUEyFxeyWxjU8klx+szlnJSmTxiM8ckYmLKHKlk3SaMQjG2TihZKnTKlRrGlU4hE7J53VOalLuUZU8pyjiZ2eTcs7d2WoJIOYUsXYPAuGepnan0FMnWKOExDzZcqyvQkRz1fvFbOYwGiSMdtbClP0Gw1cUd9mAmQy8CZColWkPrajTydQ2iIMpNgp1AXLgwgDSeboHQRMu0zOTVNCSqimFSQTleWZySkp+hVoA/2uQQVFKXBPg7gcoX+jsxkuIABKlNl1O7VfK2ino9Cp2lul8hQwjwHGEqhVygp7ZaZHNeBMyjm2n5xUbLKgfQtYDQz9h/4ZAWx1TqsJlXFOpJnc6bBV7Kgzv6y9BLYD+f3o/3cWV6U7j+SD7LPYBozrx+cUAFucuWbttfKVbLLPPxgFXHSEWweoar6sz8VRk7xkxXCgRULvgDUMPJXOJ9eiYkXGHHZ24Fn4Xdo75MVuuzJipi5velQJ9E25vHTrxjgy+/QPXCUcmuXJrrwjc0dB1YRDtbPgROZDmrtyn60z6iDyAzCbSNNsc86RIwfR+AUnligdzeBw0AAAAABJRU5ErkJggg=="></img>
                <span className="profile-text">&nbsp; &nbsp; UserName</span>
            </div>
        </div>
        </>
    );
}

export default Location