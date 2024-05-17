import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Swal from "sweetalert2";



const Login = ({setUserID , setnewAccount}) => {

    let [userName , setUserName] = useState("");
    let [password , setPassword] = useState("");
    let [thisUserID , setThisUserID] = useState(-1);

    let [isValid , setIsValid] = useState(false)
    const [isPending,setIsPending] = useState(false);

    const [Done, setDone]=useState(false);
    const {data : users } = useFetch('https://raw.githubusercontent.com/MohammedAbdBarakat/recipe-finder/main/Data/user.json');


    useEffect(() => {
        if (users){
            for (const user of users){
                if (user.userName === userName && user.password === password) {
                        console.log("login success");
                        setThisUserID(user.id);
                        setDone(true)
                        break;
                    }
                    else {
                        console.log("invalid user name or password");
                    }
            }
        }
    },[thisUserID])

    //Authentication Process:

    const handleSubmit = (e) => {
        e.preventDefault();
        if (users){
            for (const user of users){
                if (user.userName === userName && user.password === password) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Login Success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                        setThisUserID(user.id);
                        setDone(true)
                        break;
                    }
                    else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "incorrect user name or password!",
                        });
                    }
            }
        }
    }

    return (
        <>
        {!Done &&<>
            <div className="log-container">
                <h2 className="login-phrase">Login !!!!!</h2>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" name="userName"
                            className="log-filed"
                            id="userName" placeholder="userName"
                            required value={userName}
                            onChange={(e) => setUserName(e.target.value)}/>
                        <input 
                            type="password" name="password"
                            className="log-filed"
                            id="password" placeholder="password"
                            required value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                        {!isPending && <button className="log-button" >Login</button>}
                        {isPending && <button className="log-button" disabled>Confirming</button>}
                    </form>
            <a className="log1-button" onClick={()=>{setnewAccount(true)}}>You don't have an account? Register now!</a>
            </div>
            </>}
            {Done && <h2 className="welcome-back-phrase">Welcome Back  {userName} !</h2>}
            {Done && <a className="log2-button" onClick={()=>{setUserID(thisUserID.toString());}}>Continue To Home</a>}
        </> 
    );
}

export default Login;