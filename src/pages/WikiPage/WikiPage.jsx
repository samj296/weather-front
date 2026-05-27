import { Card, CardActionArea, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../../utils/api";

function WikiPage(){
    const navigate = useNavigate();
    const { state } = useLocation();
    const [wikiInfo, setWikiInfo] = useState(null)
    const [loading, setLoading] =useState(false)
    const url = state?.wikiUrl;
    const city = state?.city
    useEffect(() =>{
        async function fetchWiki(){
                setLoading(true);
            try{
                const data = await api(
                    url,
                    {method: "GET"}
                )
                setWikiInfo(data)
            }catch(err){
                alert(`Unable to fetch the info about the city - ${err}`)
            }finally{
                setLoading(false);
            }
        }
        fetchWiki();
                
    },[url])

    function handleClick(){
        navigate("/", {state:{city: city}});
    };
    
   return(
        <div>
            {loading && <Typography>Loading...</Typography>}
            <Card>
                <CardActionArea
                    onClick={handleClick}
                >
                    <Typography variant = "h3">
                        {wikiInfo? wikiInfo["title"]: ""}
                    </Typography>
                    <Typography variant="h4">About</Typography>
                    <Typography variant = "p">

                        {/* This is the modern way of writing */}
                        {wikiInfo?.extract}

                    </Typography>
                </CardActionArea>
            </Card>
            <Card>
                    {wikiInfo?.originalimage?.source && (
                    <img
                        src={wikiInfo.originalimage.source}
                        alt={wikiInfo.title}
                        className="image"
                    />
                )}
            </Card>
        </div>
   ) 
};

export default WikiPage;