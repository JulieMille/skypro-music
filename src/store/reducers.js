const initialState = {
    currentTrack: null,
    currentPlaylist: [],
    favoritePlaylist: [],
    nowPlaylist: []
    
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_CURRENT_TRACK":
        return {
          ...state,
          currentTrack: action.payload,
        };
      
      case "SET_PLAYLIST":
        return {
          ...state,
          currentPlaylist: action.payload,
        };
     
      case "SET_FAVORITE_PLAYLIST":
          return {
            ...state,
            favoritePlaylist: action.payload,
        };

      case "SET_NOW_PLAYLIST":
          return {
            ...state,
            nowPlaylist: action.payload,
        };
    
  
      default:
        return state;
    }
  };
  
  export default rootReducer;