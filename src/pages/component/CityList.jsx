import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useEffect, useState } from 'react';
import { Box, Container, ListItemButton } from '@mui/material';
import styles from "../CardStyle.module.css"


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



function CityList({list, onSelect}){
    const [cityList, setCityList] = useState([]);
    useEffect(() => {
        if(!Array.isArray(list)){
            setCityList("");
            return;
        };

        if(list.length === 0) return;
        const filtered = list.filter(item => ["city", "town", "village"].includes(item.addresstype));

        setCityList(filtered)
        
    },[list])
    
    

    return(
        
            <ul>
                    {!Array.isArray(cityList) || cityList.length === 0 ? (
                    null
                ) : (
                    cityList.map(item =>(
                    // <li key = {item.place_id}>
                    //     {item.display_name}
                    // </li>
                    <li  
                        key = {item.place_id}
                    >
                        <ListItemButton 
                        key = {item.place_id}
                        onClick={() => onSelect(item)}>
                            {item.display_name}
                        </ListItemButton>
                    </li>
                ))
                    )}
            </ul>
            
        
    )
}

export default CityList;