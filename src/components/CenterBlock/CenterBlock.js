import { Search } from '../Search/Search'
import { Filter } from '../Filter/Filter'
import {Tracks} from '../Tracks/Tracks'
import * as S from './Centerblock.styles'
import { useLocation } from 'react-router-dom';


export const CenterBlock = ({searchFilter, filterTracksByGenre, filterTracksByAuthor, sortUp, sortDown, sortBack, addFavorite, deleteFavorite, duration, isPlaying, isLoading, title, realTracks, handleChoice }) => {
    let location = useLocation();
    return (
        <S.MainCenterblock>
              <Search searchFilter={searchFilter}/>
              <S.CenterblockH2>{title}</S.CenterblockH2>
              {location.pathname==="/" && <Filter filterTracksByGenre={filterTracksByGenre} filterTracksByAuthor={filterTracksByAuthor} sortUp={sortUp} sortDown={sortDown} sortBack={sortBack}/>}
              <Tracks addFavorite={addFavorite} deleteFavorite={deleteFavorite} duration={duration} isPlaying={isPlaying} handleChoice={handleChoice} realTracks={realTracks} isLoading={isLoading}/>
            </S.MainCenterblock>
    )
}