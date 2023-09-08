import { useState } from 'react';
// import './Nav.css';
import * as S from './Nav.styles';
import { NavLink } from 'react-router-dom';


function Nav() {
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
                    <S.MenuLink href="../signin.html">Войти</S.MenuLink>
                  </S.MenuItem>
                </S.MenuList>
              </S.NavMenu>
              ) : ''}
            </S.MainNav>
    )
}

export default Nav;