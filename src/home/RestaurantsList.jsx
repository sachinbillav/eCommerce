import React, { useState, useEffect,useRef} from 'react';
import axios from 'axios';
import Restaurants from './Restaurants';
import Loading from './Loading';
import './RestaurantsList.css'
function RestaurantsList({sendDataToChild}) {
    console.log("RestaurantListComponent "+sendDataToChild)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const scrollRef = useRef(null);
    const [requestUrl, setRequestUrl] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000')
            .then(response => {
                setData(response.data);
                const url = new URL(response.config.url);
                const domainAndPort = `${url.protocol}//${url.hostname}:${url.port}`;
                setRequestUrl(domainAndPort)//+':'+response.config.url.port);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <Loading/>;
    if (error) return <p>Error: {error.message}</p>;

    

    const scroll = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset;
    };
    console.log("console data",data)
    const displayedRestaurants = [];
    //segregating data based on food type
    let typeNeeded = false
    if(sendDataToChild=='NonVeg'){
        typeNeeded = true
    }
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === typeNeeded) {
            displayedRestaurants.push(data[i]);
        }
      }
    
    console.log(displayedRestaurants);

    return (
        <div className="card-list-container">
            <button className="scroll-button left" onClick={() => scroll(-200)}>&lt;</button>
            <div className="card-list" ref={scrollRef}>
                {displayedRestaurants.map(item => (
                    <Restaurants
                        key = {item.id}
                        code = {item.code}
                        name = {item.name}
                        location = {item.location}
                        type  = {item.type}
                        opensAt = {item.opensAt}
                        closesAt = {item.closesAt}
                        RestaurantImage = {item.RestaurantImage}
                        domain = {requestUrl}
                        ratings = {item.rating}
                        
                    />
                ))}
            </div>
            <button className="scroll-button right" onClick={() => scroll(200)}>&gt;</button>
        </div>
    );

}

export default RestaurantsList;
