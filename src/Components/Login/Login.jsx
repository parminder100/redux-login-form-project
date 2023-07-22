import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { setEmailid } from "../Store/Store";
import { setPassword } from "../Store/Store";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const dispatch = useDispatch();
    const emailAddress = useSelector((state)=>state.inputemail);
    const userPassword = useSelector((state)=>state.inputpassword);
    const [nameData, setNameData] = useState("");
    const [passwordData, setPasswordData] = useState("");
    const [successMessage, setSuccessMessage] = useState(false);
    const [nameDataError, setNameDataError] = useState(false);
    const [passwordDataError, setPasswordDataError] = useState(false);
    const [displayUserData, setDisplayUserData] = useState(false);
    const navigate = useNavigate();

    const handleChange = () =>{
        dispatch(setEmailid(nameData));
        dispatch(setPassword(passwordData));
        setNameData("");
        setPasswordData("");
        setDisplayUserData(true);

        if(nameData !== "" && passwordData !== ""){
            setSuccessMessage(true);
            setTimeout(()=>{
                setSuccessMessage(false);
                navigate(`/Home/${nameData}`);
            },1000);
        }
        if(nameData === "" && passwordData === "" ){
            setNameDataError(true);
            setPasswordDataError(true);
        }
    }

    const handelNameChange = (e) =>{
        setNameData(e.target.value);
        setNameDataError(false);
    }

    const handlePasswordChange = (e) =>{
        setPasswordData(e.target.value);
        setPasswordDataError(false);
    }
    return(
        <>
            <form>
                <div className="container">
                    <h1 className="text-center">Redux Login Form Project</h1>
                    <div className="login-form-content">
                        <div className="form-group mb-3">
                            <label>Name</label>
                            <input type="text" class="form-control" placeholder="Enter Name" style={{border: nameDataError ? "1px solid #ff0000" : ""}} value={nameData} onChange={handelNameChange} />
                            {nameDataError &&<p style={{color: nameDataError ? "#ff0000": ""}}>Please enter the name</p>}
                        </div>
                        <div className="form-group mb-3">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Enter Password" style={{border: passwordDataError ? "1px solid #ff0000" : ""}} value={passwordData} onChange={handlePasswordChange} />
                            {passwordDataError &&<p style={{color: passwordDataError ? "#ff0000" : ""}}>Please enter the password</p>}
                        </div>
                        <div>
                            <button type="button" className="login-btn" onClick={handleChange}>Login</button>
                        </div>
                    </div>
                </div>
            </form>
            {displayUserData && <div className="login-form-content user-data">
                {emailAddress && <p>{emailAddress}</p>}
                <p>{userPassword}</p>
                {successMessage && <p className="success-message">Login Successfully</p>}
            </div>}
        </>
    )
}
export default Login;