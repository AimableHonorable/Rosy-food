import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarWrap,
    SidebarRoute

} from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Breakfast</SidebarLink>
                <SidebarLink to="/">Lunch</SidebarLink>
                <SidebarLink to="/">Dinner</SidebarLink>
                <SidebarLink to="/">Dessert</SidebarLink>
                <SidebarLink to="/">Drinks</SidebarLink>
            </SidebarMenu>
            <SidebarWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SidebarWrap>
        </SidebarContainer>
    )
}

export default Sidebar
