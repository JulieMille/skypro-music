import { Search } from '../Search/Search'
import { Filter } from '../Filter/Filter'
import {Tracks} from '../Tracks/Tracks'
import * as S from './Centerblock.styles'
import { useLocation } from 'react-router-dom';


export const CenterBlock = ({ addFavorite, deleteFavorite, duration, isPlaying, isLoading, title, realTracks, handleChoice }) => {
    let location = useLocation();
    return (
        <S.MainCenterblock>
              <Search/>
              <S.CenterblockH2>{title}</S.CenterblockH2>
              {location.pathname==="/" && <Filter/>}
              <Tracks addFavorite={addFavorite} deleteFavorite={deleteFavorite} duration={duration} isPlaying={isPlaying} handleChoice={handleChoice} realTracks={realTracks} isLoading={isLoading}/>
            </S.MainCenterblock>
    )
}