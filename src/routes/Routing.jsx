import React from "react"
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom"
import { HomeView } from '../views/HomeView'
import { ClickView } from '../views/ClickView'
import { StarWarsAPI } from '../views/StarWarsAPI'
import { StarWarsAPI2 } from '../views/StarWarsAPI2'
import RoutingPath from "./RoutingPath"

export const Routing = ({ children }) => {
    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route path={RoutingPath.HomeView} element={<HomeView />} />
                <Route path={RoutingPath.ClickView} element={<ClickView />} />
                <Route path={RoutingPath.StarWarsAPI} element={<StarWarsAPI />} />
                <Route path={RoutingPath.StarWarsAPI2} element={<StarWarsAPI2 />} />
            </Switch>
        </BrowserRouter>
    )
}
