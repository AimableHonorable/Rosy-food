
import { Bars, Nav, NavIcon, NavLink } from "./NavElements"
const Navbar = () => {
    return (
        <Nav>
            <NavLink to="/">Home</NavLink>
            <NavIcon>
                <p>Menu</p>
                <Bars/>
            </NavIcon>
        </Nav>
    )
}


export default Navbar
