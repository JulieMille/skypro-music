import Bar from '../../components/Bar/Bar';
import Nav from '../../components/Nav/Nav';
import { Main } from '../../App.styles';
import * as S from '../../components/CenterBlock/Centerblock.styles'
import Search from '../../components/Search/Search';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledBiggerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const StyledH1 = styled.p`
    color: #FFF;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 160px;
    font-style: normal;
    font-weight: 400;
    line-height: 168px;
`

const StyledSubtitle = styled.p`
    color: #FFF;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; 
`

const StyledImg = styled.img``

const StyledBox = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledLine = styled.p`
    width: 278px;
    color: #4E4E4E;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
    letter-spacing: -0.054px;`

const StyledButton = styled.button`
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

function Error() {
  return (
    <>
    <Main>
        <Nav/>
        <S.MainCenterblock>
              <Search/>
              <StyledBiggerBox>
                <StyledH1>404</StyledH1>
                <StyledBox>
                    <StyledSubtitle>Страница не найдена</StyledSubtitle>
                    <StyledImg src="img/crying.png"/>
                </StyledBox>
                <StyledLine>Возможно, она была удалена или перенесена на другой адрес</StyledLine>
                <Link to="/">
                    <StyledButton>Вернуться на главную</StyledButton>
                </Link>
            </StyledBiggerBox>
            </S.MainCenterblock>
    </Main>
    <Bar isLoading={true}/>
    </>
  );
}

export default Error;
