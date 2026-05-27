import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


        // if(city === "kelowna"){
        //     setTemp(20);
        //     setAboutCity("Kelowna (/kəˈloʊnə/ ⓘ kə-LOH-nə) is a city on Okanagan Lake in the Okanagan Valley in the southern interior of British Columbia, Canada. It serves as the head office of the Regional District of Central Okanagan. The name Kelowna derives from the Okanagan word kiʔláwnaʔ, referring to a grizzly bear.[8][9]");
        // }else if (city === "vancouver"){
        //     setTemp(22);
        //     setAboutCity("Vancouver[a] is a major city in Western Canada, located in the Lower Mainland region of British Columbia. As the most populous city in the province, the 2021 Canadian census recorded 662,248 people in the city, up from 631,486 in 2016. The Metro Vancouver area had a population of 2.6 million in 2021, making it the third-largest metropolitan area in Canada. Greater Vancouver, along with the Fraser Valley, comprises the Lower Mainland with a regional population of over 3 million. Vancouver has the highest population density in Canada, with over 5,700 inhabitants per square kilometre (15,000/sq mi),[6] and the fourth highest in North America (after New York City, San Francisco, and Mexico City).");
        // }else{
        //     setTemp(0);
        //     setAboutCity("")
        // };

function City({city}){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [cityData, setCityData] = useState(null);
    const [wikiUrl, setWikiUrl] = useState("")
    const API_KEY = import.meta.env.VITE_WEATHERAPIKEY;
    //here I pull the temp from the link that I got from the assignment
    
    const [aboutCity, setAboutCity] = useState("")
    //Here I will fetch the about city from wikipedia
    
    useEffect(() => {
        if(!city || !city.lat || !city.lon) {
            setCityData(null)
            return
        };
        setLoading(true);
        setAboutCity("");
        async function fetchWeather(){
            try{
                
                const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=metric`;
                setWikiUrl(`https://en.wikipedia.org/api/rest_v1/page/summary/${city.name}`);
                const response = await fetch(URL);
                const data = await response.json();
                if(data.cod === 404){
                    setCityData(null);
                    setAboutCity("City not found")
                    return;
                };
                setAboutCity(`${data.weather[0].description}`);
                setCityData(data);

            }catch(err){
                setAboutCity(err.message);
            }finally{
                setLoading(false);
            }
            
        }
        fetchWeather();
        
    },[city]);

    function handleClick(){
        navigate("/wiki", {state:{wikiUrl: wikiUrl, city: city}});
    };
    

    return(
        <Card sx={{ minWidth: 275 }}>
            <CardActionArea
                onClick={() => handleClick()}
            >
                    <Typography variant='h4'
                    gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}
                    style={{whiteSpace:"pre-line"}}>
                        {loading? "loading...": cityData !== null ? `Temp \n ${cityData["main"]["temp"]}°C \n`:  "Temp \n -- \n"}
                    </Typography>
                    <Typography variant='h4'
                    style={{whiteSpace:"pre-line"}}>
                        {loading? "Feels like" : cityData !== null ? `Feels-like \n ${cityData["main"]["feels_like"]}°C \n` : `Feels like \n -- \n`}    
                    </Typography>
                    <Typography variant='h4'
                    style={{whiteSpace:"pre-line"}}>
                        {loading? "Min Temp" : cityData !== null ? `Min-Temp \n ${cityData["main"]["temp_min"]}°C \n`: "Min-Temp \n -- \n"}
                    </Typography>
                    <Typography variant='h4'
                    style={{whiteSpace:"pre-line"}}>
                        {loading? "Max-Tep" : cityData !==null ? `Max-Temp \n ${cityData["main"]["temp_max"]}°C \n`: "Max-Temp \n --"}
                    </Typography>
                        
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {city ? city.display_name : "Select a city"}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {aboutCity}                       
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default City;