import { useNavigate } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import styled from 'styled-components'

export const Navigation = () => {
    const navigate = useNavigate()

    return (
        <Nav>
            <P>
                <p onClick={() => navigate(RoutingPath.HomeView)}>Home</p>
            </P>
            <P>
                <p onClick={() => navigate(RoutingPath.ClickView)}>Click-View</p>
            </P>
            <P>
                <p onClick={() => navigate(RoutingPath.StarWarsAPI)}>Star Wars API</p>
            </P>
            <P>
                <p onClick={() => navigate(RoutingPath.StarWarsAPI2)}>Star Wars API 2 (with button)</p>
            </P>
        </Nav>
    )
}

const Nav = styled.nav`
color: peachpuff; 
font-size: 1.5em;
`

const P = styled.p`
&:hover {
    transition: .2s all ease-in-out;
    color: white;
}
float: left;
width: 25%;
margin-top: 0%;
display: block;
text-align: center;
`