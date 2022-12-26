
import { Timer, Scroll } from "phosphor-react";
import { HeaderStyle } from "./HeaderStyle";
import LogoIgnite from "../assets/logo-ignite.svg";
import { NavLink } from "react-router-dom";

export function Header(){
    return (
        <HeaderStyle>
            <img src={LogoIgnite} alt=""/>
            <nav>

                <NavLink to="/" title="Timer"> 
                    <Timer size={24}/> 
                </NavLink>

                <NavLink to="/history" title="History"> 
                    <Scroll size={24}/> 
                </NavLink>

            </nav>
        </HeaderStyle>

    );
}