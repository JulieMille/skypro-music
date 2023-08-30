import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import Tracks from '../Tracks/Tracks'
import * as S from './Centerblock.styles'


function CenterBlock({ isLoading }) {
    return (
        <S.MainCenterblock>
              <Search/>
              <S.CenterblockH2>Треки</S.CenterblockH2>
              <Filter/>
              <Tracks isLoading={isLoading}/>
            </S.MainCenterblock>
    )
}

export default CenterBlock;