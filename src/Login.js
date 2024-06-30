import React from "react";
import "./Login.css"
import { accessUrl } from "./musicify";
function Login(){
    return(
        <div className="login">
             <img src="https://e1.pxfuel.com/desktop-wallpaper/3/354/desktop-wallpaper-music-logo-song-logo.jpg"
              alt="" 
              />
    <a href = {accessUrl}> Login with Musicify</a>

        </div>
    );
}

export default Login;