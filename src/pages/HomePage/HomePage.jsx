import { useEffect, useState } from "react";
import City from "../component/Weather";
import { Card, CardActionArea } from "@mui/material";
import { api } from "../../utils/api";
import CityList from "../component/CityList";
// https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=5


function HomePage(){
    const [city, setCity] = useState("")
    const [loading, setLoading] = useState(false);
    const [searchCity, setSearchCity] = useState("")
    const [cityList, setCityList] = useState([]);
    
    
    async function handleSubmit(e){
        e.preventDefault();
            setLoading(true)
            if(!searchCity || searchCity === ""){
                setSearchCity("")
                return;
            };
            const res = await fetchCity(searchCity)
            setLoading(false);
            setCityList(res);
        
    };

    async function fetchCity(cityName){
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${cityName}&limit=5`;
        try{
                const res = await api(
                    url,
                    {
                        headers: {"User-Agent": "WeatherAppStudentProject/1.0 (sam_joseph@live.com)"}
                })
                console.log(res);
                return res;
            }catch(err){
                alert(`Some error has occure - ${err}`)
            }
    };

    useEffect(()=>{
            if(!searchCity){
                setCityList("")
            };

            const timer = setTimeout(() => {
                handleSubmit({preventDefault: () => {} });
            },3000);
            return () => clearTimeout(timer);
        },[searchCity]);


    
    return(
        <div>
            <div>
                <Card>
                    
                        <h1>Welcome to Weather App</h1>
                    
                    
                </Card>
            </div>
            
            <div>
                <Card>
                    
                        <form onSubmit= {handleSubmit}>
                            <input 
                            placeholder="Enter the city name"
                            onChange={(e)=> {
                                setSearchCity(e.target.value);
                            }}
                            />
                            <CityList
                            list={cityList}
                            onSelect={(selectedCity) => {
                                setCity(selectedCity);
                                setSearchCity("");
                                setCityList([]);
                            }}/>
                            <p>{city ? city.display_name : "Select City"}</p>
                    
                        </form>
                        
                </Card>
            </div>
            
            
            <City city={city}/>
        </div>
    )
};

export default HomePage;