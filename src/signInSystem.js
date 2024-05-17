import Login from "./Login";
import { useState } from "react";
import Register from "./Register";

const SignInSystem = ({setUserID}) => {
    const [newAccount ,setnewAccount]= useState(false);

    return ( 
        <>
        <div className="welcome-phrase-container" >
            <h1>Unlock Flavorful Discoveries!</h1>
        </div>
        <div className="sign-in-system">
            {!newAccount && <Login setUserID = {setUserID} setnewAccount={setnewAccount} />}
            {newAccount && <Register setnewAccount={setnewAccount} />}
        </div>
        </>
    );
}

export default SignInSystem;