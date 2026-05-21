import { useEffect, useState } from "react"
import { api } from "./utils/api"


function Login(){
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState("")
    const [pageMode, setPageMode] = useState("Login")
    
    function handleSubmit(e){
        e.preventDefault();
            if(pageMode === "Login"){
                   login(); 
            }else if(pageMode === "SignUP"){
                signup();
            };
    };

    async function login(){
        try {
            setUser(await  api("/",{
                    method: "post"
                }))
            
            }catch(err){}finally{};    
    }
    
    async function signup(){
        
    };


    return(
        // function to handle submit onSubmit
        <form onSubmit={handleSubmit}>
            <p>{pageMode}</p>
            <input name="username" />
            <p>Email</p>
            <input type="email" name="email"/>
            <p>Password</p>
            <input type="password" name="password"/>
            <br/>
            <button type="submit">Log in</button>

        </form>
    )
}

export default Login