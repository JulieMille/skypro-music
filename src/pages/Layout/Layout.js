import { Outlet } from "react-router-dom"
import { Bar } from "../../components/Bar/Bar.styles"
import { useContext } from "react"
import { PlayerContext } from "../../App"
import { useSelector } from "react-redux"
import { Player } from "../../components/Player/Player"

export const Layout = ({ addFavorite, deleteFavorite, duration, currentTime, rangedVolume, handleVolume, handleShuffle, handlePrev, handleNext, togglePlay, isPlaying, toggleLoop, isCycled, isShuffled, isLoading, }) => {
    
    const player = useContext(PlayerContext);
    const chosenTrack = useSelector((state) => state.currentTrack);
    const realTracks = useSelector((state) => state.currentPlaylist);

    return (
        <>
        <Outlet/>
            {chosenTrack &&   <Player
            isLoading={isLoading}
            handleNext = {handleNext}
            handlePrev = {handlePrev}
            togglePlay={togglePlay}
            isPlaying={isPlaying}
            toggleLoop={toggleLoop}
            isCycled={isCycled}
            isShuffled={isShuffled}
            handleShuffle={handleShuffle}
            handleVolume={handleVolume}
            rangedVolume={rangedVolume}
            currentTime={currentTime}
            duration={duration}
            addFavorite={addFavorite} 
            deleteFavorite={deleteFavorite}>
                </Player>}
        
        </>
    )
}