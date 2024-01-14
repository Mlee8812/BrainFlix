import React from "react";
import { Link } from "react-router-dom"
import logo from "../../Assets/Logo/BrainFlix-logo.svg";
import profilePicture from "../../Assets/Images/Mohan-muruge.jpg";
import "./Header.scss";

const Header = () => (
    <header className="header">
        <Brand/>
        <Search/>
        <div className="header__upload">
            <UploadButton/>
            <ProfilePicture/>
        </div>
    </header>
);

const Brand = () => (
    <div className="header__image">
        <Link to="/"><img src={logo} alt="Brand-Logo" className="header__logo" /></Link>
    </div>
);

const Search = () => (
    <form className="header__form">
        <input type="search" placeholder="Search" className="header__search"></input>
    </form>
);

const UploadButton = () => (
    <Link to="/upload" className="header__link"><button className="header__button button">+ UPLOAD</button></Link>
)

const ProfilePicture = () => (
    <img src={profilePicture} alt="Profile" className="header__profile-picture" />
)

export default Header;