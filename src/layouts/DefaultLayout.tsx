import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { DefaultLayoutContainer } from "./DefaultLayoutContainer";

export function DefaultLayout(){
    return(
        <DefaultLayoutContainer>
            <Header/>
            <Outlet/>
        </DefaultLayoutContainer>
    );
}