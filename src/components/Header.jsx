import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <HeaderContainer>
            <Logo><img src="/data/idivine.svg" alt="logo" /></Logo>
            <Nav>
                <NavLink to="/" exact activeClassName="active">Finder</NavLink>
                <NavLink to='/manager' activeClassName="active">Manager</NavLink>
            </Nav>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;

`

const Logo = styled.div`

`

const Nav = styled.nav`
    .active {
        color: black;
    }
`

const NavLink = styled(Link)`

`

export default Header;