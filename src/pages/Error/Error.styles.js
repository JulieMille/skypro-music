import { styled } from 'styled-components';

export const BiggerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const H1 = styled.p`
    color: #FFF;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 160px;
    font-style: normal;
    font-weight: 400;
    line-height: 168px;
`

export const Subtitle = styled.p`
    color: #FFF;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; 
`

export const Img = styled.img``

export const Box = styled.div`
    display: flex;
    flex-direction: row;
`

export const Line = styled.p`
    width: 278px;
    color: #4E4E4E;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
    letter-spacing: -0.054px;`

export const Button = styled.button`
    width: 278px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 6px;
    background-color: #580EA2;
    color: #FFF;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
    letter-spacing: -0.054px;
`