import React from "react";
import Logo from './Navigation/Logo';
import MenuLinks from "./Navigation/MenuLinks";
import MenuToggle from "./Navigation/MenuToggle";
import NavBarContainer from "./Navigation/NavBarContainer";


const NavBar = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <NavBarContainer {...props}>
            <Logo w="100px" />
            <MenuLinks isOpen={isOpen} />

            <MenuToggle toggle={toggle} isOpen />
        </NavBarContainer>
    )
}

export default NavBar