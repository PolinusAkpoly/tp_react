import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
return (
<div className="header">
<nav >
<ul>
    <NavLink to = '/' className={(z) =>z.isActive ? "nav-active" : ""}> <li> Acceil</li></NavLink>
    <NavLink to = '/coup-de-coeur' className={(z) =>z.isActive ? "nav-active" : ""}><li>Coup de coeur</li></NavLink>
</ul>
</nav>
<h1>
    React Movies
</h1>
</div> 
);

};


export default Header;

