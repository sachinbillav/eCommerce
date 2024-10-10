import axios from "axios";
import { useEffect, useState } from "react"
function Offers(){
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState('');
    const [requestUrl, setRequestUrl] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/offers/')
            .then(response => {
                setData(response.data);
                console.log(response.data)
                const url = new URL(response.config.url);
                const domainAndPort = `${url.protocol}//${url.hostname}:${url.port}`;
                setRequestUrl(domainAndPort)//+':'+response.config.url.port);
                setLoading(false);
            })
            .catch(error => {
                setError(error)
                setLoading(false);
            })

    },[]);
    console.log("offerComponent:",data)
    return(
        <>
        <div className="main-offers" >
            {data.map(item => (
                <img src={`${requestUrl}/media/${item.OfferImage}`} id="main-offers"/>
            ))}
            <button className="offerId">CHECK OFFERS</button>
           
        </div>
        </>
    )
}

export default Offers