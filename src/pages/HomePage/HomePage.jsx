import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Weather from "../component/Weather";
import {  Container } from "@mui/material";
import { api } from "../../utils/api";
import CityList from "../component/CityList";
import { ozzCity } from "../../data/fantasyCity";
import styles from "../CardStyle.module.css"


function HomePage(){
    const [city, setCity] = useState("")
    const [loading, setLoading] = useState(false);
    const [searchCity, setSearchCity] = useState("")
    const [cityList, setCityList] = useState(null);
    const navigate = useNavigate();
    const {state} = useLocation();
    
    
    async function handleSubmit(e){
        e.preventDefault();
            setLoading(true)
            
            if(!searchCity || searchCity === ""){
                setLoading(false);
                setSearchCity("");
                return;
            };
            
            const res = await fetchCity(searchCity)
            setLoading(false);
            setCityList(res);
        
    };

    function cityOfOzz(){
        setCity(ozzCity);
        setSearchCity("");
        setCityList(null);
    };

    async function fetchCity(cityName){
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${cityName}&limit=5`;
        try{
                const res = await api(
                    url,
                    {
                        headers: {"User-Agent": "WeatherAppStudentProject/1.0 (sam_joseph@live.com)"}
                })
                return res;
            }catch(err){
                alert(`Unable to fetch the weather - ${err}`)
            }
    };

    useEffect(() =>{
        if(state?.city){
            setCity(state.city);
        }
    },[state]);

    useEffect(()=>{
            if(!searchCity){
                setCityList(null)
                return;
            };

            const timer = setTimeout(() => {
                handleSubmit({preventDefault: () => {} });
            },3000);
            return () => clearTimeout(timer);
        },[searchCity]);

    

    
    return(
        <div>
            
            
                <Container 
                    className={styles.card}
                    sx={{padding: 2}}
                >
                    
                        <h1
                            className={styles.text}
                        >Welcome to Weather App</h1>
                        <button
                            onClick={cityOfOzz}
                            className={styles.btn}
                        >
                           🏢 Visit the city of OZZ
                        </button>
                     <form onSubmit= {handleSubmit}>
                            <input 
                            placeholder="Enter the city name"
                            onChange={(e)=> {
                                setSearchCity(e.target.value.trim());
                            }}
                            className={styles.input}
                            />

                            <p>
                                {cityList? "Select City from the list below": ""}
                           </p>
                            <CityList
                            list={cityList}
                            onSelect={(selectedCity) => {
                                setCity(selectedCity);
                                setSearchCity("");
                                setCityList(null);
                            }}/>
                           
                           
                            
                            <p>
                                {city ? city.display_name : "Search City"}
                            </p>
                    
                        </form>  
                </Container>
            
            <Container
                className={styles.card}
                sx={{padding: 2}}
            >
                <Weather city={city}/>
            </Container>
                
            
            
        </div>
    )
};

export default HomePage;