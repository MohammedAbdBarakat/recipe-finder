import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";


const NavBar = ({setUserID}) => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    const handleLogClick = () => {
        Swal.fire({
            title: "Do you really want to logout?",
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: "Logout",
        }).then((result) => {
                if (result.isConfirmed) {
                    setUserID(-1);
                    Swal.fire("logged out!", "", "success");
                }
            });
    } 

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos;

        setPrevScrollPos(currentScrollPos);
        setVisible(visible);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <header className={visible ? "" : "hidden"}>
            <h2 className="logo">Recipe Finder</h2>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/filter">Filter</Link>
                <Link to="/search">Search</Link>
                <Link to="/saved">Saved</Link>
                
                <button className="logOut-button" onClick={handleLogClick}>logout</button>
            </nav>
        </header>
    );
};

export default NavBar;