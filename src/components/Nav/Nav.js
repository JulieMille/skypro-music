import { useState } from 'react';
// import './Nav.css';
import * as S from './Nav.styles';
import { NavLink } from 'react-router-dom';


export const Nav = ({ handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleMenuOpen() {
    setIsMenuOpen(!isMenuOpen) 
  }
    return (
        <S.MainNav>
              <S.NavLogo>
                <S.LogoImage src="img/logo.png" alt="logo" />
              </S.NavLogo>
              <S.NavBurger onClick={handleMenuOpen}>
                <S.BurgerLine></S.BurgerLine>
                <S.BurgerLine></S.BurgerLine>
                <S.BurgerLine></S.BurgerLine>
              </S.NavBurger>
              {isMenuOpen ? (
              <S.NavMenu>
                <S.MenuList>
                  <S.MenuItem>
                    <NavLink to="/">
                    <S.MenuLink href="#">Главное</S.MenuLink>
                    </NavLink>
                  </S.MenuItem>
                  <S.MenuItem>
                  <NavLink to="/favorites">
                    <S.MenuLink href="#">Мой плейлист</S.MenuLink>
                  </NavLink>
                  </S.MenuItem>
                  <S.MenuItem>
                    <S.MenuLink onClick={handleLogout} href="#">Выйти</S.MenuLink>
                  </S.MenuItem>
                </S.MenuList>
              </S.NavMenu>
              ) : ''}
            </S.MainNav>
    )
}