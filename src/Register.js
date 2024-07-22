import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import Swal from "sweetalert2";


const Register = ({setnewAccount}) => {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");
    let [savedMeals , setSavedMeals] = useState([]);

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const { data: users } = useFetch("http://localhost:8888/user");

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { firstName, lastName, userName, password , savedMeals };
        
        const userExists = users.some(
            (existingUser) =>
                existingUser.userName === userName
            );

        if (userExists) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "The user name is already taken!",
            });
        }
        else {
            setIsPending(true);
            setTimeout(() => {
                fetch("http://localhost:8888/user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
                })
                .then(() => {
                    console.log("New user added");
                    setIsPending(false);
                    setnewAccount(false)

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "You Registered Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
                .catch((error) => {
                    console.error("Error adding new user:", error);
                    setIsPending(false);
                });
            }, 2000);
        }
    };

    return (
        <div className="Reg-container">
            <h1 className="sign-phrase">Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="firstName"
                    required
                    className="Reg-filed"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}/>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="lastName"
                    required
                    className="Reg-filed"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}/>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="userName"
                    required
                    className="Reg-filed"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}/>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    required
                    className="Reg-filed"
                    minLength={6}
                    maxLength={14}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                {!isPending && <button className="Reg-button">Register</button>}
                {isPending && <button className="Reg-button" disabled>Confirming</button>}
            </form>
            <a className="Reg1-button" onClick={()=>{setnewAccount(false)}}>You are already Registered? Go to Login page.</a>
        </div>
    );
};

export default Register;