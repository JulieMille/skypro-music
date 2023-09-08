import { useState } from 'react';
import * as S from './Register.styles'

function Register() {
    return (
        <S.Container>
        <S.Form>
            <S.Logo src='img/LogoReg.png'/>
            <S.Input placeholder='Почта' />
            <S.Input placeholder='Пароль' />
            <S.Input placeholder='Повторите пароль' />
            <S.Button type='submit'>Зарегестрироваться</S.Button>
        </S.Form>
        </S.Container>
    )
}

export default Register;