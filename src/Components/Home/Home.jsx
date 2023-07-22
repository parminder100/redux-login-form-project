import logo from "../assets/img/logo.jpg";
import "../Home/Home.css";
import {useNavigate,useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from "react";

const Home = () =>{
    const {name} = useParams();
    const navigate = useNavigate();
    const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);

    const handleLogout = () =>{
        navigate("/");
    }

    const handleDropdown = () =>{
        setShowLogoutDropdown(!showLogoutDropdown);
    }
    return(
        <>
            <header>
                <div className="container">
                    <div className="row align-items-baseline">
                        <div className="col-sm-6">
                            <img className="logo" src={logo} alt="logo.png" />
                        </div>
                        <div className="col-sm-6">
                            <nav>
                                <ul className="nav-list">
                                    <li>Home</li>
                                    <li>About us</li>
                                    <li>Services</li>
                                    <li>Contat us</li>
                                    <li className="dropdown">
                                        <span
                                            onClick={handleDropdown}
                                            className="dropdown-toggle"
                                            >
                                            {name}
                                        </span>
                                        {showLogoutDropdown && (
                                            <ul className={`dropdown-menu${showLogoutDropdown ? " show" : ""}`}>
                                                <li onClick={handleLogout}>Logout</li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <div className="container">
                    <div className="user-content">
                        <p>Welcome, {name}</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;