import { useState } from "react";
import City from "../component/Weather";
import { Card, CardActionArea } from "@mui/material";
// https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=5
function HomePage(){
    const [city, setCity] = useState("")
    const [loading, setLoading] = useState("true");
    const [searchCity, setSearchCity] = useState("")
    
    async function handleSubmit(e){
        e.preventDefault();
        const done = await TimeOut(3,0);
        const url = "";
        if(done){
            setLoading(true)
            try{
                const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${searchCity}&limit=5`)
            }catch(err){}finally{}
        }
    };

    function TimeOut(round, count){
        return new Promise(resolve =>{
            function loop(){
                if(count===round){
                    resolve(true);
                    return;
                }

                setTimeout(() => {
                    count++;
                    loop();
                },1000);
            }
            loop()
        })
    }
    
    return(
        <div>
            <div>
                <Card>
                    <CardActionArea>
                        <h1>Welcome to Weather App</h1>
                    </CardActionArea>
                    
                </Card>
            </div>
            
            <div>
                <Card>
                    <CardActionArea>
                        <form onSubmit= {handleSubmit}>
                            <input 
                            placeholder="Enter the city name"
                            onChange={(e)=> setSearchCity(e.target.value)}
                            />
                            <button>Search</button>
                        </form>
                    </CardActionArea>
                </Card>
            </div>
            
            
            <City city={city}/>
        </div>
    )
};

export default HomePage;