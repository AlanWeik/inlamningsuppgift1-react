import React from "react"
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom"
import { HomeView } from '../view/HomeView'
import { SecondView } from '../view/SecondView'
import { ThirdView } from '../view/ThirdView'
import { FourthView } from '../view/FourthView'
import RoutingPath from "./RoutingPath"

export const Routing = ({ children }) => {
    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route path={RoutingPath.HomeView} element={<HomeView />} />
                <Route path={RoutingPath.SecondView} element={<SecondView />} />
                <Route path={RoutingPath.ThirdView} element={<ThirdView />} />
                <Route path={RoutingPath.FourthView} element={<FourthView />} />
            </Switch>
        </BrowserRouter>
    )
}
