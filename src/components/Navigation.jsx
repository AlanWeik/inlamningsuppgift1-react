import { useNavigate } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import styled from 'styled-components'

export const Navigation = () => {
    const navigate = useNavigate()

    return (
        <Div>
            <p onClick={() => navigate(RoutingPath.HomeView)}>Home</p>
            <p onClick={() => navigate(RoutingPath.ClickView)}>Click-View</p>
            <p onClick={() => navigate(RoutingPath.StarWarsAPI)}>Star Wars API</p>
            <p onClick={() => navigate(RoutingPath.StarWarsAPI2)}>Star Wars API 2 (with button)</p>
            <p onClick={() => navigate(RoutingPath.FourthView)}>Fourth View</p>
        </Div>
    )
}

const Div = styled.div`
color: peachpuff; 
font-size: 1.5em;
`
