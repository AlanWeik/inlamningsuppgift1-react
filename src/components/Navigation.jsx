import { useNavigate } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'

export const Navigation = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p onClick={() => navigate(RoutingPath.HomeView)}>Home</p>
            <p onClick={() => navigate(RoutingPath.SecondView)}>Second View</p>
            <p onClick={() => navigate(RoutingPath.ThirdView)}>Third View</p>
            <p onClick={() => navigate(RoutingPath.FourthView)}>Fourth View</p>
        </div>
    )
}