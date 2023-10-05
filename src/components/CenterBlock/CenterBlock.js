import { Search } from '../Search/Search'
import { Filter } from '../Filter/Filter'
import {Tracks} from '../Tracks/Tracks'
import * as S from './Centerblock.styles'
import { useLocation } from 'react-router-dom';


export const CenterBlock = ({ isPlaying, isLoading, title, realTracks, playStart }) => {
    let location = useLocation();
    return (
        <S.MainCenterblock>
              <Search/>
              <S.CenterblockH2>{title}</S.CenterblockH2>
              {location.pathname==="/" && <Filter/>}
              <Tracks isPlaying={isPlaying} playStart={playStart} realTracks={realTracks} isLoading={isLoading}/>
            </S.MainCenterblock>
    )
}