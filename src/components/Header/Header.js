import Navbar from "../Navbar/Navbar"
import { 
    HeaderContainer, 
    HeaderContent, 
    HeaderItems,
    HeaderH1,
    HeaderP,
    HeaderButton
} from "./HeaderElements"

const Header = () => {
    return (
        <HeaderContainer>
            <Navbar/>
            <HeaderContent>
                <HeaderItems>
                    <HeaderH1>Rosy Food</HeaderH1>
                    <HeaderP>Delicious food you deserve</HeaderP>
                    <HeaderButton>Place Order</HeaderButton>
                </HeaderItems>
            </HeaderContent>
        </HeaderContainer>
    )
}


export default Header
