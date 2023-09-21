import { Bar } from '../../components/Bar/Bar';
import { Nav } from '../../components/Nav/Nav';
import { Main } from '../../App.styles';
import { Search } from '../../components/Search/Search';
import { Link } from 'react-router-dom';
import * as St from './Error.styles';
import * as S from '../../components/CenterBlock/Centerblock.styles'

export const Error = () => {
  return (
    <>
    <Main>
        <Nav/>
        <S.MainCenterblock>
              <Search/>
              <St.BiggerBox>
                <St.H1>404</St.H1>
                <St.Box>
                    <St.Subtitle>Страница не найдена</St.Subtitle>
                    <St.Img src="img/crying.png"/>
                </St.Box>
                <St.Line>Возможно, она была удалена или перенесена на другой адрес</St.Line>
                <Link to="/">
                    <St.Button>Вернуться на главную</St.Button>
                </Link>
            </St.BiggerBox>
            </S.MainCenterblock>
    </Main>
    <Bar isLoading={true}/>
    </>
  );
}