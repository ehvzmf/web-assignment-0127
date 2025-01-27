import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <HeaderContainer>
            <Logo><img src="../../idivine.svg" alt="logo" /></Logo>
            <Nav>
                <NavLink to="/" exact activeClassName="active">Finder</NavLink>
                <NavLink to='/manager' activeClassName="active">Manager</NavLink>
            </Nav>
            <Empty />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    background-color: #D9D9D9;
`

const Logo = styled.div`
    width: 50px;
`

const Nav = styled.nav`
    .active {
        color: black;
    }
`

const NavLink = styled(Link)`

`;

const Empty = styled.div`

`;

export default Header;