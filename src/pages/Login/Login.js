import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Registration from '../Register/Register';
import * as S from '../Login/Login.styles'

function Login({onLogin}) {
    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        onLogin();
        navigate('/');
        console.log("worked");
    }
    return (
        <S.Container>
        <S.Form onSubmit={handleSubmit}>
            <S.Logo src='img/LogoReg.png'/>
            <S.Input placeholder='Почта' />
            <S.Input placeholder='Пароль' />
            <S.Button type='submit'>Войти</S.Button>
            <Link to="/register">
                <S.ButtonReg>Зарегестрироваться</S.ButtonReg>
            </Link>
        </S.Form>
        </S.Container>
    )
}

export default Login;