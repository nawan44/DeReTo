import React, { useState, useEffect } from "react"
import TopBar from "../../component/view/appBar";
import avatar from "../../assets/avatar/avatar.png"
import Login from "../Login";
import { NavLink, useLocation,useNavigate } from "react-router-dom";
import Profile from "../Profile";



const Public = (props) => {
    let location = useLocation();
    const navigate  = useNavigate();

    const renderPublic = () => {
        if (location.pathname === "/login") {
            return <>
                <TopBar />
                <Login navigate={navigate}/>
            </>

        } else if (location.pathname === "/profile") {
            return <>
                <TopBar />
                <Profile />
            </>
        } else {
            return console.log("tidak ada")
        }
    }


    return (
        <>
            {renderPublic()}
        </>
    );
}
export default Public



