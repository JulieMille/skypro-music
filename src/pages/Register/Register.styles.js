import { styled } from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    background-color: white;
    width: 366px;
    height: 439px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const Input = styled.input`
    width: 278px;
    border: none;
    border-bottom: solid 1px #D0CECE;
    color: #D0CECE;
    outline: none;
    padding-bottom: 8px;
    padding-top: 8px;
    &::placeholder {
    color: #D0CECE;
    /* font-family: "StratosSkyeng"; */
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}
`

export const Button = styled.button`
    background-color: #580EA2;
    width: 278px;
    height: 52px;
    top: 338px;
    left: 44px;
    border-radius: 6px;
    border: none;
    color: #FFF;
    font-variant-numeric: lining-nums proportional-nums;
    /* font-family: StratosSkyeng; */
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
`

export const Logo = styled.img`
`