import * as S from './Search.styles';

export const Search = ({searchFilter}) => {
    return (
        <S.CenterblockSearch>
            <S.SearchSvg>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
            </S.SearchSvg>
            <S.SearchText
                type="search"
                placeholder="Поиск"
                name="search"
                onChange={(event) => searchFilter(event.target.value)}
            />
        </S.CenterblockSearch>
    )
}